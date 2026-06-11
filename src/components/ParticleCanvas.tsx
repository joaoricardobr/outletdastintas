"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  alphaSpeed: number;
  depth: number; // 3D depth layer: 1 (front) to 3 (back)
  angle: number;
  spinSpeed: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const colors = [
      "rgba(212, 175, 55, ", // Gold metallic
      "rgba(15, 106, 74, ",  // Arch Green
      "rgba(255, 255, 255, ", // White premium
      "rgba(170, 124, 17, ",  // Gold dark
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 8 + 2;
        const depth = Math.random() * 3 + 1; // 1 = foreground, 3 = background
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (1.5 / depth),
          vy: (Math.random() - 0.5) * (1.5 / depth) - 0.2 / depth, // slow upward drift
          radius: radius / (depth * 0.5),
          color: colors[colorIndex],
          alpha: Math.random() * 0.6 + 0.1,
          alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
          depth: depth,
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.01,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    // Initial size setup
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Smooth mouse coordinates interpolation for smooth parallax inertia
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw background ambient glow
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 10,
          mouse.x, mouse.y, 400
        );
        gradient.addColorStop(0, "rgba(15, 106, 74, 0.08)");
        gradient.addColorStop(0.5, "rgba(212, 175, 55, 0.03)");
        gradient.addColorStop(1, "rgba(5, 5, 5, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Render layers from background to foreground (depth-based sorting)
      // We sort the particles by depth descending so depth 3 (back) renders first, depth 1 (front) last
      const sortedParticles = [...particles].sort((a, b) => b.depth - a.depth);

      sortedParticles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spinSpeed;

        // Apply mouse interaction (parallax depth shift)
        let dx = 0;
        let dy = 0;
        if (mouse.active) {
          const mouseDistX = mouse.x - p.x;
          const mouseDistY = mouse.y - p.y;
          const dist = Math.sqrt(mouseDistX * mouseDistX + mouseDistY * mouseDistY);
          
          if (dist < 300) {
            // Push or pull particles based on depth, generating 3D separation effect
            const force = (300 - dist) / 300;
            const parallaxScale = 25 / p.depth; // closer particles shift more
            dx = (mouseDistX / dist) * force * -parallaxScale;
            dy = (mouseDistY / dist) * force * -parallaxScale;
          }
        }

        // Fade in/out animation
        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.1 || p.alpha >= 0.7) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Border wrapping
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Render particle
        ctx.save();
        ctx.beginPath();
        
        const finalX = p.x + dx;
        const finalY = p.y + dy;

        // Render particles with depth-of-field blur
        if (p.depth > 2) {
          ctx.filter = `blur(${Math.round(p.depth * 1.5)}px)`;
        } else if (p.depth < 1.5) {
          ctx.filter = "blur(0.5px)";
        }
        
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = p.color.includes("212, 175, 55") ? "#D4AF37" : "#0F6A4A";
        ctx.shadowBlur = p.depth < 2 ? 15 : 5;
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
