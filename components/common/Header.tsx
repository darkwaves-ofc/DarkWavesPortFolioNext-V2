"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/lib/data";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="m-auto p-5 z-50 relative max-w-full">
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="text-dark text-lg font-bold">DarkWaves.Info</span>
        </Link>
        <button
          className="md:hidden text-dark"
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FontAwesomeIcon
            className="md:hidden"
            icon={open ? faTimes : faBars}
          />
        </button>

        <nav
          className={`absolute hidden md:flex md:relative top-full md:top-auto left-0 w-full md:w-auto transition-max-height duration-200 ease-in-out ${
            open ? "max-h-screen" : "max-h-0 md:max-h-full"
          } overflow-hidden md:overflow-visible`}
        >
          {/* Hidden for mobile */}
          <ul className="flex flex-col md:flex-row justify-around font-semibold md:items-center text-center md:gap-6 bg-light md:bg-transparent pb-5 md:pb-0">
            {navLinks.map((link, index) => (
              <li key={index} className="mt-4 mx-auto md:mt-0 hidden md:flex">
                <Link href={link.path}>
                  <span className="text-dark block">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Hidden for desktop */}
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {navLinks.map((link, index) => (
              <MenuItem
                key={index}
                className="flex md:hidden"
                onClick={handleClose}
              >
                <Link href={link.path}>
                  <span
                    className={cn("text-dark font-semibold", poppins.className)}
                  >
                    {link.title}
                  </span>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </nav>
      </div>
    </header>
  );
}
