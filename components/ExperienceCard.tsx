import type { Experience } from '@/lib/content';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">{experience.role}</h3>
        <span className="text-sm text-accent-600 dark:text-accent-400">{experience.period}</span>
      </div>
      <p className="text-accent-600 dark:text-accent-400 font-medium mt-1">{experience.company}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {experience.description}
      </p>
      {experience.highlights && experience.highlights.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {experience.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent-500">•</span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
