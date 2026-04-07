import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// SVG corner ornament — drawn once, reused via transform
function CornerOrnament({ className }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="0" y1="1" x2="28" y2="1" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="0" x2="1" y2="28" stroke="currentColor" strokeWidth="1" />
      <circle cx="1" cy="1" r="2" fill="currentColor" />
      <circle cx="28" cy="1" r="1" fill="currentColor" />
      <circle cx="1" cy="28" r="1" fill="currentColor" />
    </svg>
  );
}

export default function ReservationCTA() {
  const { t } = useTranslation();

  return (
    <section id="reserve" className="py-32 bg-primary-bg relative overflow-hidden">
      {/* Soft ambient glow behind card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary-terracotta/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="bg-primary-text text-primary-bg rounded-2xl shadow-warm-lg relative overflow-hidden"
        >
          {/* ── Outer decorative border ── */}
          <div className="absolute inset-4 md:inset-6 border border-primary-cream/12 rounded-xl pointer-events-none" />

          {/* ── Corner ornaments (SVG) ── */}
          <CornerOrnament className="absolute top-7 left-7 md:top-9 md:left-9 text-primary-mustard/50" />
          <CornerOrnament className="absolute top-7 right-7 md:top-9 md:right-9 text-primary-mustard/50 rotate-90" />
          <CornerOrnament className="absolute bottom-7 right-7 md:bottom-9 md:right-9 text-primary-mustard/50 rotate-180" />
          <CornerOrnament className="absolute bottom-7 left-7 md:bottom-9 md:left-9 text-primary-mustard/50 -rotate-90" />

          {/* ── Content ── */}
          <div className="px-8 py-16 md:px-20 md:py-20 text-center relative">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 justify-center mb-7">
              <div className="w-8 h-px bg-primary-mustard/50" />
              <span className="font-body text-primary-mustard/70 tracking-[0.28em] text-[10px] uppercase">
                Reserve Your Evening
              </span>
              <div className="w-8 h-px bg-primary-mustard/50" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight drop-shadow-sm">
              {t('cta.title')}
            </h2>

            {/* Ornamental separator */}
            <div className="flex items-center gap-3 justify-center my-7">
              <div className="w-10 h-px bg-primary-cream/20" />
              <div className="w-1 h-1 rounded-full bg-primary-mustard/60" />
              <div className="w-10 h-px bg-primary-cream/20" />
            </div>

            <p className="text-lg md:text-xl font-body text-primary-cream/75 mb-12 italic max-w-xl mx-auto leading-relaxed">
              {t('cta.subtitle')}
            </p>

            <motion.a
              href="https://wa.me/351912345678?text=Hello%20Oak%20%26%20Table,%20I'd%20like%20to%20make%20a%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="inline-block bg-primary-terracotta text-white px-12 py-5 font-heading text-lg italic tracking-widest rounded-sm shadow-[0_0_24px_rgba(226,114,91,0.45)] hover:shadow-[0_0_40px_rgba(226,114,91,0.75)] hover:bg-[#d6614a] transition-colors duration-300"
            >
              {t('cta.btn')}
            </motion.a>

            {/* Footnote */}
            <p className="mt-8 font-body text-primary-cream/35 text-xs tracking-widest uppercase">
              Via WhatsApp · No booking fee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
