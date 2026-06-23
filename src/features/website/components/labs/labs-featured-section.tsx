"use client";
import Image from "next/image";
import React, { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  status: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "RIO AI",
    category: "education",
    description:
      "AI-powered habit tracking and accountability platform helping African students build discipline, measure progress, and achieve sustainable growth.",
    image: "/assets/images/RIO.webp",
    imageFit: "contain",
    imageBg: "#f8fafc",
    status: "development",
    tags: ["AI", "Education", "Analytics"],
  },
  {
    id: 2,
    title: "Rental Hub",
    category: "real-estate",
    description:
      "Platform simplifying rental property discovery, verification and tenant-landlord management across Nigerian cities.",
    image: "/assets/images/logo-horizontal-reversed.png",
    imageFit: "contain",
    imageBg: "#0f1a2e",
    status: "development",
    tags: ["Real Estate", "Nigeria", "Tech"],
    link: "http://rentalhub.mikaelsoninitiative.org/",
  },
];

const LabsFeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl dark:text-brand-text-dark-heading font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-brand-text-dark">
            Discover our current initiatives and their impact on communities
            across Africa.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden cursor-pointer transition transform hover:-translate-y-1"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div
                className="relative h-56 flex items-center justify-center"
                style={{ background: project.imageBg ?? "#f1f5f9" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`p-6 ${project.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                    project.status === "active"
                      ? "bg-green-100 text-green-700"
                      : project.status === "completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-indigo-600"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-lg relative overflow-hidden">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <div
                  className="relative w-full h-48 rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ background: selectedProject.imageBg ?? "#f1f5f9" }}
                >
                  <Image
                    fill
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={`p-6 ${selectedProject.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                  />
                </div>
                <p className="text-gray-600">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg shadow mt-4"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LabsFeaturedProjects;
