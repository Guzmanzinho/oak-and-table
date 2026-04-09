import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function OurStory() {
  const { t } = useTranslation();

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, amount: 0.2 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.2 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) leftControls.start({ opacity: 1, x: 0 });
  }, [leftInView]);

  useEffect(() => {
    if (rightInView) rightControls.start({ opacity: 1, x: 0 });
  }, [rightInView]);

  return (
    <section id="story" className="py-32 bg-primary-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={leftControls}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-primary-text mb-8">{t('story.title')}</h2>
            <div className="w-12 h-[2px] bg-primary-mustard mb-8"></div>
            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed italic border-l-2 border-primary-terracotta/30 pl-6">
              {t('story.content')}
            </p>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={rightControls}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-tl-full rounded-br-full overflow-hidden shadow-warm-lg p-2 bg-white">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-tl-full rounded-br-full filter sepia-[0.2]"
              />
            </div>

            {/* Decals */}
            <div className="absolute top-12 -right-4 md:-right-8 w-24 h-24 border border-primary-terracotta/40 rounded-full translate-x-1/4 -z-10"></div>
            <div className="absolute -bottom-8 left-12 w-32 h-32 border border-primary-mustard/40 rounded-full -translate-x-1/4 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
