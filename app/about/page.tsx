import { content } from '@/lib/content';

export default function AboutPage() {
  const { name, title, bio, location, linkedin, github, email } = content.profile;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">About Me</h1>
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{bio}</p>
        <div className="card">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-gray-500 dark:text-gray-500">Name</dt>
              <dd className="text-gray-900 dark:text-white font-medium">{name}</dd>
            </div>
            <div>
              <dt className="text-gray-500 dark:text-gray-500">Title</dt>
              <dd className="text-gray-900 dark:text-white font-medium">{title}</dd>
            </div>
            {location && (
              <div>
                <dt className="text-gray-500 dark:text-gray-500">Location</dt>
                <dd className="text-gray-900 dark:text-white font-medium">{location}</dd>
              </div>
            )}
            <div>
              <dt className="text-gray-500 dark:text-gray-500">Connect</dt>
              <dd className="flex gap-4 mt-1">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 dark:text-accent-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 dark:text-accent-400 hover:underline"
                >
                  GitHub
                </a>
                <a href={`mailto:${email}`} className="text-accent-600 dark:text-accent-400 hover:underline">
                  Email
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
