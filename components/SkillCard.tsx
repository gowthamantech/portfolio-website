import type { Skill } from '@/lib/content';

interface SkillCardProps {
  skill: Skill;
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300',
  Intermediate: 'bg-accent-200 text-accent-900 dark:bg-accent-800/40 dark:text-accent-200',
  Advanced: 'bg-accent-300 text-accent-950 dark:bg-accent-700/50 dark:text-accent-100',
  Expert: 'bg-accent-500 text-white dark:bg-accent-600 dark:text-white',
};

export function SkillCard({ skill }: SkillCardProps) {
  const levelClass = levelColors[skill.level] ?? levelColors.Beginner;

  return (
    <div className="card flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelClass}`}>
          {skill.level}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
    </div>
  );
}
