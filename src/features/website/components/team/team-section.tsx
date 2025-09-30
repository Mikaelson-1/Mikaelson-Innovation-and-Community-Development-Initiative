"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

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
    img: "/assets/images/IMG_3412 2.jpg",
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
      <section className="bg-white px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg border-2 border-cyan-400 px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
                  activeFilter === filter
                    ? "bg-cyan-400 text-white"
                    : "text-cyan-400 hover:bg-cyan-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
          <motion.div
            className="flex w-full items-center gap-2 sm:w-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search team members by name or role..."
              aria-label="Search team members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-700 px-4 py-2 text-sm outline-none focus:border-cyan-400 sm:w-72 sm:text-base"
            />
          </motion.div>
        </div>
      </section>

      {/* Header Section */}
      <motion.section
        className="mt-12 bg-gray-50 px-4 py-16 text-center md:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:mb-8 md:text-5xl">
          Our Team of Impact
        </h2>
        <h3 className="mx-auto max-w-3xl text-base font-medium text-gray-500 sm:text-lg md:text-xl">
          Shaping the future of Africa with community backed by sustainable
          technology
        </h3>
      </motion.section>

      {/* Team Members */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {filteredMembers.map((member) => (
              <motion.div
                key={member.name}
                className="relative h-[360px] w-full cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 transition-transform hover:scale-[1.02] hover:shadow-lg sm:h-[400px] md:h-[420px]"
                style={{
                  backgroundImage: `url(${member.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute bottom-0 left-0 right-0 m-4 rounded bg-white/90 p-3 text-center">
                  <h4 className="text-base font-semibold text-gray-700 sm:text-lg">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 sm:text-base">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
