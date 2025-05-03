'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl flex items-baseline">
              <span className="inline-block">Federico</span>
              <span className="inline-block w-1.5 h-1.5 ml-0.5 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 animate-[shimmer_6s_ease-in-out_infinite] bg-[length:200%_100%]"></span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#about" className="hover:text-foreground/70 transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="#skills" className="hover:text-foreground/70 transition-colors">
                {t('nav.skills')}
              </Link>
              <Link href="#experience" className="hover:text-foreground/70 transition-colors">
                {t('nav.experience')}
              </Link>
              <Link href="#education" className="hover:text-foreground/70 transition-colors">
                {t('nav.education')}
              </Link>
              <Link href="#contact" className="hover:text-foreground/70 transition-colors">
                {t('nav.contact')}
              </Link>
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="px-3 py-1 border border-foreground/20 rounded-md hover:bg-foreground/10 transition-colors"
                aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
              >
                {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-background/10 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md">
            <Link 
              href="#about" 
              className="block px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="#skills" 
              className="block px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.skills')}
            </Link>
            <Link 
              href="#experience" 
              className="block px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.experience')}
            </Link>
            <Link 
              href="#education" 
              className="block px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.education')}
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'es' : 'en');
                setIsMenuOpen(false);
              }}
              className="mt-2 w-full text-left px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            >
              {language === 'en' ? '🇪🇸 Español' : '🇺🇸 English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
