"use client";
import React from "react";

export const HowToPartner: React.FC = () => {
  return (
    <section
      className="how-to-partner"
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#eef2ff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        How to Partner with Us
      </h2>
      <ol
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "left",
          fontSize: "1.1rem",
          lineHeight: 1.6,
        }}
      >
        <li>
          Contact us at{" "}
          <a href="mailto:community@mikaelsoninitiative.org">
            community@mikaelsoninitiative.org
          </a>
        </li>
        <li>
          Discuss partnership opportunities tailored to your organization.
        </li>
        <li>Select a partnership package and sign the agreement.</li>
        <li>Collaborate on programs and monitor impact together.</li>
      </ol>
    </section>
  );
};
