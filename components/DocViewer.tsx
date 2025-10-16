"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface DocViewerProps {
  doc: {
    slug: string;
    title: string;
    description?: string;
    content: string;
  };
}

export default function DocViewer({ doc }: DocViewerProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {doc.title}
        </h1>
        {doc.description && (
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {doc.description}
          </p>
        )}
      </header>

      {/* Content */}
      <article className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {doc.content}
        </ReactMarkdown>
      </article>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Home
        </a>
      </footer>
    </div>
  );
}
