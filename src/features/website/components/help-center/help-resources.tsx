import React from "react";

const resources = [
  { title: "Community Handbook", link: "#", label: "Download PDF" },
  { title: "Video Tutorials", link: "#", label: "Watch Videos" },
  { title: "Member Directory", link: "#", label: "Browse Directory" },
  { title: "Success Stories", link: "#", label: "Read Stories" },
];

const HelpResources: React.FC = () => {
  return (
    <div
      className="help-resources"
      style={{
        background: "rgb(248, 250, 252)",
        padding: "3rem",
        borderRadius: "16px",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "rgb(17, 17, 17)",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Helpful Resources
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {resources.map((r, idx) => (
          <div
            key={idx}
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              {r.title}
            </h3>
            <p
              style={{
                color: "rgb(102, 102, 102)",
                fontSize: "0.9rem",
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              Resource description here.
            </p>
            <a
              href={r.link}
              style={{
                color: "rgb(32, 201, 192)",
                textDecoration: "underline",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              {r.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpResources;
