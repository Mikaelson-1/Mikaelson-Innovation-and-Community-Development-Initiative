import React from "react";

const HelpSearch: React.FC = () => {
  return (
    <div
      className="help-search"
      style={{
        background:
          "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(226, 232, 240) 100%)",
        padding: "3rem",
        borderRadius: "16px",
        textAlign: "center",
        marginBottom: "4rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "rgb(17, 17, 17)",
          marginBottom: "1rem",
        }}
      >
        Can&apos;t find what you&apos;re looking for?
      </h2>
      <p style={{ color: "rgb(102, 102, 102)", marginBottom: "2rem" }}>
        Search our knowledge base or contact our support team for personalized
        assistance.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          maxWidth: "600px",
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search for help topics..."
          style={{
            flex: "1 1 0%",
            minWidth: "200px",
            padding: "1rem",
            border: "1px solid rgb(209, 213, 219)",
            borderRadius: "50px",
            fontSize: "1rem",
          }}
        />
        <button
          style={{
            background: "rgb(37, 99, 235)",
            color: "white",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "50px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HelpSearch;
