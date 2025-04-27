'use client';

import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              {t('about.p1')}
            </p>

            <p className="text-lg">
              {t('about.p2')}
            </p>

            <p className="text-lg">
              {t('about.p3')}
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">{t('about.languages')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-foreground/5 rounded-full">English (Native or Bilingual)</span>
                <span className="px-4 py-2 bg-foreground/5 rounded-full">Spanish (Native or Bilingual)</span>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-semibold mb-3">{t('about.certifications')}</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>First Certificate in English (Score 179)</li>
              </ul>
            </div>
          </div>

          <div className="bg-foreground/5 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('about.journey')}</h3>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-semibold">{t('about.education')}</h4>
                <p className="text-foreground/70">
                  {t('about.education.desc')}
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-semibold">{t('about.experience')}</h4>
                <p className="text-foreground/70">
                  {t('about.experience.desc')}
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-semibold">{t('about.aviation')}</h4>
                <p className="text-foreground/70">
                  {t('about.aviation.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
