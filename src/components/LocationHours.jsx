import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.13, ease: 'easeOut' },
  }),
};

function Divider() {
  return (
    <div className="flex items-center gap-3 justify-center my-4">
      <div className="w-8 h-px bg-primary-text/15" />
      <div className="w-1 h-1 rounded-full bg-primary-mustard/60" />
      <div className="w-8 h-px bg-primary-text/15" />
    </div>
  );
}

export default function LocationHours() {
  const { t } = useTranslation();
  const schedule = t('location.hours.schedule', { returnObjects: true });

  return (
    <section id="location" className="py-32 bg-primary-cream relative overflow-hidden">
      {/* ambient warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary-terracotta/6 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center gap-3 justify-center mb-5">
            <div className="w-8 h-px bg-primary-mustard/50" />
            <span className="font-body text-primary-mustard/80 tracking-[0.28em] text-[10px] uppercase">
              {t('location.eyebrow')}
            </span>
            <div className="w-8 h-px bg-primary-mustard/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-primary-text leading-tight">
            {t('location.title')}
          </h2>
          <Divider />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Hours card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-bg rounded-2xl shadow-warm p-10 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-primary-terracotta shrink-0" />
              <h3 className="font-heading text-primary-text text-2xl">
                {t('location.hours.title')}
              </h3>
            </div>

            <ul className="space-y-4">
              {schedule.map((row, i) => (
                <li key={i} className="flex justify-between items-center border-b border-primary-cream pb-3 last:border-0 last:pb-0">
                  <span className={`font-body text-sm ${row.closed ? 'text-primary-text/30' : 'text-primary-text/70'}`}>
                    {row.day}
                  </span>
                  {row.closed ? (
                    <span className="font-body text-xs italic text-primary-text/30 tracking-wider">
                      {t('location.hours.closed')}
                    </span>
                  ) : (
                    <div className="text-right">
                      {Array.isArray(row.time) ? (
                        row.time.map((slot, j) => (
                          <p key={j} className="font-body text-sm font-medium text-primary-text">
                            {slot}
                          </p>
                        ))
                      ) : (
                        <p className="font-body text-sm font-medium text-primary-text">{row.time}</p>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-body text-xs text-primary-text/40 italic tracking-wide">
              {t('location.hours.note')}
            </p>
          </motion.div>

          {/* Address + Phone */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div className="bg-primary-bg rounded-2xl shadow-warm p-10 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary-terracotta shrink-0" />
                <h3 className="font-heading text-primary-text text-2xl">
                  {t('location.address.title')}
                </h3>
              </div>

              <p className="font-body text-primary-text/70 text-sm leading-relaxed">
                {t('location.address.street')}
              </p>
              <p className="font-body text-primary-text/70 text-sm mb-8">
                {t('location.address.city')}
              </p>

              <a
                href="https://maps.google.com/?q=Rua+Frederico+Arouca+24+Cascais"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs text-primary-terracotta tracking-[0.2em] uppercase border border-primary-terracotta/40 px-5 py-3 rounded-sm hover:bg-primary-terracotta hover:text-white transition-all duration-300"
              >
                {t('location.address.map_btn')}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-primary-bg rounded-2xl shadow-warm px-10 py-7">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-terracotta shrink-0" />
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-primary-text/40 mb-1">
                      {t('location.phone.label')}
                    </p>
                    <a
                      href="tel:+351111222333"
                      className="font-heading text-primary-text text-xl hover:text-primary-terracotta transition-colors duration-300"
                    >
                      +351 111 222 333
                    </a>
                  </div>
                </div>
                <span className="font-body text-[10px] tracking-widest uppercase text-primary-mustard/70 border border-primary-mustard/30 px-3 py-1 rounded-sm">
                  {t('location.phone.whatsapp')}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
