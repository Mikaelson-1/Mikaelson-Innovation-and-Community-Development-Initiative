import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReportsDropdown from "./annual-report";

export const socialLinks = [
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/mici_org",
    ariaLabel: "X",
    className: "x-link",
    icon: (
      <svg
        viewBox="0 0 1200 1227"
        width="26"
        height="26"
        role="img"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M714.2 519.2 1160.9 0h-105.3L661.6 442.6 377.3 0H0l468.1 681.6L0 1227.1h105.3l418.5-469.7
          301.3 469.7h377.3L714.2 519.2Zm-148.1 165.4-48.5-70.4L143.3
          80h171.5l245.2 356.2 48.5 70.4 399.7 580.5H836.7L566.1 684.6Z"
        ></path>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mici_org/",
    ariaLabel: "Instagram",
    className: "ig-link",
    icon: (
      <svg
        viewBox="0 0 448 512"
        width="26"
        height="26"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f58529"></stop>
            <stop offset="30%" stopColor="#dd2a7b"></stop>
            <stop offset="60%" stopColor="#8134af"></stop>
            <stop offset="100%" stopColor="#515bd4"></stop>
          </linearGradient>
        </defs>
        <rect
          x="32"
          y="32"
          width="384"
          height="384"
          rx="96"
          ry="96"
          fill="url(#igGradient)"
        ></rect>
        <circle
          cx="224"
          cy="224"
          r="110"
          fill="none"
          stroke="#fff"
          strokeWidth="32"
        ></circle>
        <circle cx="224" cy="224" r="60" fill="#fff"></circle>
        <circle cx="320" cy="128" r="28" fill="#fff"></circle>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mikaelson-initiative/",
    ariaLabel: "LinkedIn",
    className: "li-link",
    icon: (
      <svg
        viewBox="0 0 448 512"
        width="26"
        height="26"
        role="img"
        aria-hidden="true"
      >
        <path
          fill="#0A66C2"
          d="M100.28 448H7.4V149.9h92.88V448zM53.79 108.1C24.09
          108.1 0 83.5 0 53.8 0 24.5 23.49 0 53.49
          0s53.8 24.5 53.8 53.8c.3 29.7-23.2
          54.3-53.5 54.3zM447.9
          448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3
          0-55.7 37.7-55.7 76.7V448h-92.8V149.9h89.1v40.7h1.3c12.4-23.4
          42.6-48.3 87.6-48.3 93.6 0 110.8
          61.6 110.8 141.7V448z"
        ></path>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheMikaelsonCommunity",
    ariaLabel: "YouTube",
    className: "yt-link",
    icon: (
      <svg
        viewBox="0 0 576 512"
        width="26"
        height="26"
        role="img"
        aria-hidden="true"
      >
        <path
          fill="#FF0000"
          d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C458.8 64
          288 64 288 64S117.2 64 74.9
          75.5c-23.7 6.3-42.3 24.9-48.6
          48.6C14 166.4 14 256 14
          256s0 89.6 12.3 131.9c6.3 23.7 24.9
          41.5 48.6 47.8C117.2 448 288 448 288
          448s170.8 0 212.1-12.3c23.7-6.3
          42.3-24.1 48.6-47.8C562
          345.6 562 256 562 256s0-89.6-12.3-131.9z"
        ></path>
        <path fill="#FFF" d="M232 338V174l142 82-142 82z"></path>
      </svg>
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="pt-10 mt-5 pb-5 px-5 border-t">
      <div className="max-w-7xl mx-auto">
        {/* header  */}
        <div className="w-full max-w-sm py-10 mx-auto space-y-4 text-center">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/mikaelsonlogo.png"
              alt="mikaelinitiativelogo"
              width={50}
              height={50}
            />
            <h1 className="font-extrabold text-2xl">Mikaelson Initiative</h1>
          </div>
          <p className="">
            Elevating humanity through technology and community.
          </p>
        </div>

        {/* other links */}
        <div className="max-w-5xl mx-auto py-20 border-y">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {footerLinks.map((section) => (
              <div key={section.section} className="footer-nav nav-section">
                <h3 className="mb-2 font-extrabold text-lg">
                  {section.section}
                </h3>
                <nav className="flex flex-col gap-2 text-sm text-gray-700">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-blue-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
            <div className="social-links flex flex-col items-center gap-4">
              <h1 className="font-extrabold text-lg">Connect</h1>
              <div className="flex gap-8">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    title={item.label}
                    aria-label={item.ariaLabel}
                    className={`${item.className} hover:opacity-80 transition`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <ReportsDropdown />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        © 2025 Mikaelson Initiative. All rights reserved.
      </p>
    </footer>
  );
};
