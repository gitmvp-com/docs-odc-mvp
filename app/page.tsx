import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your environment",
      href: "/docs/getting-started",
      icon: "🚀",
    },
    {
      title: "Building Apps",
      description: "Create and develop applications",
      href: "/docs/building-apps",
      icon: "🏗️",
    },
    {
      title: "User Management",
      description: "Manage users and permissions",
      href: "/docs/user-management",
      icon: "👥",
    },
    {
      title: "Integration",
      description: "Connect with external systems",
      href: "/docs/integration",
      icon: "🔌",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Documentation
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Your guide to building amazing applications
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <input
            type="search"
            placeholder="Search documentation..."
            className="w-full max-w-2xl px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{category.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/docs/getting-started/intro"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              → Introduction
            </Link>
            <Link
              href="/docs/getting-started/hello-world"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              → Hello World Example
            </Link>
            <Link
              href="/docs/building-apps/ui/intro"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              → UI Components
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Documentation MVP • Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
