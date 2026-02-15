# Portfolio Website

A professional, stylish portfolio website built with Next.js, React, and Tailwind CSS. Designed to be your online resume and about-me page, optimized for LinkedIn sharing.

## Features

- **Easy Content Updates** - Edit `content/content.json` to update your profile, skills, projects, achievements, and experience
- **Dark/Light Mode** - Theme toggle with persistence
- **Responsive Design** - Mobile-first, works on all screen sizes
- **SEO & LinkedIn Ready** - Open Graph meta tags for nice link previews
- **Static Export** - Deploy anywhere (Vercel, GitHub Pages, Netlify)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Update your content - edit `content/content.json` with your:
   - Name, title, bio, LinkedIn, GitHub, email
   - Skills, projects, achievements, experience, education

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The static site will be in the `out/` folder. Deploy this folder to any static host.

### Important: Update Before Going Live

1. **content/content.json** - Add your name, LinkedIn, GitHub, email, skills, projects, etc.
2. **app/layout.tsx** - Update `metadataBase` URL to your live site (e.g. `https://yourname.vercel.app`), and customize `title` / `description` if desired.

### Deployment

**Vercel (Recommended)**
- Push to GitHub
- Import project at [vercel.com](https://vercel.com)
- Deploy with one click

**GitHub Pages**
- Run `npm run build`
- Push the `out/` folder to a `gh-pages` branch, or use GitHub Actions

## Updating Content

To add a new skill, achievement, or project:

1. Open `content/content.json`
2. Add your entry to the appropriate array (e.g. `skills`, `achievements`, `projects`)
3. Save - the dev server will auto-refresh. For production, run `npm run build` again.

Example - adding a skill:
```json
{
  "name": "TypeScript",
  "category": "Language",
  "level": "Intermediate"
}
```

## Project Structure

```
├── app/           # Pages and layout
├── components/    # React components
├── content/       # Editable content (content.json)
├── lib/           # Utilities
└── public/        # Static assets
```
