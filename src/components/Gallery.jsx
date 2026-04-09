import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import signaturePlates from '../assets/signature-plates.png';

// Six curated fine-dining / restaurant atmosphere shots from Unsplash
const images = [
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
    label: 'The Kitchen',
    sub: 'Crafted with care',
  },
  {
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80',
    label: 'Evening Service',
    sub: 'Ambiance & light',
  },
  {
    src: signaturePlates,
    label: 'Signature Plates',
    sub: 'Farm to table',
  },
  {
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
    label: 'Private Dining',
    sub: 'Intimate spaces',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80',
    label: 'Cellar Selection',
    sub: 'Portuguese wines',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    label: 'The Room',
    sub: 'Warm & welcoming',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: 'easeOut', delay: i * 0.1 },
  }),
};

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-32 bg-primary-bg overflow-hidden border-t border-primary-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-20">
          <p className="font-body text-primary-mustard tracking-[0.28em] text-[10px] uppercase mb-4">
            — A Taste of Our World —
          </p>
          <h2 className="text-5xl md:text-6xl font-heading text-primary-text mb-6">
            {t('gallery.title')}
          </h2>
          <div className="w-16 h-px bg-primary-mustard mx-auto" />
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-warm border border-primary-cream/40 cursor-pointer"
            >
              {/* Photo */}
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full h-full object-cover sepia-[0.3] brightness-90 contrast-[1.05] group-hover:scale-107 group-hover:sepia-[0.1] group-hover:brightness-75 transition-all duration-700 ease-out"
                style={{ '--tw-scale-x': 'var(--gallery-scale, 1)', '--tw-scale-y': 'var(--gallery-scale, 1)' }}
              />

              {/* Permanent subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-text/40 via-transparent to-transparent pointer-events-none" />

              {/* Hover reveal overlay */}
              <div className="absolute inset-0 bg-primary-text/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Hover content — slides up */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {/* Top accent line */}
                <div className="w-8 h-px bg-primary-mustard mb-3" />
                <p className="font-body text-primary-mustard tracking-[0.22em] text-[10px] uppercase mb-1.5">
                  {img.sub}
                </p>
                <h3 className="font-heading text-primary-bg text-2xl italic leading-tight">
                  {img.label}
                </h3>
              </div>

              {/* Corner number — always visible, fades on hover */}
              <div className="absolute top-5 right-5 group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-heading text-primary-bg/40 text-sm italic select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
