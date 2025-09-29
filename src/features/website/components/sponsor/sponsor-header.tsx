"use client";
import React from "react";

export const SponsorHeader: React.FC = () => {
  return (
    <section
      className="sponsor-header"
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        background: "rgba(92, 225, 230, 0.5)",
        borderRadius: 24,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "rgb(17,17,17)" }}>
        Sponsor and Support Our Initiative
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "rgb(85,85,85)",
          maxWidth: 800,
          margin: "1rem auto",
        }}
      >
        Your support empowers the next generation of African leaders, builders,
        and innovators. By sponsoring a program, you directly contribute to our
        mission of transforming the continent from the inside out.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: "rgb(37, 99, 235)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          As an Individual
        </button>
        <button
          style={{
            background: "rgb(31, 41, 55)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "2rem",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          As a Company/Organization
        </button>
      </div>
    </section>
  );
};
