import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, BrainCircuit, Linkedin, MapPin, Sparkles, Github } from 'lucide-react';

interface ContactCardProps {
  locale: 'en' | 'es';
}

export const ContactCard: React.FC<ContactCardProps> = ({ locale }) => {
  const { t, i18n } = useTranslation();
  React.useEffect(() => { i18n.changeLanguage(locale); }, [locale, i18n]);
  const [flipped, setFlipped] = useState(false);

  // Datos parametrizables vía i18n
  const back = t('contact.back', { returnObjects: true }) as any;
  const title = t('contact.title');
  const subtitle = t('contact.subtitle');
  const slogan = t('contact.slogan')

  return (
    <section id="contact" className="w-full py-16 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center pt-8 sm:pt-14">
      <h2 className="flex items-center justify-center gap-3 text-2xl xs:text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
        <Mail className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        {title}
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl">{subtitle}</p>
      <div className="[perspective:1200px] flex justify-center items-center">
        <div className="border border-blue-200 dark:border-blue-800 rounded-2xl shadow-2xl">
          <div
            className={`relative w-[320px] xs:w-[360px] sm:w-[400px] md:w-[480px] h-[240px] xs:h-[280px] sm:h-[300px] md:h-[320px] bg-white dark:bg-neutral-900 rounded-2xl cursor-pointer`}
            tabIndex={0}
            aria-label={flipped ? t('contact.ariaBack') : t('contact.ariaFront')}
            onClick={() => setFlipped(f => !f)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setFlipped(f => !f)}
            role="button"
            style={{ outline: 'none' }}
          >
            <div
              className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
              {/* Front */}
              <div className="absolute w-full h-full bg-transparent flex flex-col items-center justify-center [backface-visibility:hidden] p-3 xs:p-4">
                <div className="flex items-center">
                  <BrainCircuit className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 mr-2 xs:mr-3" />
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    almap<span className="text-blue-600">[i]</span>
                  </span>
                </div>
                <p className="text-gray-900 text-center text-xs xs:text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 dark:text-white">
                <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                <span className="italic">{slogan}</span>
                <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
              </p>
              </div>
              {/* Back */}
              <div
                className="absolute w-full h-full text-white rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-4 xs:p-6 sm:p-8 gap-4 xs:gap-6 sm:gap-8"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #60a5fa 100%)',
                }}
              >
                {/* Icono grande - Responsive */}
                <div className="flex flex-col items-center justify-center h-full sm:h-full">
                  <BrainCircuit className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 text-blue-300 drop-shadow-lg" />
                </div>
                {/* Línea divisoria - Oculto en mobile */}
                <div className="hidden sm:block h-32 w-px bg-blue-200 shadow-lg mx-4" />
                {/* Info de contacto - Responsive */}
                <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 min-w-0 xs:min-w-0 sm:min-w-[160px] md:min-w-[180px]">
                  {back.email && (
                    <div className="flex items-center gap-2 xs:gap-3">
                      <Mail className="w-5 h-5 xs:w-6 xs:h-6 text-blue-200" />
                      <a href={`mailto:${back.email}`} className="underline text-white text-sm xs:text-base" onClick={e => e.stopPropagation()}>{back.email}</a>
                    </div>
                  )}
                  {back.github && (
                    <div className="flex items-center gap-2 xs:gap-3">
                      <Github className="w-5 h-5 xs:w-6 xs:h-6 text-blue-200" />
                      <a href={back.github} target="_blank" rel="noopener noreferrer" className="underline text-white text-sm xs:text-base" onClick={e => e.stopPropagation()}>@aandmaldonado</a>
                    </div>
                  )}
                  {back.linkedin && (
                    <div className="flex items-center gap-2 xs:gap-3">
                      <Linkedin className="w-5 h-5 xs:w-6 xs:h-6 text-blue-200" />
                      <a href={back.linkedin} target="_blank" rel="noopener noreferrer" className="underline text-white text-sm xs:text-base" onClick={e => e.stopPropagation()}>@almapidev</a>
                    </div>
                  )}
                  {back.city && (
                    <div className="flex items-center gap-2 xs:gap-3">
                      <MapPin className="w-5 h-5 xs:w-6 xs:h-6 text-blue-200" />
                      <span className="text-sm xs:text-base">{back.city}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard; 