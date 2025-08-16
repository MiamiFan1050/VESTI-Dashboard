import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const LOOKS = [
  { before: "/images/alex-b1.webp", after: "/images/alex-r1.webp", title: "Pullovers", blurb: "Relaxed fit. Clean drape. Easy summer layer." },
  { before: "/images/alex-b2.webp", after: "/images/alex-r2.webp", title: "T-Shirts", blurb: "Breathable weave with vertical stripes for length." },
  { before: "/images/alex-b3.webp", after: "/images/alex-r3.webp", title: "Hoodies", blurb: "Streamlined pockets, structured collar, mid‑weight." },
  { before: "/images/alex-b4.webp", after: "/images/alex-r4.webp", title: "Jackets", blurb: "Heavyweight cotton, true‑to‑size shoulders." },
];

export default function VestiScrollJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Tall section drives one sticky stage
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // ---- Timings (progress is 0..1 across the whole section)
  // Determine active look by fixed breakpoints - much more spread out
  const BREAKS = [0.08, 0.25, 0.42, 0.59, 0.76]; // Alex before, then result 1, 2, 3, 4 - much more spread out
  const [activeIndex, setActiveIndex] = useState(-1); // Start with Alex before

  // Track scroll changes and update active index with smoother transitions
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < BREAKS[0]) setActiveIndex(-1);
    else if (latest < BREAKS[1]) setActiveIndex(0);
    else if (latest < BREAKS[2]) setActiveIndex(1);
    else if (latest < BREAKS[3]) setActiveIndex(2);
    else if (latest < BREAKS[4]) setActiveIndex(3);
    else setActiveIndex(3);
  });



    return (
          <section ref={sectionRef} className="relative h-[600vh] bg-white text-zinc-900">
        <div className="sticky top-0 h-screen">
          {/* Enhanced Gradient Background Overlay */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255, 105, 180, 0.5) 0%, rgba(255, 182, 193, 0.3) 30%, rgba(255, 105, 180, 0.1) 60%, rgba(255, 105, 180, 0) 80%)",
              opacity: useTransform(scrollYProgress, [0, 0.15, BREAKS[4] + 0.05, BREAKS[4] + 0.15], [0, 1, 1, 0])
            }}
          />
          <div className="mx-auto max-w-[1200px] h-full flex items-center justify-center px-4 md:px-6 relative z-10">

          {/* CENTER: Phone frame with Alex result images - positioned to poke into next section */}
          <div className="relative w-[180px] md:w-[400px] h-[360px] md:h-[700px] mx-auto z-20">
            
            {/* Phone frame */}
            <div className="relative w-full h-full">
              {/* Phone body */}
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl border-8 border-gray-800">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                
                {/* Screen content */}
                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-white">
                  {/* Preload all images */}
                  <div className="hidden">
                    <img src="/images/alex-before.webp" alt="preload" />
                    {LOOKS.map(look => (
                      <img key={look.after} src={look.after} alt="preload" />
                    ))}
                  </div>
                  
                  {/* No flash transition - instant image switching */}
                  {activeIndex === -1 ? (
                    // Show Alex before
                    <img
                      src="/images/alex-before.webp"
                      alt="Virtual try-on before - AI fashion technology demonstration"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Show Alex results
                    <img
                      src={LOOKS[activeIndex].after}
                      alt={`Virtual try-on result - ${LOOKS[activeIndex].title} - AI-powered virtual fitting room`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              
              {/* Phone shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 rounded-full blur-lg"></div>
            </div>
          </div>



          {/* Combined text container that slides from behind phone to the left */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] px-8 z-0">
            
            {/* Main heading - flows out with first result and stays */}
            <motion.div
              style={{
                x: useTransform(scrollYProgress, [BREAKS[0] - 0.02, BREAKS[0] + 0.02], ["0px", "-400px"]),
                opacity: useTransform(scrollYProgress, [BREAKS[0] - 0.02, BREAKS[0] + 0.02, 1], [0, 1, 1])
              }}
              className="text-right mb-8"
            >
              <div className="text-2xl md:text-4xl font-bold text-zinc-900 mb-2">Try on any item...</div>
            </motion.div>

            {/* Result 1 Text */}
            <motion.div
              style={{
                x: useTransform(scrollYProgress, [BREAKS[0] - 0.05, BREAKS[0] + 0.10], ["0px", "-400px"]),
                opacity: useTransform(scrollYProgress, [BREAKS[0] - 0.05, BREAKS[0] + 0.05, BREAKS[1] + 0.05], [0, 1, 0])
              }}
              className="text-right absolute"
            >
              <div className="text-3xl md:text-5xl font-bold text-zinc-900 mb-2">Casual</div>
              <div className="text-base md:text-xl text-zinc-600">Relaxed everyday style</div>
            </motion.div>

            {/* Result 2 Text */}
            <motion.div
              style={{
                x: useTransform(scrollYProgress, [BREAKS[1] - 0.05, BREAKS[1] + 0.10], ["0px", "-400px"]),
                opacity: useTransform(scrollYProgress, [BREAKS[1] - 0.05, BREAKS[1] + 0.05, BREAKS[2] + 0.05], [0, 1, 0])
              }}
              className="text-right absolute"
            >
              <div className="text-3xl md:text-5xl font-bold text-zinc-900 mb-2">Classic</div>
              <div className="text-base md:text-xl text-zinc-600">Timeless striped design</div>
            </motion.div>

            {/* Result 3 Text */}
            <motion.div
              style={{
                x: useTransform(scrollYProgress, [BREAKS[2] - 0.05, BREAKS[2] + 0.10], ["0px", "-400px"]),
                opacity: useTransform(scrollYProgress, [BREAKS[2] - 0.05, BREAKS[2] + 0.05, BREAKS[3] + 0.05], [0, 1, 0])
              }}
              className="text-right absolute"
            >
              <div className="text-3xl md:text-5xl font-bold text-zinc-900 mb-2">Urban</div>
              <div className="text-base md:text-xl text-zinc-600">Modern street style</div>
            </motion.div>

            {/* Result 4 Text */}
            <motion.div
              style={{
                x: useTransform(scrollYProgress, [BREAKS[3] - 0.05, BREAKS[3] + 0.10], ["0px", "-400px"]),
                opacity: useTransform(scrollYProgress, [BREAKS[3] - 0.05, BREAKS[3] + 0.05, 1], [0, 1, 0])
              }}
              className="text-right absolute"
            >
              <div className="text-3xl md:text-5xl font-bold text-zinc-900 mb-2">Premium</div>
              <div className="text-base md:text-xl text-zinc-600">High-quality comfort</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
