interface StatProps {
  value: string;
  label: string;
  color: string;
}
const Stat: React.FC<StatProps> = ({ value, label, color }) => (
  <div>
    <div className="text-4xl font-black" style={{ color }}>
      {value}
    </div>
    <p className="font-semibold text-gray-600">{label}</p>
  </div>
);

export const ImpactStats: React.FC = () => (
  <section className="impact-stats mb-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-200 p-10 text-center">
    <h2 className="mb-8 text-3xl font-extrabold text-gray-900">Our Impact</h2>
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <Stat value="4+" label="Universities Touched" color="#20c9c0" />
      <Stat value="3,000+" label="Students Reached" color="#2563eb" />
      <Stat value="6" label="Growth Campaigns" color="#10b981" />
      <Stat value="12+" label="Strategic Partners" color="#f59e0b" />
    </div>
  </section>
);
