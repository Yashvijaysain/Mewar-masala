"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface SequenceRendererProps {
  folderPath: string;
  frameCount: number;
}

export default function SequenceRenderer({ folderPath, frameCount }: SequenceRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Transform scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    // Preload all images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${folderPath}/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push(img);
            loadedCount++;
            resolve(true);
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${i}`);
            resolve(false);
          };
        });
      }

      loadedImages.sort((a, b) => {
        const aNum = parseInt(a.src.match(/ezgif-frame-(\d+)/)?.[1] || "0");
        const bNum = parseInt(b.src.match(/ezgif-frame-(\d+)/)?.[1] || "0");
        return aNum - bNum;
      });

      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, [folderPath, frameCount]);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (index: number) => {
      const imgIndex = Math.min(Math.max(Math.floor(index) - 1, 0), images.length - 1);
      const img = images[imgIndex];

      if (img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio for cover fit
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Set canvas dimensions to match inner window
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();


    // Subscribe to scroll updates
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });

    renderFrame(1); // Render first frame initially

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      unsubscribe();
    };
  }, [isLoaded, images, frameIndex]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden origin-top opacity-80">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full"
          />
        </div>
      )}
    </div>
  );
}
