import type { Achievement } from '@/lib/content';

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
          <p className="text-sm text-accent-600 dark:text-accent-400 mt-0.5">
            {achievement.issuer} · {achievement.date}
          </p>
          {achievement.description && (
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {achievement.description}
            </p>
          )}
        </div>
        {achievement.url && (
          <a
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline"
          >
            View
          </a>
        )}
      </div>
    </div>
  );
}
