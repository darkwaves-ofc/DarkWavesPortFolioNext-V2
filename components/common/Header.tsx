"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="m-auto p-2 z-50 relative max-w-full" ref={menuRef}>
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="text-dark text-lg font-bold">DarkWaves.Info</span>
        </Link>
        <button
          className="md:hidden cursor-pointer duration-200 ease-in-out"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <nav
          className={`absolute md:relative top-full md:top-auto left-0 w-full md:w-auto transition-max-height duration-200 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0 md:max-h-full"
          } overflow-hidden md:overflow-visible`}
        >
          <ul className="flex flex-col md:flex-row justify-around font-semibold md:items-center text-center md:gap-6 bg-light md:bg-transparent pb-5 md:pb-0">
            {navLinks.map((link, index) => (
              <li key={index} className="mt-4 mx-auto md:mt-0">
                <Link href={link.path}>
                  <span
                    className="text-dark block"
                    onClick={handleNavLinkClick}
                  >
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
