import React from "react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Kwame Asante",
    role: "Lead Innovation Engineer",
    description:
      "Specializes in AI/ML solutions for healthcare and education sectors.",
    image: "/assets/images/20240726_164330.jpeg",
  },
  {
    name: "Amara Okafor",
    role: "Product Strategy Lead",
    description:
      "Drives product development and user experience across all lab initiatives.",
    image: "/assets/images/20240726_164330.jpeg",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Mobile Development Lead",
    description:
      "Expert in creating mobile solutions that work in low-connectivity environments.",
    image: "/assets/images/20240726_164330.jpeg",
  },
];

const LabsTeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Meet Our Innovation Team
          </h2>
          <p className="text-lg text-gray-600">
            The brilliant minds behind our groundbreaking solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              {/* Member Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow-sm mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsTeamSection;
