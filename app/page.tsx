"use client";

import React, { useState, useEffect } from "react";
import SequenceRenderer from "@/components/SequenceRenderer";
import ProductScrollytelling from "@/components/ProductScrollytelling";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OnboardVideo from "@/components/OnboardVideo";
import { products } from "@/data/products";
import { motion } from "framer-motion";

export default function Home() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showOnboard, setShowOnboard] = useState(true);
  const currentProduct = products[currentProductIndex];

  // Optional: Auto update global css variable when product changes (for transitions)
  useEffect(() => {
    document.documentElement.style.setProperty('--product-gradient', currentProduct.gradient);
  }, [currentProduct]);

  const handleOnboardComplete = () => {
    setShowOnboard(false);
  };

  if (showOnboard) {
    return <OnboardVideo onComplete={handleOnboardComplete} />;
  }

  return (
    <main className="relative min-h-screen text-white selection:bg-yellow-500 selection:text-white">
      <Navbar />

      {/* Render the 3D sequence as background */}
      {(["/images/haldi", "/images/mirchi", "/images/dhaniya"].includes(currentProduct.folderPath)) && (
        <SequenceRenderer
          key={currentProduct.id}
          folderPath={currentProduct.folderPath}
          frameCount={currentProduct.folderPath === "/images/mirchi" || currentProduct.folderPath === "/images/dhaniya" ? 240 : 200}
        />
      )}

      <div className="relative z-10 w-full">
        {/* Main Hero View */}
        <Hero product={currentProduct} />

        {/* Scrollytelling content */}
        <ProductScrollytelling product={currentProduct} />

        {/* Buy Section / Footer block */}
        <section className="relative z-20 min-h-screen bg-black flex items-center justify-center py-20 px-4 pt-32">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Details & Copy */}
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-bold mb-4" style={{ color: currentProduct.themeColor }}>
                  {currentProduct.detailsSection.title}
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  {currentProduct.detailsSection.description}
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-2xl font-semibold mb-3">{currentProduct.freshnessSection.title}</h4>
                <p className="text-white/70">{currentProduct.freshnessSection.description}</p>
              </div>
            </div>

            {/* Buy Card */}
            <motion.div
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: currentProduct.themeColor }}
              />

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 border-b border-white/10 pb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Order {currentProduct.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.buyNowSection.processingParams.map((param, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-left sm:text-right w-full sm:w-auto">
                  <span className="block text-4xl font-black" style={{ color: currentProduct.themeColor }}>
                    {currentProduct.buyNowSection.price}
                  </span>
                  <span className="text-sm text-white/60">{currentProduct.buyNowSection.unit}</span>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    🚚
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Express Delivery</h5>
                    <p className="text-sm text-white/60">{currentProduct.buyNowSection.deliveryPromise}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Our Guarantee</h5>
                    <p className="text-sm text-white/60">{currentProduct.buyNowSection.returnPolicy}</p>
                  </div>
                </div>
              </div>

              <button
                className="w-full py-5 rounded-2xl text-black font-bold text-xl uppercase tracking-wider transition-all transform hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: currentProduct.themeColor }}
              >
                Add to Cart
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-20 bg-black pb-8 pr-6 md:pr-12 text-right">
          <p className="text-white/40 text-xs tracking-widest uppercase font-medium hover:text-white/80 transition-colors">
            Made with <span className="text-red-500 mx-1">❤️</span> by Yash
          </p>
        </footer>

        {/* Product Switcher (Optional - for demoing other lines) */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 p-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/10">
          {products.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => setCurrentProductIndex(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${idx === currentProductIndex ? "scale-150" : "opacity-50 hover:opacity-100"
                }`}
              style={{ backgroundColor: prod.themeColor }}
              title={prod.name}
              aria-label={`Switch to ${prod.name}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
