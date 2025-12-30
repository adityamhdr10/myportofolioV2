import { motion } from "motion/react";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Bank Saving System",
      category: "Fullstack",
      year: "2025",
      image: p3,
      description:
        "A web application for managing bank savings and deposito accounts with automated interest calculation for deposits and withdrawals.",
      tags: [
        "React",
        "Type Script",
        "Tailwind CSS",
        "NodeJs",
        "ExpressJs",
        "MySQL",
      ],
      github: "https://github.com/adityamhdr10/bank-saving-system-frontend",
      liveUrl: "https://bank-saving-system-frontend-production.up.railway.app/",
    },
    {
      title: "My Portofolio version 1",
      category: "Fullstack",
      year: "2025",
      image: p4,
      description:
        "My first personal portfolio website created using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/adityamhdr10/portofolio",
      liveUrl: "",
    },
    {
      title: "SneakerScout",
      category: "Frontend",
      year: "2024",
      image: p1,
      description:
        "A modern e-commerce platform for sneaker enthusiasts with advanced filtering and seamless user experience. Built with cutting-edge frontend technologies.",
      tags: ["HTML", "CSS", "Node.js", "MongoDB"],
      github: "https://github.com/Yessir626/deploy-sneaker",
    },
    {
      title: "Bookers",
      category: "Frontend",
      year: "2022",
      image: p2,
      description:
        "University project focused on backend development with robust database architecture and API design for a booking system.",
      tags: ["PHP", "HTML", "CSS", "MySQL"],
      github: "https://github.com/nechitast/Tugas-Akhir-Basdat",
    },
  ];

  return (
    <section
      id="work"
      className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-20 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6 opacity-60">
            PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl tracking-tight font-bold leading-[1.1]">
            Selected
            <br />
            Projects
          </h2>
        </motion.div>

        {/* Projects - mobile optimized */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className="border border-white/20 hover:border-white/60 transition-colors duration-500 overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  {/* Info - mobile responsive */}
                  <div className="lg:col-span-5 p-5 md:p-8 lg:p-12 flex flex-col justify-between">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3 text-[10px] md:text-xs opacity-60">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm md:text-base lg:text-lg opacity-70 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 border border-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 text-[10px] md:text-xs px-4 md:px-5 py-2.5 md:py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-300"
                      >
                        <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="tracking-wider">GITHUB</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-2 text-[10px] md:text-xs px-4 md:px-5 py-2.5 md:py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          <span className="tracking-wider">LIVE DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
