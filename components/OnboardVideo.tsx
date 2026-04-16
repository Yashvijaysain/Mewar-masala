"use client";

import React, { useEffect, useRef, useState } from "react";

interface OnboardVideoProps {
  folderPath?: string;
  frameCount?: number;
  onComplete: () => void;
}

export default function OnboardVideo({
  folderPath = "/images/onboard",
  frameCount = 240,
  onComplete,
}: OnboardVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [activeFolderPath, setActiveFolderPath] = useState<string>(folderPath);

  const determineFolderPath = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    const isPhoneRatio = ratio < 0.9 || width <= 768;

    return isPhoneRatio ? "/images/onboardmobile" : folderPath;
  };

  useEffect(() => {
    const updatePath = () => setActiveFolderPath(determineFolderPath());
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [folderPath]);

  useEffect(() => {
    let canceled = false;
    setIsLoaded(false);
    setHasError(false);
    setIsPlaying(false);
    setImages([]);

    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${activeFolderPath}/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;

        const loaded = await new Promise<boolean>((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });

        if (!loaded) {
          console.error(`Failed to load onboard frame ${i} from ${activeFolderPath}`);
          setHasError(true);
          return;
        }

        loadedImages.push(img);
      }

      if (canceled) return;
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();

    return () => {
      canceled = true;
    };
  }, [activeFolderPath, frameCount]);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const fps = 24;
    const frameDuration = 1000 / fps;
    let startTimestamp: number | null = null;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const renderFrame = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const index = Math.min(Math.floor(elapsed / frameDuration), frameCount - 1);
      const image = images[index];

      if (image) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
        const x = (canvas.width - image.width * scale) / 2;
        const y = (canvas.height - image.height * scale) / 2;
        ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
      }

      if (index < frameCount - 1) {
        animationFrameId = requestAnimationFrame(renderFrame);
      } else {
        onComplete();
      }
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);
    updateCanvasSize();
    setIsPlaying(true);
    animationFrameId = requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, images, frameCount, onComplete]);

  useEffect(() => {
    if (isLoaded && images.length > 0) {
      setHasError(false);
    }
  }, [isLoaded, images.length]);

  return (
    <div className="fixed inset-0 z-[999] bg-black text-white flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-screen h-screen object-cover" />

      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-20 bg-black/90 flex items-center justify-center px-6 sm:px-12 text-center">
          <div className="w-full max-w-lg">
            <div className="mx-auto mb-6 h-14 w-14 sm:h-16 sm:w-16 rounded-full border-4 border-white/20 border-t-yellow-500 animate-spin" />
            <h2 className="text-xl sm:text-3xl font-semibold mb-2">Mewar Masala</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Please wait while to load Website.
            </p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 z-20 bg-black/90 flex items-center justify-center px-4 sm:px-12 text-center">
          <div className="space-y-6 w-full max-w-md">
            <h2 className="text-xl sm:text-3xl font-semibold text-red-400">Onboarding failed to load.</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              The onboard images could not be loaded. Refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-yellow-500 text-black font-semibold transition hover:bg-yellow-400"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm text-white/60">
          {isLoaded
            ? isPlaying
              ? "Playing intro..."
              : "Preparing intro..."
            : "Loading frames..."}
        </p>
      </div>
    </div>
  );
}
