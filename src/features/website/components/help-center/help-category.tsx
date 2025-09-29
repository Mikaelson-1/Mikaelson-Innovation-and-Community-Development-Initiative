import React, { ReactNode } from "react";

interface HelpDetail {
  title: string;
  description: string;
}

interface HelpCategoryProps {
  icon: ReactNode;
  title: string;
  description: string;
  details: HelpDetail[];
}

const HelpCategory: React.FC<HelpCategoryProps> = ({
  icon,
  title,
  description,
  details,
}) => {
  return (
    <div
      className="help-category"
      style={{
        background:
          "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(226, 232, 240) 100%)",
        padding: "2rem",
        borderRadius: "16px",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "4rem",
          height: "4rem",
          background:
            "linear-gradient(135deg, rgb(32, 201, 192), rgb(37, 99, 235))",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.5rem",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "rgb(17, 17, 17)",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "rgb(102, 102, 102)",
          lineHeight: 1.6,
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>
      <button
        style={{
          background: "rgb(32, 201, 192)",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "50px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Get Help
      </button>

      {/* Expandable Help Details */}
      <div
        style={{
          marginTop: "2rem",
          textAlign: "left",
          background: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          display: "none",
        }}
      >
        {details.map((d, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid rgb(229, 231, 235)",
            }}
          >
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "rgb(17, 17, 17)",
                marginBottom: "0.5rem",
              }}
            >
              {d.title}
            </h4>
            <p
              style={{
                color: "rgb(102, 102, 102)",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCategory;
