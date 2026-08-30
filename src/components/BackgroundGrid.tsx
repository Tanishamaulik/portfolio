"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse-following subtle crimson ambient light
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        400
      );
      gradient.addColorStop(0, "rgba(255, 59, 0, 0.08)");
      gradient.addColorStop(0.5, "rgba(255, 107, 0, 0.03)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Dynamic Canvas Ambient Glow */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Editorial Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: `80px 80px`,
        }}
      />

      {/* Crimson Ambient Light Orbs (Matching Reference Image) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[180px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-[170px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
    </div>
  );
}
