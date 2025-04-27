'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navbar
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.experience': 'Experience',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  // Hero
  'hero.hi': 'Hi, I\'m',
  'hero.title': 'Software Developer & Aviation Enthusiast',
  'hero.subtitle': 'Student at ORT Argentina specializing in Information and Communication Technologies. Passionate about technology and aviation.',
  'hero.contact': 'Contact Me',
  'hero.learn': 'Learn More',

  // About
  'about.title': 'About Me',
  'about.p1': 'Hello! I\'m Federico, a student at ORT Argentina specializing in Information and Communication Technologies. Through ORT\'s project-based learning approach, I\'ve successfully implemented various skills used daily in the tech industry.',
  'about.p2': 'Project-based learning not only allows me to work with the newest and most widely used technologies today, but it has also helped me build strong teamwork skills.',
  'about.p3': 'Beyond technology, I\'m passionate about Aviation. I\'m currently pursuing my private pilot\'s license at Alef Aviación Patagonica.',
  'about.languages': 'Languages',
  'about.certifications': 'Certifications',
  'about.journey': 'My Journey',
  'about.education': 'Education',
  'about.education.desc': 'Currently pursuing a degree in Information and Communication Technologies at ORT Argentina.',
  'about.experience': 'Professional Experience',
  'about.experience.desc': 'Worked as an AI Developer at FōrmAI, developing neural networks for feedback and pose correction.',
  'about.aviation': 'Aviation',
  'about.aviation.desc': 'Pursuing a private pilot\'s license at Alef Aviación Patagonica.',

  // Skills
  'skills.title': 'My Skills',
  'skills.subtitle': 'I\'ve developed a diverse set of skills through my education at ORT Argentina and professional experience. Here\'s a breakdown of my technical expertise and other abilities.',
  'skills.years': 'Years of Coding',
  'skills.projects': 'Projects Completed',
  'skills.technologies': 'Technologies Mastered',
  'skills.languages': 'Languages Spoken',

  // Experience
  'experience.title': 'Professional Experience',
  'experience.subtitle': 'My professional journey in the tech industry, where I\'ve applied my skills to solve real-world problems.',
  'experience.description': 'Project Description',
  'experience.technologies': 'Technologies Used',
  'experience.opportunities': 'Looking for New Opportunities',
  'experience.opportunities.desc': 'I\'m always interested in challenging projects and opportunities to grow my skills and contribute to innovative teams.',
  'experience.contact': 'Get in Touch',
  'experience.associated': 'Associated with',

  // Months
  'months.january': 'January',
  'months.february': 'February',
  'months.march': 'March',
  'months.april': 'April',
  'months.may': 'May',
  'months.june': 'June',
  'months.july': 'July',
  'months.august': 'August',
  'months.september': 'September',
  'months.october': 'October',
  'months.november': 'November',
  'months.december': 'December',

  // Time periods
  'time.present': 'Present',
  'time.current': 'Current',
  'time.months': 'months',

  // Education
  'education.title': 'Education',
  'education.subtitle': 'My academic journey and the educational foundations that have shaped my skills and knowledge.',
  'education.achievements': 'Key Achievements',
  'education.additional': 'Additional Education',
  'education.certifications': 'Certifications',
  'education.programs': 'Programs & Courses',

  // Contact
  'contact.title': 'Get In Touch',
  'contact.subtitle': 'Have a question or want to work together? Feel free to reach out to me using the form below or through my social media.',
  'contact.info': 'Contact Information',
  'contact.email': 'Email',
  'contact.location': 'Location',
  'contact.social': 'Social Media',
  'contact.message': 'Send Me a Message',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.subject': 'Subject',
  'contact.form.message': 'Message',
  'contact.form.send': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.success': 'Your message has been sent successfully! I\'ll get back to you soon.',
  'contact.form.error': 'There was an error sending your message. Please try again later.',

  // Footer
  'footer.description': 'Software Developer & Aviation Enthusiast based in Buenos Aires, Argentina.',
  'footer.quicklinks': 'Quick Links',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.built': 'Designed and built with Next.js, React, and Tailwind CSS.'
};

