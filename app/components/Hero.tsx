'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:hidden mb-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl transition-all duration-500 hover:scale-105">
            <Image
              src="/pfp.jpg"
              alt="Federico Diaz Nemeth"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">{t('hero.hi')}</span>
            <span className="block text-blue-600 dark:text-blue-400">Federico Diaz Nemeth</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-foreground/80">
            {t('hero.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto md:mx-0">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              {t('hero.contact')}
            </Link>
            <Link 
              href="#about" 
              className="px-6 py-3 border border-foreground/20 hover:border-foreground/40 rounded-lg font-medium transition-colors"
            >
              {t('hero.learn')}
            </Link>
          </div>
          <div className="flex gap-4 pt-2 justify-center md:justify-start">
            <a 
              href="https://github.com/Defeeeee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/fdiaznem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl transition-all duration-500 hover:scale-105">
            <Image
              src="/pfp.jpg"
              alt="Federico Diaz Nemeth"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
