interface CardProps {
  title: string;
  accent: string;
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ title, accent, children }) => (
  <div
    className="rounded-2xl bg-gray-50 p-6"
    style={{ borderLeft: `4px solid ${accent}` }}
  >
    <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export const WhatWeDo: React.FC = () => (
  <section className="what-we-do mb-16">
    <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
      What We Do
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Community Building" accent="#20c9c0">
        We create vibrant networks of ambitious students and changemakers united
        by excellence and intentional growth.
      </Card>
      <Card title="Innovation Labs" accent="#2563eb">
        Our innovation hub where we build and experiment with new ideas to solve
        challenges across Africa.
      </Card>
      <Card title="Partnership Networks" accent="#10b981">
        We connect students with mentors, resources, and opportunities to foster
        collaboration and accelerate growth.
      </Card>
      <Card title="Personal Development" accent="#f59e0b">
        We run growth campaigns and programs that help students develop
        discipline, leadership, and life skills.
      </Card>
    </div>
  </section>
);
