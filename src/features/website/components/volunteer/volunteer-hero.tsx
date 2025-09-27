import React from "react";
import StatsCard from "./stats-card";

// ---------- Hero Section ----------
export const VolunteerHero: React.FC = () => (
  <section className="px-6 py-12">
    <div
      className="mx-auto max-w-6xl rounded-3xl"
      style={{
        background: "rgba(92, 225, 230, 0.5)",
        padding: "5rem 2rem",
        minHeight: 550,
      }}
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900">
            Join Our Mission
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Be part of Africa's transformation. Connect with like-minded
            changemakers, contribute your skills, and help build a brighter
            future for our continent.
          </p>
          <a
            href="#start"
            className="inline-flex items-center rounded-full bg-teal-400 px-8 py-4 text-lg md:text-xl font-semibold text-white shadow hover:bg-teal-500"
          >
            Start Your Journey
            <span className="ml-3 text-2xl" aria-hidden>
              ↓
            </span>
          </a>
        </div>
        <StatsCard />
      </div>
    </div>
  </section>
);
