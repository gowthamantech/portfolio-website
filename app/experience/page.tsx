import { ExperienceCard } from '@/components/ExperienceCard';
import { content } from '@/lib/content';
import type { Education } from '@/lib/content';

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Experience</h1>
      <div className="space-y-6">
        {content.experience.map((exp) => (
          <ExperienceCard key={`${exp.role}-${exp.company}`} experience={exp} />
        ))}
      </div>

      <h2 className="section-title mt-16">Education</h2>
      <div className="space-y-6">
        {content.education.map((edu: Education) => (
          <div key={`${edu.degree}-${edu.institution}`} className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
              <span className="text-sm text-accent-600 dark:text-accent-400">{edu.period}</span>
            </div>
            <p className="text-accent-600 dark:text-accent-400 font-medium mt-1">{edu.institution}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
