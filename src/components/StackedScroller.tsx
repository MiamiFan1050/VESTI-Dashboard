"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ChromeBadgeCard from "./ChromeBadgeCard";
import UploadQrCard from "./UploadQrCard";

export default function StackedScroller() {
  const ref = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", prefersReducedMotion ? "0vh" : "-20vh"]);
  const y2 = useTransform(scrollYProgress, [0.15, 1], ["20vh", prefersReducedMotion ? "0vh" : "-10vh"]);
  const scale2 = useTransform(scrollYProgress, [0.15, 1], [0.98, prefersReducedMotion ? 1 : 1]);

  return (
    <section ref={ref} className="relative">
      <div className="sticky top-0 min-h-[100svh] flex items-center justify-center bg-white">
        <motion.div 
          style={{ y: y1 }} 
          className="relative z-10 w-full max-w-5xl px-4"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <ChromeBadgeCard />
        </motion.div>
        <motion.div
          style={{ y: y2, scale: scale2 }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
        >
          <div className="pointer-events-auto w-full max-w-5xl px-4">
            <UploadQrCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 