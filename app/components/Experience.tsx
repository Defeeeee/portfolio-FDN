'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
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
      'Dec': 'months.december',
      'Present': 'time.present'
    };

    return months[monthStr] ? t(months[monthStr]) : monthStr;
  };

  // Function to translate time periods
  const translatePeriod = (period: string): string => {
    if (!period) return '';

    // Replace month names and "Present" with their translations
    const parts = period.split(/\s+/);
    const translatedParts = parts.map(part => {
      // Check if part is a month name or "Present"
      if (part === 'Present') {
        return translateMonth(part);
      }

      // Check if part is a month name
      const monthMatch = /^(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/.exec(part);
      if (monthMatch) {
        return translateMonth(monthMatch[0]);
      }

      return part;
    });

    return translatedParts.join(' ');
  };

  // Function to translate duration
  const translateDuration = (duration: string): string => {
    if (duration === 'Current') {
      return t('time.current');
    }

    const monthsMatch = /^(\d+)\s+months$/.exec(duration);
    if (monthsMatch) {
      return `${monthsMatch[1]} ${t('time.months')}`;
    }

    return duration;
  };
  const experiences = [
    {
      company: "SignAI",
      position: "AI Developer",
      period: "Mar 2025 - Present",
      duration: "Current",
      association: "ORT Argentina",
      descriptionEn: [
        "SignAI is a mobile and web application under development whose main functionality is the translation of sign language both in real-time and asynchronously.",
        "SignAI is a solution that addresses 2 main problems: First, the difficulty in communication between sign language users and people who are not familiar with it. Second, the lack of promotion of LSA (Argentine Sign Language)."
      ],
      descriptionEs: [
        "SignAI es una aplicación móvil y web en desarrollo cuya principal funcionalidad es la traducción de lengua de señas tanto en tiempo real como de forma asincrónica.",
        "SignAI es una solución que viene a resolver 2 problemas principales: En primer lugar, la dificultad en la comunicación entre usuarios de la lengua de señas y personas que no están familiarizadas con esta. En segundo lugar, la falta de fomentación de la LSA."
      ],
      technologies: ["Neural Networks", "Artificial Intelligence (AI)", "Python (Programming Language)"]
    },
    {
      company: "DolarBot",
      position: "Bot Developer",
      period: "January 2024 - Present",
      duration: "Current",
      descriptionEn: [
        "DolarBot is a Discord bot designed to provide real-time dollar exchange rates in Argentina.",
        "It offers commands to check current values, track variations over time, and even interact with external APIs.",
        "DolarBot utilizes DolarApi and ArgentinaDatos to ensure accurate, up-to-date information."
      ],
      descriptionEs: [
        "DolarBot es un bot de Discord diseñado para proporcionar tasas de cambio del dólar en tiempo real en Argentina.",
        "Ofrece comandos para verificar valores actuales, seguir variaciones a lo largo del tiempo e incluso interactuar con APIs externas.",
        "DolarBot utiliza DolarApi y ArgentinaDatos para garantizar información precisa y actualizada."
      ],
      technologies: ["Discord API", "JavaScript", "Node.js", "API Integration", "Real-time Data"]
    },
    {
      company: "LinX",
      position: "Hardware Engineer",
      period: "June 2023 - December 2023",
      duration: "7 months",
      association: "ORT Argentina",
      descriptionEn: [
        "LINX (Line and Independent Navigation eXperiment) is a semi-guided navigation project.",
        "It combines line-following with computer vision and ArUco markers for pathfinding and obstacle avoidance.",
        "The system includes Arduino hardware, Python software utilizing OpenCV, and offers opportunities for enhancement and collaboration."
      ],
      descriptionEs: [
        "LINX (Line and Independent Navigation eXperiment) es un proyecto de navegación semi-guiada.",
        "Combina el seguimiento de líneas con visión por computadora y marcadores ArUco para la búsqueda de rutas y evitación de obstáculos.",
        "El sistema incluye hardware Arduino, software Python utilizando OpenCV, y ofrece oportunidades para mejoras y colaboración."
      ],
      technologies: ["Computer Vision", "Python (Programming Language)", "OpenCV", "Arduino", "Hardware"]
    },
    {
      company: "FōrmAI",
      position: "AI Developer",
      period: "July 2024 - February 2025",
      duration: "8 months",
      association: "ORT Argentina",
      descriptionEn: [
        "Developed two complex neural networks using PyTorch and Tensorflow for feedback and pose correction.",
        "Utilized matplotlib, pandas, and numpy for data handling and engineering tasks.",
        "Extracted pose landmarks using opencv and Google mediapipe for enhanced user guidance."
      ],
      descriptionEs: [
        "Desarrollé dos redes neuronales complejas utilizando PyTorch y Tensorflow para retroalimentación y corrección de postura.",
        "Utilicé matplotlib, pandas y numpy para el manejo de datos y tareas de ingeniería.",
        "Extraje puntos de referencia de postura utilizando opencv y Google mediapipe para una guía mejorada del usuario."
      ],
      technologies: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "OpenCV", "Mediapipe"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{t('experience.title')}</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-foreground/5 rounded-xl p-8 transition-all hover:shadow-md">
              <div className="md:flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.position}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400">{exp.company}</p>
                  {exp.association && (
                    <p className="text-foreground/70">{t('experience.associated')} {exp.association}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0 text-foreground/70">
                  <p>{translatePeriod(exp.period)}</p>
                  <p className="text-right">{translateDuration(exp.duration)}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">{t('experience.description')}</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  {(language === 'en' ? exp.descriptionEn : exp.descriptionEs).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">{t('experience.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {experiences.length === 0 && (
          <div className="text-center py-12 text-foreground/70">
            <p>I'm currently focused on my education and building my skills through projects.</p>
            <p>Check back soon for updates on my professional experience!</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">{t('experience.opportunities')}</h3>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            {t('experience.opportunities.desc')}
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {t('experience.contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
