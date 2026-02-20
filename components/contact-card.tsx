"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import { motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";

interface ContactCardProps {
  locale: 'en' | 'es';
}

export const ContactCard: React.FC<ContactCardProps> = ({ locale }) => {
  const { t, i18n } = useTranslation();
  React.useEffect(() => { i18n.changeLanguage(locale); }, [locale, i18n]);
  const [isFlipped, setIsFlipped] = useState(false);

  const back = t('contact.back', { returnObjects: true }) as any;

  const contactInfo = [
    { icon: Mail, label: back.email, href: `mailto:${back.email}` },
    { icon: Github, label: back.github, href: "https://github.com/aandmaldonado" },
    { icon: Linkedin, label: back.linkedin, href: "https://linkedin.com/in/alvaro-maldonado-ai" },
    { icon: Globe, label: back.city, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
              {t("contact.title").split(" ").length <= 1 ? (
                t("contact.title")
              ) : t("contact.title").split(" ").length === 2 ? (
                <>
                  {t("contact.title").split(" ")[0]}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {t("contact.title").split(" ")[1]}
                  </span>
                </>
              ) : (
                <>
                  {t("contact.title").split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {t("contact.title").split(" ").slice(-2).join(" ")}
                  </span>
                </>
              )}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg sm:text-xl"
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>

        <div className="flex justify-center perspective-1000">
          <motion.div
            className="relative w-full max-w-[600px] aspect-[1.6/1] preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Front Side */}
            <div
              className={`absolute inset-0 w-full h-full backface-hidden bg-[#0A0F1E] border border-blue-500/20 rounded-3xl px-4 sm:px-8 py-8 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-glow-blue-strong ${!isFlipped ? "z-20 pointer-events-auto" : "z-0 pointer-events-none"}`}
              style={{ transform: "translateZ(1px)" }}
              onClick={() => setIsFlipped(true)}
            >
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-black/40 backdrop-blur-sm">
                    <Image
                      src="/logo.png"
                      alt="Logo de almap[i]"
                      fill
                      sizes="(max-width: 640px) 56px, 80px"
                      className="object-cover scale-110"
                    />
                  </div>
                  <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
                    almap<span className="text-blue-500">[i]</span>
                  </h3>
                </div>
                <p className="text-gray-300 text-[10px] xs:text-base sm:text-lg italic font-light text-center tracking-tight w-full px-2 sm:whitespace-nowrap">
                  {t("contact.slogan")}
                </p>
              </div>

              {/* Subtle Background Glow for Premium Feel */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/5 blur-[60px] rounded-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-600/5 blur-[60px] rounded-full" />
            </div>

            {/* Back Side */}
            <div
              className={`absolute inset-0 w-full h-full backface-hidden bg-[#0A0F1E] border border-blue-500/20 rounded-3xl p-4 sm:p-10 flex items-center sm:justify-center shadow-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-glow-blue-strong ${isFlipped ? "z-20 pointer-events-auto" : "z-0 pointer-events-none"}`}
              style={{ transform: "rotateY(180deg) translateZ(1px)" }}
            >
              {/* Clickable Background to flip back */}
              <div
                className="absolute inset-0 z-0 cursor-pointer"
                onClick={() => setIsFlipped(false)}
              />

              <div
                className="flex items-center gap-4 sm:gap-8 w-full max-w-xl relative z-10 pl-2 sm:pl-0 pointer-events-none"
              >
                <div className="relative w-20 h-20 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-black/40 backdrop-blur-sm pointer-events-auto cursor-pointer" onClick={() => setIsFlipped(false)}>
                  <Image
                    src="/logo.png"
                    alt="Logo de almap[i]"
                    fill
                    sizes="(max-width: 640px) 80px, 144px"
                    className="object-cover scale-110"
                  />
                </div>

                <div className="h-28 sm:h-36 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent shrink-0" />

                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 min-w-0 flex-1 pointer-events-auto">
                  {contactInfo.map((info, idx) => {
                    const isLink = info.href !== "#";

                    if (!isLink) {
                      return (
                        <div
                          key={idx}
                          className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-300 leading-tight"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                            <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                          </div>
                          <span className="text-[11px] sm:text-sm lg:text-[15px] font-medium tracking-wide">
                            {info.label}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={idx}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer relative z-50 pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          sendGAEvent('event', 'social_click', {
                            platform: info.label.toLowerCase(),
                            location: 'contact_card'
                          });
                        }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0 mt-0.5 sm:mt-0">
                          <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        </div>
                        <span className="text-[11px] sm:text-sm lg:text-[15px] font-medium tracking-wide leading-tight border-b border-transparent group-hover:border-white/20">
                          {info.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Subtle Background Glow for Premium Feel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-600/5 blur-[60px] rounded-full" />
            </div>
          </motion.div>
        </div>

        <p className="text-center mt-8 text-gray-300 text-sm animate-pulse">
          {t("contact.flipHint")}
        </p>
      </div>
    </section>
  );
};

export default ContactCard;