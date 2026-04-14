"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroScrollRotateImage() {
  const [rotation, setRotation] = useState(0);
  const lastScrollYRef = useRef(0);
  const currentRotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const animate = () => {
      const diff = targetRotationRef.current - currentRotationRef.current;
      currentRotationRef.current += diff * 0.14;

      setRotation(((currentRotationRef.current % 360) + 360) % 360);

      if (Math.abs(diff) > 0.05) {
        rafIdRef.current = window.requestAnimationFrame(animate);
      } else {
        currentRotationRef.current = targetRotationRef.current;
        rafIdRef.current = null;
      }
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      const step = Math.max(-32, Math.min(32, deltaY * 1.35));
      targetRotationRef.current += step;

      if (rafIdRef.current === null) {
        rafIdRef.current = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafIdRef.current !== null) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <div
      className="h-full w-full will-change-transform"
      style={{ transform: `perspective(1200px) rotateY(${rotation}deg)` }}
    >
      <Image
        src="/assets/dentisttools.png"
        alt="Dental mirror and explorer tools"
        width={800}
        height={800}
        priority
      />
    </div>
  );
}
