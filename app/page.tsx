import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SkillCard } from '@/components/SkillCard';
import { ProjectCard } from '@/components/ProjectCard';
import { content } from '@/lib/content';

export default function Home() {
  const topSkills = content.skills.slice(0, 6);
  const topProjects = content.projects.slice(0, 2);

  return (
    <>
      <Hero />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          {content.profile.bio}
        </p>
        <Link
          href="/about"
          className="inline-block mt-4 text-accent-600 dark:text-accent-400 font-medium hover:underline"
        >
          Learn more →
        </Link>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900/30">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <Link
          href="/skills"
          className="inline-block mt-6 text-accent-600 dark:text-accent-400 font-medium hover:underline"
        >
          View all skills →
        </Link>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-block mt-6 text-accent-600 dark:text-accent-400 font-medium hover:underline"
        >
          View all projects →
        </Link>
      </section>
    </>
  );
}
