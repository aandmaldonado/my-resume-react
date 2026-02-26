"use client"

import { useTranslation } from "react-i18next"
import { Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { trackSocialClick } from "@/lib/analytics"

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const copyright = t("footer.copyright").replace("{year}", year.toString())
  const slogan = t("footer.slogan")

  const socialLinks = [
    { icon: Mail, href: "mailto:readme.md@almapi.dev", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/alvaro-maldonado-ai", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/aandmaldonado", label: "GitHub" },
  ]

  return (
    <footer className="relative py-4 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Motto Signature */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-8 h-8 shrink-0 rounded-full overflow-hidden border border-blue-500/30 bg-black/40 backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Logo de almap[i]"
                fill
                sizes="32px"
                className="object-cover scale-110"
              />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                almap<span className="text-blue-500">[i]</span>
              </h3>
              <span className="text-gray-600 hidden sm:block">|</span>
              <p className="text-white text-sm sm:text-base font-medium tracking-tight">
                {slogan}
              </p>
            </div>
          </motion.div>

          {/* Social Links & Copyright */}
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  onClick={() => {
                    trackSocialClick(
                      link.label.toLowerCase(),
                      'footer',
                      link.href
                    );
                  }}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[10px] text-gray-400 tracking-wider uppercase hidden sm:block"
            >
              {copyright}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
