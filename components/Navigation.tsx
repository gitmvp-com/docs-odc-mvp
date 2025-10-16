"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  currentSlug: string;
}

export default function Navigation({ currentSlug }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      category: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/getting-started/intro" },
        { title: "Hello World", href: "/docs/getting-started/hello-world" },
      ],
    },
    {
      category: "Building Apps",
      items: [
        { title: "UI Components", href: "/docs/building-apps/ui/intro" },
        { title: "Data Management", href: "/docs/building-apps/data/intro" },
      ],
    },
    {
      category: "User Management",
      items: [
        { title: "Overview", href: "/docs/user-management/intro" },
        { title: "Roles & Permissions", href: "/docs/user-management/roles" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:sticky top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto transition-transform duration-200 z-40`}
      >
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Documentation
            </h2>
          </Link>

          <nav className="space-y-6">
            {navItems.map((section) => (
              <div key={section.category}>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const isActive = currentSlug === item.href.replace("/docs/", "");
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block py-2 px-3 rounded-md transition-colors ${
                            isActive
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
