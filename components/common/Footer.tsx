import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks, footerNavLinks } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-md">
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors duration-300 hover:bg-gray-700"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <nav className="w-full max-w-lg">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerNavLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
