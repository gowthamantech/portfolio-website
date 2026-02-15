import { content } from '@/lib/content';

export default function ContactPage() {
  const { name, email, linkedin, github } = content.profile;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        I&apos;d love to hear from you. Reach out via email or connect on LinkedIn.
      </p>
      <div className="card space-y-6">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="text-2xl">✉️</span>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Email</p>
            <p className="text-accent-600 dark:text-accent-400">{email}</p>
          </div>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
            <p className="text-accent-600 dark:text-accent-400">Connect with me on LinkedIn</p>
          </div>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="text-2xl">🐙</span>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
            <p className="text-accent-600 dark:text-accent-400">View my code and projects</p>
          </div>
        </a>
      </div>
    </div>
  );
}
