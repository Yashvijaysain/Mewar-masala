"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface HeroProps {
  product: Product;
}

export default function Hero({ product }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="z-10 text-center px-4 w-full max-w-4xl pt-20"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-yellow-400 font-semibold tracking-wider uppercase mb-4 text-sm md:text-base"
        >
          {product.subName}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mix-blend-overlay text-white leading-none"
        >
          {product.name}
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mix-blend-overlay px-4"
        >
          {product.features.map((feature, idx) => (
            <React.Fragment key={idx}>
              <span className="text-base md:text-lg font-medium text-center">{feature}</span>
              {idx < product.features.length - 1 && <span className="hidden md:inline text-yellow-500">•</span>}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden mb-4">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-yellow-500"
          />
        </div>
        <span className="text-xs tracking-widest uppercase text-white/50">Scroll to explore</span>
      </motion.div>
    </div>
  );
}
