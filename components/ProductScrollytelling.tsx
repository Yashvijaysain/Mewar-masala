"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ScrollytellingProps {
  product: Product;
}

export default function ProductScrollytelling({ product }: ScrollytellingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative z-10 w-full min-h-[400vh]">
      {/* SECTION 1 */}
      <div className="h-screen flex items-center justify-start ml-6 md:ml-[10%] pr-6 md:pr-0">
        <RevealText progress={scrollYProgress} range={[0.0, 0.2]}>
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{product.section1.title}</h2>
            <p className="text-xl md:text-2xl text-white/70">{product.section1.subtitle}</p>
          </div>
        </RevealText>
      </div>

      {/* SECTION 2 */}
      <div className="h-screen flex items-center justify-end mr-6 md:mr-[10%] pl-6 md:pl-0">
        <RevealText progress={scrollYProgress} range={[0.25, 0.45]}>
          <div className="max-w-xl text-right">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{product.section2.title}</h2>
            <p className="text-xl md:text-2xl text-white/70">{product.section2.subtitle}</p>
          </div>
        </RevealText>
      </div>

      {/* SECTION 3 */}
      <div className="h-screen flex items-center justify-start ml-6 md:ml-[10%] pr-6 md:pr-0">
        <RevealText progress={scrollYProgress} range={[0.5, 0.7]}>
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{product.section3.title}</h2>
            <p className="text-xl md:text-2xl text-white/70">{product.section3.subtitle}</p>
          </div>
        </RevealText>
      </div>

      {/* STATS SECTION */}
      <div className="h-screen flex flex-col items-center justify-center">
        <RevealText progress={scrollYProgress} range={[0.75, 0.9]}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">{product.section4.title}</h2>
            <p className="text-xl md:text-2xl text-white/70">{product.section4.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl px-4">
            {product.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center justify-center p-8 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl font-black mb-2" style={{ color: product.themeColor }}>
                  {stat.val}
                </span>
                <span className="text-lg font-medium tracking-wider uppercase text-white/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </RevealText>
      </div>
    </div>
  );
}

function RevealText({ children, progress, range }: { children: React.ReactNode, progress: any, range: number[] }) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [50, 0, 0, -50]);
  
  return (
    <motion.div style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
