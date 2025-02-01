"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { footerLinks, footerNavLinks } from "@/lib/data"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-10 sm:space-y-12">
          <div className="w-full max-w-md">
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
          <nav className="w-full max-w-2xl">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {footerNavLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-base font-medium text-gray-300 transition-colors duration-300 hover:text-white hover:underline">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-400">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

