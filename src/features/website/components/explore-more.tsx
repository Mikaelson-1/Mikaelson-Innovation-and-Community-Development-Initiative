import React from "react";
import Link from "next/link";
import { Newspaper, Trophy, BookOpen, LucideIcon } from "lucide-react";

interface LinkItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  isInternal: boolean;
}

const linksData: LinkItem[] = [
  {
    id: 1,
    icon: Newspaper,
    title: "Blog & Newsletter",
    description:
      "Stay updated with productivity tips, success stories, and community news from our members.",
    href: "#",
    buttonLabel: "Read Latest Posts",
    isInternal: false,
  },
  {
    id: 2,
    icon: Trophy,
    title: "Challenges",
    description:
      "Participate in habit-building challenges and accountability programs with the community.",
    href: "/challenges",
    buttonLabel: "View Challenges",
    isInternal: true,
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Community Guidelines",
    description:
      "Learn about our community values, accountability principles, and best practices for growth.",
    href: "#",
    buttonLabel: "Read Guidelines",
    isInternal: false,
  },
];

export const ExploreMore: React.FC = () => {
  return (
    <section className="links-section visible px-10 py-16" data-aos="fade-up">
      <div className="container mx-auto max-w-[1200px]">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-[#111]">
          Explore More
        </h2>

        <div className="links-grid grid grid-cols-1 gap-6 md:grid-cols-3">
          {linksData.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className="link-card rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="bg-brand-blue mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full">
                  <Icon className="h-10 w-10 text-white/95" />
                </div>
                <h3 className="mb-1 text-xl font-semibold">{link.title}</h3>
                <p className="mb-4 text-lg text-gray-700">{link.description}</p>

                {link.isInternal ? (
                  <Link
                    href={link.href}
                    className="inline-flex rounded bg-brand-blue px-4 py-2 text-white hover:bg-brand-blue"
                  >
                    {link.buttonLabel}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="inline-flex rounded bg-brand-blue px-4 py-2 text-white hover:bg-brand-blue"
                  >
                    {link.buttonLabel}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
