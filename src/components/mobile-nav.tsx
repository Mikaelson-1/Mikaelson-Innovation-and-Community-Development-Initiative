"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

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

interface MobileNavProps {
  brandName: string;
  navLinks: NavLink[];
  actionButton?: ActionButton;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  brandName,
  navLinks,
  actionButton,
}) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button aria-label="Open menu">
            <Menu className="h-8 w-8" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 sm:w-80">
          <SheetHeader>
            <SheetTitle>{brandName}</SheetTitle>
          </SheetHeader>
          <div className="mt-6 px-5 flex flex-col gap-6 text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}

            {actionButton && (
              <Link
                href={actionButton.href}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
              >
                {actionButton.label}
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
