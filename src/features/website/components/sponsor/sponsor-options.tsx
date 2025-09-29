"use client";
import React from "react";

type Option = {
  title: string;
  description: string;
  color: string;
  buttonLabel: string;
};

const options: Option[] = [
  {
    title: "Sponsor a Student",
    description:
      "Provide a full scholarship for a promising student to participate in our intensive programs, covering mentorship, resources, and community access.",
    color: "#2563eb",
    buttonLabel: "Donate Now",
  },
  {
    title: "Fund a Workshop",
    description:
      "Enable us to host specialized workshops on topics like software development, entrepreneurship, and intentional living for our community.",
    color: "#20c9c0",
    buttonLabel: "Give Today",
  },
  {
    title: "Become a Partner",
    description:
      "Join our network of corporate partners committed to fostering talent and driving innovation in Africa. Let's build the future together.",
    color: "#1f2937",
    buttonLabel: "Contact Us",
  },
];

export const SponsorshipOptions: React.FC = () => {
  return (
    <section className="sponsorship-options" style={{ padding: "4rem 1rem" }}>
      <div style={{ width: "90%", maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "3rem",
          }}
        >
          Ways to Give
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.title}
              className="sponsorship-card"
              style={{
                background: "white",
                borderRadius: 16,
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: opt.color,
                }}
              >
                {opt.title}
              </h3>
              <p style={{ margin: "1rem 0", color: "#333" }}>
                {opt.description}
              </p>
              <button
                style={{
                  background: opt.color,
                  color: "white",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "2rem",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {opt.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
