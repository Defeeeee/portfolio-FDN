'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  const skills = [
    {
      category: "Software Development",
      items: [
        { name: "Python", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      category: "Data Engineering",
      items: [
        { name: "PyTorch", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Data Analysis", level: 75 },
      ]
    },
    {
      category: "Other Skills",
      items: [
        { name: "Flight Training", level: 70 },
        { name: "Team Leadership", level: 80 },
        { name: "Project Management", level: 75 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{t('skills.title')}</h2>
          <div className="h-1 w-20 bg-[var(--accent-color)] mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2.5">
                      <div 
                        className="bg-[var(--accent-color)] h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-[var(--accent-color)]">3+</div>
            <div className="mt-2 text-lg font-medium">{t('skills.years')}</div>
          </div>
          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-[var(--accent-color)]">10+</div>
            <div className="mt-2 text-lg font-medium">{t('skills.projects')}</div>
          </div>
          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-[var(--accent-color)]">5+</div>
            <div className="mt-2 text-lg font-medium">{t('skills.technologies')}</div>
          </div>
          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-[var(--accent-color)]">2</div>
            <div className="mt-2 text-lg font-medium">{t('skills.languages')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
