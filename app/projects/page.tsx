import { ProjectCard } from '@/components/ProjectCard';
import { content } from '@/lib/content';

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        A selection of projects I&apos;ve built. More on GitHub.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
