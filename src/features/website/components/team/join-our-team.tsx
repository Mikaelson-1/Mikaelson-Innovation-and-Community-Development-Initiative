"use client";
import React from "react";

const JoinTeam: React.FC = () => {
  return (
    <section
      className="join-team"
      style={{
        padding: "4rem 1rem",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgb(235, 248, 255) 0%, rgb(240, 249, 255) 100%)",
        marginTop: "4rem",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "rgb(17,24,39)",
          }}
        >
          Join Our Team
        </h2>

        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 400,
            marginBottom: "2.5rem",
            color: "rgb(107,114,128)",
            lineHeight: 1.6,
          }}
        >
          Ready to make a difference? Join our mission to transform communities
          across Africa through sustainable technology and innovation. Together,
          we can create lasting impact and build a brighter future.
        </h3>

        <button
          type="button"
          style={{
            background: "rgb(59,130,246)",
            color: "white",
            fontSize: "1.125rem",
            fontWeight: 600,
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "0.75rem",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
          }}
        >
          Join Us Today
        </button>
      </div>
    </section>
  );
};

export default JoinTeam;
