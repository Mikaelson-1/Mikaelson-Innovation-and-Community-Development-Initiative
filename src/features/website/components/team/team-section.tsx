"use client";
import React, { useState } from "react";

// Types
interface TeamMember {
  name: string;
  role: string;
  img: string;
  department?: string;
}

// Filter options
const FILTERS = [
  "All",
  "Tech team",
  "Operations",
  "Mentors",
  "Advisors & Patrons",
  "Board of Trustees",
];

// Team data
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Oluwasegun M. Olukayode",
    role: "Founder & Executive Director",
    img: "/assets/images/20240726_164330.jpeg",
    department: "Board of Trustees",
  },
  {
    name: "Dr. Samuel Addai",
    role: "Chairman of the Board",
    img: "/assets/images/team35.jpg",
    department: "Board of Trustees",
  },
  {
    name: "Bashir Imam Abdulwahab",
    role: "Secretary of the Board",
    img: "/assets/images/Imam Bashir IDs.JPG",
    department: "Board of Trustees",
  },
  // Add more members here
];

const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  // Filter and search members
  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    const matchesFilter =
      activeFilter === "All" || member.department === activeFilter;
    const matchesSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Filter Section */}
      <section
        className="filter-section"
        style={{ padding: "2rem 1rem", background: "#fff" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            maxWidth: 1200,
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background:
                    activeFilter === filter ? "rgb(92,225,230)" : "transparent",
                  border: "2px solid rgb(92,225,230)",
                  color: activeFilter === filter ? "white" : "rgb(92,225,230)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search team members by name or role..."
              aria-label="Search team members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "0.5rem 1rem",
                border: "2px solid rgb(55,65,81)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                outline: "none",
                width: 260,
              }}
            />
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section
        className="team-impact"
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
          background: "rgb(248,250,252)",
          marginTop: "4rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "2rem",
            color: "rgb(17,17,17)",
          }}
        >
          Our Team of Impact
        </h2>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            marginBottom: "2rem",
            color: "rgb(107,114,128)",
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Shaping the future of Africa with community backed by sustainable
          technology
        </h3>
      </section>

      {/* Team Members */}
      <section
        className="team-members"
        style={{ padding: "2rem 1rem", background: "#fff" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {filteredMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  width: 350,
                  height: 420,
                  background: `url('${member.img}') center center / cover, rgb(248,250,252)`,
                  border: "2px solid rgb(229,231,235)",
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1rem",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    textAlign: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      margin: 0,
                      color: "rgb(55,65,81)",
                    }}
                  >
                    {member.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "1rem",
                      margin: "0.25rem 0 0",
                      color: "rgb(107,114,128)",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
