import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="text-[35vw] font-bold tracking-tighter">AM</div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Main title - mobile optimized */}
        <div className="space-y-2 md:space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] tracking-tighter font-bold">
              Building
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end"
          >
            <h1 className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] tracking-tighter font-bold italic">
              Digital
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] tracking-tighter font-bold">
              Experiences
            </h1>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-[11px] md:text-xs lg:text-sm tracking-wider"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black transition-colors">
              <span className="group-hover:text-white transition-colors text-lg">↓</span>
            </div>
            <span>VIEW PROJECTS</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Navigation - mobile optimized */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10"
      >
        <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
          <div className="text-sm md:text-base tracking-wider font-bold">AM</div>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm">
            <a href="#about" className="hover:opacity-50 transition-opacity">ABOUT</a>
            <a href="#work" className="hover:opacity-50 transition-opacity">WORK</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">CONTACT</a>
          </div>
        </div>
      </motion.nav>
    </section>
  );
}