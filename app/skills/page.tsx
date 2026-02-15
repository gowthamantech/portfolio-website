import { SkillCard } from '@/components/SkillCard';
import { content } from '@/lib/content';

const categories = [...new Set(content.skills.map((s) => s.category))];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Skills & Technologies</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        Technologies and tools I work with. I&apos;m always learning and adding new skills.
      </p>
      <div className="space-y-12">
        {categories.map((category) => {
          const skills = content.skills.filter((s) => s.category === category);
          return (
            <section key={category}>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
