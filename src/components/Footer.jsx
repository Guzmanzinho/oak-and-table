import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-bg py-12 border-t border-primary-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="w-24 md:w-32 h-8 bg-[url('/vite.svg')] bg-cover bg-no-repeat bg-center mb-8 filter invert-[0.1] sepia-[0.3] hue-rotate-180 brightness-50 opacity-40"></div>
        <p className="font-body text-primary-text/60 text-sm tracking-widest uppercase font-medium">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
