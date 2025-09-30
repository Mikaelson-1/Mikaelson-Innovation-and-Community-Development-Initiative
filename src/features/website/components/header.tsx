"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

// Types
interface NavLink {
  label: string;
  href: string;
}

interface ActionButton {
  label: string;
  href: string;
}

interface HeaderProps {
  brandName?: string;
  navLinks?: NavLink[];
  actionButton?: ActionButton;
}

const Header: React.FC<HeaderProps> = ({
  brandName = "Mikaelson Initiative",
  navLinks = [
    { label: "The Team", href: "/team" },
    { label: "About Us", href: "/about" },
    { label: "Social Feed", href: "/feed" },
    { label: "Volunteer", href: "/volunteer" },
  ],
  actionButton = { label: "Sponsor a program", href: "/sponsor" },
}) => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        {/* Logo & Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-tight md:gap-4"
        >
          <Image
            src="/assets/images/mikaelsonlogo.png"
            alt="Mikaelson Initiative"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span>{brandName}</span>
        </Link>

        {/* Navigation */}
        <nav className="ml-6 hidden items-center gap-8 whitespace-nowrap text-sm text-gray-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}

          {/* Action Button */}
          {actionButton && (
            <Link
              href={actionButton.href}
              className="ml-6 inline-flex items-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
            >
              {actionButton.label}
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </nav>
        <MobileNav
          brandName={brandName}
          navLinks={navLinks}
          actionButton={actionButton}
        />
      </div>
    </header>
  );
};

export default Header;
