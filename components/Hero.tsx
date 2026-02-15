import Link from 'next/link';
import { content } from '@/lib/content';

export function Hero() {
  const { name, title, tagline, linkedin } = content.profile;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-transparent to-accent-100/30 dark:from-accent-950/20 dark:via-transparent dark:to-accent-900/10" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            {name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-accent-600 dark:text-accent-400 font-medium">
            {title}
          </p>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
              </svg>
              View LinkedIn Profile
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent-500 text-accent-600 dark:text-accent-400 font-medium hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
