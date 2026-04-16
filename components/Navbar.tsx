"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 transition-colors duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Mewar Masala Logo"
              className="h-8 md:h-10 lg:h-14 w-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform hover:scale-110"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
            <a href="#" className="hover:text-white transition-colors">Products</a>
            <a href="#" className="hover:text-white transition-colors">Our Story</a>
            <a href="#" className="hover:text-white transition-colors">Science</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center justify-center px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-opacity-90 transition-all">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8"
          >
            <a href="#" className="text-2xl font-medium text-white">Products</a>
            <a href="#" className="text-2xl font-medium text-white">Our Story</a>
            <a href="#" className="text-2xl font-medium text-white">Science</a>
            <a href="#" className="text-2xl font-medium text-white">Contact</a>
            <button className="flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-bold text-lg mt-8">
              Shop Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
