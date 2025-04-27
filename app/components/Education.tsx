'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t, language } = useLanguage();

  // Function to translate month names
  const translateMonth = (monthStr: string): string => {
    const months: Record<string, string> = {
      'January': 'months.january',
      'February': 'months.february',
      'March': 'months.march',
      'April': 'months.april',
      'May': 'months.may',
      'June': 'months.june',
      'July': 'months.july',
      'August': 'months.august',
      'September': 'months.september',
      'October': 'months.october',
      'November': 'months.november',
      'December': 'months.december',
      'Jan': 'months.january',
      'Feb': 'months.february',
      'Mar': 'months.march',
      'Apr': 'months.april',
      'Jun': 'months.june',
      'Jul': 'months.july',
      'Aug': 'months.august',
      'Sep': 'months.september',
      'Oct': 'months.october',
      'Nov': 'months.november',
      'Dec': 'months.december'
    };

    return months[monthStr] ? t(months[monthStr]) : monthStr;
  };

  // Function to translate time periods
  const translatePeriod = (period: string): string => {
    if (!period) return '';

    // Replace month names with their translations
    const parts = period.split(/\s+/);
    const translatedParts = parts.map(part => {
      // Check if part is a month name
      const monthMatch = /^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/.exec(part);
      if (monthMatch) {
        return translateMonth(monthMatch[0]);
      }

      return part;
    });

    return translatedParts.join(' ');
  };
  const education = [
    {
      institution: "ORT Argentina",
      degree: "Bachiller en Informática",
      field: "Tecnologías de la Información y las Comunicaciones",
      period: "March 2020 - December 2025",
      descriptionEn: "Specializing in Information and Communication Technologies with a focus on project-based learning. Developing skills in software development, data engineering, and team collaboration.",
      descriptionEs: "Especialización en Tecnologías de la Información y las Comunicaciones con enfoque en aprendizaje basado en proyectos. Desarrollando habilidades en desarrollo de software, ingeniería de datos y colaboración en equipo.",
      achievementsEn: [
        "Implemented various technologies used in the tech industry",
        "Developed strong teamwork skills through collaborative projects",
        "Applied theoretical knowledge to practical, real-world scenarios"
      ],
      achievementsEs: [
        "Implementé diversas tecnologías utilizadas en la industria tecnológica",
        "Desarrollé fuertes habilidades de trabajo en equipo a través de proyectos colaborativos",
        "Apliqué conocimientos teóricos a escenarios prácticos del mundo real"
      ]
    },
    {
      institution: "Alef Aviación Patagónica",
      degree: "Piloto Privado de Avión",
      field: "Aviation",
      fieldEs: "Aviación",
      period: "January 2025",
      descriptionEn: "Pursuing a private pilot's license, combining technical knowledge with practical flying skills.",
      descriptionEs: "Cursando la licencia de piloto privado, combinando conocimientos técnicos con habilidades prácticas de vuelo.",
      achievementsEn: [
        "Learning aircraft systems and aerodynamics",
        "Developing situational awareness and decision-making skills",
        "Understanding aviation regulations and safety procedures"
      ],
      achievementsEs: [
        "Aprendiendo sistemas de aeronaves y aerodinámica",
        "Desarrollando conciencia situacional y habilidades de toma de decisiones",
        "Comprendiendo regulaciones de aviación y procedimientos de seguridad"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{t('education.title')}</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-sm">
              <div className="md:flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{edu.institution}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400">{edu.degree}</p>
                  <p className="text-foreground/70">{language === 'en' ? edu.field : (edu.fieldEs || edu.field)}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right text-foreground/70">
                  <p>{translatePeriod(edu.period)}</p>
                </div>
              </div>

              <p className="text-lg mb-6">{language === 'en' ? edu.descriptionEn : edu.descriptionEs}</p>

              <div>
                <h4 className="text-lg font-semibold mb-3">{t('education.achievements')}</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  {(language === 'en' ? edu.achievementsEn : edu.achievementsEs).map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('education.additional')}</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-4">{t('education.certifications')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>First Certificate in English (Score 179)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Certificación Médica Aeronáutica Clase II</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-4">{t('education.programs')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Oxford Junior Programme, Goldsmiths UK</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Introductory Python Course 2023</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Intensive Typescript Course 2023</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
