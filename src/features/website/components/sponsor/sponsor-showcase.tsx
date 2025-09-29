"use client";
import React from "react";

export const SponsorsShowcase: React.FC = () => {
  return (
    <section
      className="sponsors-showcase"
      style={{ padding: "4rem 1rem", textAlign: "center", background: "white" }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: 16,
          padding: "2rem",
          margin: "0 auto 3rem auto",
          maxWidth: 900,
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            margin: 0,
            color: "#111",
          }}
        >
          Organizations and Individuals that support and believe in our goal
        </h2>
      </div>
      <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div
          className="logo-slider"
          style={{
            display: "flex",
            gap: "3rem",
            animation: "slideLeft 20s linear infinite",
            whiteSpace: "nowrap",
            width: "calc(200% + 6rem)",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={`sponsor-${i}`}
              src="/assets/images/mikaelsonlogo.png"
              alt={`Sponsor ${i + 1}`}
              className="rounded-full"
              style={{ height: 40, flexShrink: 0 }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={`sponsor-dup-${i}`}
              src="/assets/images/mikaelsonlogo.png"
                  alt={`Sponsor ${i + 1} Duplicate`}
                  className="rounded-full"
              style={{ height: 40, flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
