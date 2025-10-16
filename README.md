# Documentation MVP

A simplified MVP version of the OutSystems docs-odc documentation site, built with modern web technologies.

## Features

- 📚 Browse documentation by category
- 📝 Markdown content rendering with GitHub Flavored Markdown support
- 🔍 Simple search functionality
- 📱 Responsive design
- 🎨 Clean, modern UI with Tailwind CSS

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **react-markdown** - Markdown rendering
- **gray-matter** - Front-matter parsing
- **remark-gfm** - GitHub Flavored Markdown support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gitmvp-com/docs-odc-mvp.git
   cd docs-odc-mvp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── docs/              # Documentation pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── DocViewer.tsx      # Markdown viewer
│   ├── Navigation.tsx     # Navigation sidebar
│   └── SearchBar.tsx      # Search component
├── lib/                   # Utility functions
│   └── docs.ts           # Documentation utilities
├── docs/                  # Markdown documentation files
│   └── getting-started/
└── toc.yml               # Table of contents
```

## Adding Documentation

1. Create a new `.md` file in the `docs/` directory
2. Add front-matter metadata:
   ```md
   ---
   title: Your Page Title
   description: Page description
   ---
   # Your Content Here
   ```
3. Update `toc.yml` to include your page in the navigation

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