// Spanish translations
const esTranslations: Record<string, string> = {
  // Navbar
  'nav.about': 'Sobre Mí',
  'nav.skills': 'Habilidades',
  'nav.experience': 'Experiencia',
  'nav.education': 'Educación',
  'nav.contact': 'Contacto',

  // Hero
  'hero.hi': 'Hola, soy',
  'hero.title': 'Desarrollador de Software y Entusiasta de la Aviación',
  'hero.subtitle': 'Estudiante en ORT Argentina, especialización en Tecnologías de la Información y las Comunicaciones. Apasionado por la tecnología y la aviación.',
  'hero.contact': 'Contáctame',
  'hero.learn': 'Saber Más',

  // About
  'about.title': 'Sobre Mí',
  'about.p1': '¡Hola! Soy Federico, estudiante en ORT Argentina, especialización en Tecnologías de la Información y las Comunicaciones. A través del enfoque de aprendizaje basado en proyectos de ORT, he implementado con éxito varias habilidades utilizadas diariamente en la industria tecnológica.',
  'about.p2': 'El aprendizaje basado en proyectos no solo me permite trabajar con las tecnologías más nuevas y ampliamente utilizadas hoy en día, sino que también me ha ayudado a desarrollar fuertes habilidades de trabajo en equipo.',
  'about.p3': 'Más allá de la tecnología, me apasiona la Aviación. Actualmente estoy cursando mi licencia de piloto privado en Alef Aviación Patagónica.',
  'about.languages': 'Idiomas',
  'about.certifications': 'Certificaciones',
  'about.journey': 'Mi Trayectoria',
  'about.education': 'Educación',
  'about.education.desc': 'Actualmente cursando una carrera en Tecnologías de la Información y las Comunicaciones en ORT Argentina.',
  'about.experience': 'Experiencia Profesional',
  'about.experience.desc': 'Trabajé como Desarrollador de IA en FōrmAI, desarrollando redes neuronales para retroalimentación y corrección de postura.',
  'about.aviation': 'Aviación',
  'about.aviation.desc': 'Cursando la licencia de piloto privado en Alef Aviación Patagónica.',

  // Skills
  'skills.title': 'Mis Habilidades',
  'skills.subtitle': 'He desarrollado un conjunto diverso de habilidades a través de mi educación en ORT Argentina y experiencia profesional. Aquí hay un desglose de mi experiencia técnica y otras habilidades.',
  'skills.years': 'Años de Programación',
  'skills.projects': 'Proyectos Completados',
  'skills.technologies': 'Tecnologías Dominadas',
  'skills.languages': 'Idiomas Hablados',

  // Experience
  'experience.title': 'Experiencia Profesional',
  'experience.subtitle': 'Mi trayectoria profesional en la industria tecnológica, donde he aplicado mis habilidades para resolver problemas del mundo real.',
  'experience.description': 'Descripción del Proyecto',
  'experience.technologies': 'Tecnologías Utilizadas',
  'experience.opportunities': 'Buscando Nuevas Oportunidades',
  'experience.opportunities.desc': 'Siempre estoy interesado en proyectos desafiantes y oportunidades para desarrollar mis habilidades y contribuir a equipos innovadores.',
  'experience.contact': 'Ponte en Contacto',
  'experience.associated': 'Asociado con',

  // Months
  'months.january': 'Enero',
  'months.february': 'Febrero',
  'months.march': 'Marzo',
  'months.april': 'Abril',
  'months.may': 'Mayo',
  'months.june': 'Junio',
  'months.july': 'Julio',
  'months.august': 'Agosto',
  'months.september': 'Septiembre',
  'months.october': 'Octubre',
  'months.november': 'Noviembre',
  'months.december': 'Diciembre',

  // Time periods
  'time.present': 'Presente',
  'time.current': 'Actual',
  'time.months': 'meses',

  // Education
  'education.title': 'Educación',
  'education.subtitle': 'Mi trayectoria académica y los fundamentos educativos que han formado mis habilidades y conocimientos.',
  'education.achievements': 'Logros Clave',
  'education.additional': 'Educación Adicional',
  'education.certifications': 'Certificaciones',
  'education.programs': 'Programas y Cursos',

  // Contact
  'contact.title': 'Ponte en Contacto',
  'contact.subtitle': '¿Tienes una pregunta o quieres trabajar juntos? No dudes en contactarme utilizando el formulario a continuación o a través de mis redes sociales.',
  'contact.info': 'Información de Contacto',
  'contact.email': 'Correo Electrónico',
  'contact.location': 'Ubicación',
  'contact.social': 'Redes Sociales',
  'contact.message': 'Envíame un Mensaje',
  'contact.form.name': 'Nombre',
  'contact.form.email': 'Correo Electrónico',
  'contact.form.subject': 'Asunto',
  'contact.form.message': 'Mensaje',
  'contact.form.send': 'Enviar Mensaje',
  'contact.form.sending': 'Enviando...',
  'contact.form.success': '¡Tu mensaje ha sido enviado con éxito! Me pondré en contacto contigo pronto.',
  'contact.form.error': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',

  // Footer
  'footer.description': 'Desarrollador de Software y Entusiasta de la Aviación basado en Buenos Aires, Argentina.',
  'footer.quicklinks': 'Enlaces Rápidos',
  'footer.contact': 'Contacto',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.built': 'Diseñado y construido con Next.js, React y Tailwind CSS.'
};

const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
