import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import anime from 'animejs';

const tabs = [
  { id: 'starters' },
  { id: 'mains' },
  { id: 'desserts' },
  { id: 'wines' },
];

const itemsMap = {
  starters: ['s1', 's2', 's3'],
  mains:    ['m1', 'm2', 'm3'],
  desserts: ['d1', 'd2', 'd3'],
  wines:    ['w1', 'w2', 'w3'],
};

// Decorative ordinals for each slot
const ordinals = ['I', 'II', 'III'];

export default function VisualMenu() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('starters');
  const containerRef = useRef(null);

  // anime.js drives the card entrance on every tab switch
  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll('.menu-item');
    anime.set(els, { opacity: 0, translateY: 28 });
    anime({
      targets: els,
      opacity: [0, 1],
      translateY: [28, 0],
      delay: anime.stagger(70),
      easing: 'easeOutCubic',
      duration: 750,
    });
  }, [activeTab, t]);

  return (
    <section id="menu" className="py-32 bg-primary-cream border-t border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-20">
          <p className="font-body text-primary-terracotta tracking-[0.28em] text-[10px] uppercase mb-4">
            — Our Selections —
          </p>
          <h2 className="text-5xl md:text-6xl font-heading text-primary-text mb-6">
            {t('menu.title')}
          </h2>
          <div className="w-16 h-px bg-primary-terracotta mx-auto" />
        </div>

        {/* ── Tab bar ──────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-0 mb-20 border-b border-primary-text/10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 md:px-10 pb-4 pt-1 font-heading text-2xl md:text-3xl italic transition-colors duration-300 outline-none tracking-wide focus-visible:outline-none ${
                  isActive
                    ? 'text-primary-terracotta'
                    : 'text-primary-text/35 hover:text-primary-text/70'
                }`}
              >
                {t(`menu.categories.${tab.id}`)}

                {/* Framer Motion sliding underline — layoutId keeps it shared */}
                {isActive && (
                  <motion.div
                    layoutId="tabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-terracotta"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Menu item grid ───────────────────────────────────── */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0 max-w-4xl mx-auto"
        >
          {itemsMap[activeTab].map((key, idx) => (
            <div key={key} className="menu-item opacity-0 group py-8 border-b border-primary-text/10 last:border-b-0 lg:last:border-b-0">
              {/* Ordinal + name row */}
              <div className="flex items-start gap-5 mb-3">
                {/* Roman numeral */}
                <span className="font-heading text-primary-mustard/50 text-sm italic mt-1 w-5 shrink-0 select-none">
                  {ordinals[idx]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3 mb-2.5">
                    <h3 className="font-heading text-xl md:text-2xl text-primary-text font-bold tracking-wide group-hover:text-primary-terracotta transition-colors duration-300 leading-tight">
                      {t(`menu.items.${key}.name`)}
                    </h3>
                    <span className="font-body text-primary-mustard font-bold text-base md:text-lg shrink-0 tabular-nums drop-shadow-[0_2px_4px_rgba(225,173,1,0.25)]">
                      {t(`menu.items.${key}.price`)}
                    </span>
                  </div>
                  {/* Dotted rule */}
                  <div className="w-full border-b border-dashed border-primary-text/15 group-hover:border-primary-terracotta/30 transition-colors duration-300 mb-3" />
                  <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed italic">
                    {t(`menu.items.${key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
