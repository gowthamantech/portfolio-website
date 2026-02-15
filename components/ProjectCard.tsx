import type { Project } from '@/lib/content';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline"
          >
            Live Demo →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
