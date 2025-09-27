import React from "react";

const TeamHeroSection: React.FC = () => {
  return (
    <section
      className="team-hero-section"
      style={{ background: "#fff", padding: "2rem 0" }}
    >
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="team-hero-box"
          style={{
            background: "rgba(92, 225, 230, 0.5)",
            padding: "5rem 2rem",
            borderRadius: 24,
            minHeight: 550,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 680 }}>
            <button
              style={{
                background: "transparent",
                border: "2px solid #374151",
                color: "#374151",
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "0.75rem",
                cursor: "pointer",
              }}
            >
              MEET THE TEAM
            </button>
            <h1
              style={{
                fontSize: "2.9rem",
                fontWeight: 800,
                margin: "0 0 1.25rem",
                color: "#111827",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Meet the Change Makers
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.7,
                color: "#374151",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Discover the passionate individuals driving the Mikaelson
              Initiative forward. Our dedicated team works tirelessly to create
              meaningful impact and transform ideas into reality, one project at
              a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;
