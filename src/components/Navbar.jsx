import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.story'), href: '#story' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary-bg/95 backdrop-blur-sm shadow-warm py-4' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0">
            <div className="w-32 lg:w-40 h-8 bg-[url('/vite.svg')] bg-cover bg-no-repeat bg-left filter invert-[0.1] sepia-[0.3] hue-rotate-180 brightness-50"></div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-primary-text hover:text-primary-terracotta border-b-2 border-transparent hover:border-primary-terracotta pb-1 font-body text-sm font-medium transition-all duration-300 uppercase tracking-widest">
                {link.name}
              </a>
            ))}
            
            <a href="#reserve" className="text-primary-text border border-primary-text hover:bg-primary-terracotta hover:border-primary-terracotta hover:text-white px-8 py-2 font-heading text-lg italic tracking-wider transition-colors duration-300">
              {t('nav.reserve')}
            </a>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-primary-text font-body text-xs uppercase tracking-widest transition-colors hover:text-primary-terracotta">
                <Globe className="w-4 h-4" />
                <span>{i18n.language}</span>
              </button>
              <div className="absolute right-0 mt-4 w-28 bg-white border border-primary-cream opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-warm-lg rounded-xl overflow-hidden py-2">
                {['en', 'pt', 'es'].map(lng => (
                  <button key={lng} onClick={() => changeLanguage(lng)} className="block w-full text-left px-5 py-2 font-body text-sm text-primary-text hover:bg-primary-bg hover:text-primary-terracotta uppercase">
                    {lng}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-text hover:text-primary-terracotta transition-colors">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary-bg border-t border-primary-cream absolute w-full left-0 top-full shadow-warm-lg overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-heading text-primary-text hover:text-primary-terracotta italic text-center">
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center pt-6 pb-2">
                 <a href="#reserve" onClick={() => setIsOpen(false)} className="text-primary-text border border-primary-text hover:bg-primary-terracotta hover:border-primary-terracotta hover:text-white px-10 py-3 font-heading text-xl italic tracking-wider transition-colors duration-300">
                  {t('nav.reserve')}
                </a>
              </div>
              <div className="flex justify-center space-x-6 px-4 pt-6 border-t border-primary-cream">
                {['en', 'pt', 'es'].map((lng) => (
                  <button key={lng} onClick={() => changeLanguage(lng)} className={`font-body font-bold uppercase text-xs tracking-widest ${i18n.language === lng ? 'text-primary-terracotta' : 'text-gray-400'}`}>
                    {lng}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
