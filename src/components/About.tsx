import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import img1 from "../assets/images/img1.jpg";

export function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(imageScroll, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 md:space-y-10"
          >
            <div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6 opacity-60">
                ABOUT ME
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-bold leading-[1.15] mb-6 md:mb-8">
                Creating digital
                <br />
                experiences with
                <br />
                <span className="italic">passion</span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-relaxed opacity-70 text-left md:[text-align:justify]">
              <p>
                Hi, my name is Aditya Mahendra. I am a Computer Science fresh
                graduate from IPB University with a strong interest in frontend
                web development. I enjoy building responsive and user-friendly
                web applications using ReactJS, TypeScript, and modern web
                technologies. I also have experience with API integration and
                component-based development, with a strong focus on clean
                architecture and usability.
              </p>
            </div>

            {/* Services - mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
              {[
                "Frontend Development",
                "UI Implementation",
                "Responsive Design",
                "Web Optimization",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-black pl-4"
                >
                  <div className="text-xs opacity-60 mb-1">0{index + 1}</div>
                  <div className="font-bold text-sm md:text-base">
                    {service}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image - mobile optimized */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={img1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ y }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
