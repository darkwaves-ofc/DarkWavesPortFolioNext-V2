import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks, footerNavLinks } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer w-full bg-gray-900 py-16">
      <div className="container">
        <div className="flex flex-col items-center w-full">
          <div className="footer-col flex flex-col justify-between">
            <div className="social-links flex flex-row justify-between w-full gap-4">
              {footerLinks.map((link, index) => (
                <a key={index} href={link.link} target="_blank" className="inline-block h-10 w-10 bg-gray-800 text-white rounded-full items-center justify-center">
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="w-40 footer-col mt-4">
            <ul className="flex flex-row justify-between">
              {footerNavLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-white text-base capitalize font-light hover:text-gray-300 transition-all duration-300">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
