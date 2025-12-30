import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "PT BNI Sekuritas",
      period: "September 2024 - March 2025",
      description:
        "Worked on internal web applications using a Micro Frontend architecture, focusing on usability, performance, and data accessibility.",
      responsibilities: [
        "Developed responsive UI components using React and TypeScript",
        "Integrated APIs and managed application state",
        "Built interactive features such as tables, filtering, and pagination",
        "Collaborated with backend developers and worked in a Scrum environment",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6 opacity-60">EXPERIENCE</div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl tracking-tight font-bold leading-[1.1]">
            Work<br />History
          </h2>
        </motion.div>

        {/* Experience Items */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-black pl-6 md:pl-10 py-4 md:py-6 hover:border-opacity-50 transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
                {/* Left - Period */}
                <div className="lg:col-span-2">
                  <div className="text-xs md:text-sm opacity-60 tracking-wider">{exp.period}</div>
                </div>

                {/* Right - Content */}
                <div className="lg:col-span-10 space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{exp.role}</h3>
                    <div className="text-lg md:text-xl opacity-70">{exp.company}</div>
                  </div>

                  <p className="text-base md:text-lg opacity-70 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <div className="text-xs md:text-sm tracking-wider opacity-60">KEY RESPONSIBILITIES</div>
                    <ul className="space-y-2 md:space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm md:text-base opacity-70">{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
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
