import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-website-pjk1.vercel.app'),
  title: 'Gowthaman A | Portfolio & Resume',
  description:
    'Portfolio of Gowthaman A—B.Tech student in AI & Data Science. Aspiring engineer with experience in Gen AI, Python, and web development.',
  openGraph: {
    title: 'Gowthaman A | Portfolio & Resume',
    description:
      'Portfolio of Gowthaman A—B.Tech student in AI & Data Science. Aspiring engineer with experience in Gen AI, Python, and web development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gowthaman A | Portfolio & Resume',
    description:
      'Portfolio of Gowthaman A—B.Tech student in AI & Data Science. Aspiring engineer with experience in Gen AI, Python, and web development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')})()`,
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
