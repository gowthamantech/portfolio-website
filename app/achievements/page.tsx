import { AchievementCard } from '@/components/AchievementCard';
import { content } from '@/lib/content';

export default function AchievementsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Achievements & Certifications</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        Certifications, awards, and recognitions. I keep this updated as I learn.
      </p>
      <div className="space-y-6">
        {content.achievements.map((achievement) => (
          <AchievementCard key={achievement.title} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
