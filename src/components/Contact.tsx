import { motion } from "motion/react";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";

// KONFIGURASI EMAILJS - SUDAH TERDAFTAR DAN BERFUNGSI
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "3J9Xegzz4tWYv2Gdr", // Dari Account > API Keys
  SERVICE_ID: "service_m282ers", // Dari Email Services
  TEMPLATE_ID: "template_uvgm4as", // Dari Email Templates
};

// Types
interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

interface AlertState {
  show: boolean;
  message: string;
  type: "success" | "error" | "";
}

// Declare EmailJS type
declare const emailjs: any;

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [alert, setAlert] = useState<AlertState>({
    show: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // Inisialisasi EmailJS saat komponen dimuat
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (typeof emailjs !== "undefined") {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log("EmailJS initialized");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 5000);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (formData.from_email && !validateEmail(formData.from_email)) {
      setEmailError(true);
      showAlert("⚠️ Please enter a valid email address", "error");
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi
    if (!formData.from_name || !formData.from_email || !formData.message) {
      showAlert("⚠️ Please fill in all fields", "error");
      return;
    }

    if (!validateEmail(formData.from_email)) {
      showAlert("⚠️ Please enter a valid email address", "error");
      return;
    }

    setIsLoading(true);

    // Kirim email menggunakan emailjs.sendForm seperti kode JavaScript asli
    const form = e.currentTarget;

    emailjs
      .sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, form)
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
          showAlert(
            "✅ Message sent successfully! I'll get back to you soon.",
            "success"
          );
          // Reset form
          setFormData({ from_name: "", from_email: "", message: "" });
          setIsLoading(false);
        },
        (error: any) => {
          console.error("FAILED...", error);
          showAlert(
            "❌ Failed to send message. Please try again or contact me directly via email.",
            "error"
          );
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Alert */}
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 p-4 rounded-lg ${
              alert.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {alert.message}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left - Big call to action */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-10 lg:space-y-12"
          >
            <div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6 lg:mb-8 origin-left"
              >
                LET'S TALK
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tight font-bold leading-[1.1] mb-4 md:mb-6 lg:mb-8">
                Got a<br />
                project?
                <br />
                <span className="italic opacity-60">Let's create</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl opacity-70 leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Let's turn your ideas into reality.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4 md:space-y-6">
              {[
                { label: "Email", value: "aditpromahendra@gmail.com" },
                { label: "Phone", value: "+62 853 1193 7779" },
                { label: "Location", value: "Jakarta, Indonesia" },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="text-xs md:text-sm opacity-60 mb-1">
                    {info.label}
                  </div>
                  <div className="text-base md:text-lg lg:text-xl group-hover:translate-x-2 transition-transform break-all">
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4 md:gap-6"
            >
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/adityamhdr",
                },
                { name: "GitHub", url: "https://github.com/adityamhdr10" },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/adityamhdr10/",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-xs md:text-sm border-b border-black pb-1 hover:opacity-50 transition-opacity"
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form with unique styling */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <label className="text-xs md:text-sm tracking-wider mb-2 md:mb-3 block opacity-60">
                  NAME
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-black pb-3 md:pb-4 text-base md:text-lg lg:text-xl focus:outline-none transition-all focus:border-opacity-50"
                  placeholder="Your name"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <label className="text-xs md:text-sm tracking-wider mb-2 md:mb-3 block opacity-60">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  className={`w-full bg-transparent border-b-2 pb-3 md:pb-4 text-base md:text-lg lg:text-xl focus:outline-none transition-all focus:border-opacity-50 ${
                    emailError ? "border-red-500" : "border-black"
                  }`}
                  placeholder="name@example.com"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <label className="text-xs md:text-sm tracking-wider mb-2 md:mb-3 block opacity-60">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-black pb-3 md:pb-4 text-base md:text-lg lg:text-xl focus:outline-none resize-none transition-all focus:border-opacity-50"
                  placeholder="Tell me about your project..."
                  disabled={isLoading}
                  required
                />
              </div>

              <motion.button
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                type="submit"
                id="submit-btn"
                disabled={isLoading}
                className={`w-full bg-black text-white py-4 md:py-6 text-xs md:text-sm tracking-widest transition-all group relative overflow-hidden  cursor-pointer ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-opacity-80"
                }`}
              >
                {!isLoading && (
                  <motion.div
                    className="absolute inset-0 bg-white cursor-pointer"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 cursor-pointer">
                  {isLoading ? "SENDING..." : "SEND MESSAGE"}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 lg:mt-32 pt-6 md:pt-10 lg:pt-12 border-t border-black"
        >
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
            <div className="text-3xl md:text-4xl lg:text-6xl tracking-tight font-bold">
              ADITYA
              <br className="sm:hidden" /> MAHENDRA
            </div>
            <div className="flex flex-col md:items-end justify-end gap-1 md:gap-2 text-[10px] md:text-xs opacity-60">
              <div>© 2024 All rights reserved</div>
              <div>Web Developer</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
