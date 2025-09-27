import Link from "next/link";

export const TeamSection: React.FC = () => (
  <section className="team-section mb-16 text-center">
    <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
      Meet Our Team
    </h2>
    <p className="mx-auto mb-8 max-w-xl text-gray-600">
      Our diverse team of passionate individuals is dedicated to empowering
      African youth and building stronger communities.
    </p>
    <Link href="/team" className="inline-flex rounded-full bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-600">
        Meet the Team
    </Link>
  </section>
);
