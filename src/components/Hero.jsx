import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroDish from '../assets/hero-dish.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center bg-primary-bg pt-24 lg:pt-0 overflow-hidden">
      {/* Decorative cream wash — top-right */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-primary-cream/50 z-0 rounded-bl-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center relative z-10 gap-16 lg:gap-0 py-12 lg:py-0">

        {/* ── Left: Content ─────────────────────────────────────── */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 justify-center lg:justify-start mb-7"
          >
            <div className="w-8 h-px bg-primary-terracotta" />
            <span className="font-body text-primary-terracotta tracking-[0.28em] text-[10px] uppercase">
              Cascais · Portugal
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-heading text-primary-text leading-[1.04] mb-5"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 justify-center lg:justify-start mb-7"
          >
            <div className="w-10 h-px bg-primary-text/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary-mustard" />
            <div className="w-10 h-px bg-primary-text/20" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-body text-gray-600 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed italic"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-terracotta text-white px-10 py-4 font-body tracking-[0.2em] text-sm uppercase hover:bg-[#d6614a] transition-all duration-300 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 rounded-sm"
            >
              {t('hero.cta')}
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Atmospheric Restaurant Image ───────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease: 'easeOut' }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px]">

            {/* Offset decorative frames */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-primary-terracotta/25 rounded-2xl z-0 pointer-events-none" />
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-primary-mustard/20 rounded-2xl z-0 pointer-events-none" />

            {/* Image container */}
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-warm-lg">
              <img
                src={heroDish}
                alt="Oak & Table — candlelit fine dining atmosphere"
                loading="eager"
                className="w-full h-full object-cover sepia-[0.18] brightness-90 contrast-[1.04] scale-[1.02]"
              />

              {/* Warm-to-dark gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-text/55 via-primary-text/10 to-transparent pointer-events-none" />

              {/* Floating label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="border border-primary-cream/25 rounded-lg px-5 py-3.5 backdrop-blur-[2px] bg-primary-text/25">
                  <div className="w-6 h-px bg-primary-mustard mb-2.5" />
                  <p className="font-heading text-primary-bg/90 text-xl italic leading-snug">
                    Fine Dining Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Corner gold accents */}
            <div className="absolute -top-2 -left-2 w-11 h-11 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-mustard/70" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-primary-mustard/70" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-11 h-11 z-20 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-primary-mustard/70" />
              <div className="absolute bottom-0 right-0 h-full w-[2px] bg-primary-mustard/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
