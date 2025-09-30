"use client"
import React from "react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: "🌍",
    title: "Global Impact",
    description:
      "Contribute to projects that reach across Africa and create lasting change in communities.",
  },
  {
    icon: "🚀",
    title: "Skill Development",
    description:
      "Gain valuable experience, learn new technologies, and grow your professional network.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "Join a vibrant community of innovators, entrepreneurs, and changemakers.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Work on cutting-edge projects using the latest technologies and methodologies.",
  },
];

const WhyVolunteer: React.FC = () => (
  <section className="why-volunteer px-4 py-16">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        className="section-title mb-8 text-center text-3xl font-extrabold text-gray-900 md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Volunteer With Us?
      </motion.h2>

      <motion.div
        className="benefits-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            className="benefit-card rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="benefit-icon mb-2 text-4xl">{b.icon}</div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">{b.title}</h3>
            <p className="text-sm text-gray-600 md:text-base">
              {b.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyVolunteer;
