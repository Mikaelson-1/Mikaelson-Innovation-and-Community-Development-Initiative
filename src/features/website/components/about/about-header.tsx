interface InfoCardProps {
  title: string;
  text: string;
  background: string;
  textColor: string;
  borderColor?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  background,
  textColor,
  borderColor,
}) => (
  <div
    className="rounded-2xl p-8 text-center"
    style={{
      background,
      color: textColor,
      borderColor: borderColor ?? "transparent",
      borderWidth: borderColor ? 2 : 0,
      borderStyle: "solid",
    }}
  >
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p>{text}</p>
  </div>
);

export const AboutHeader: React.FC = () => (
  <header className="about-header mx-auto max-w-5xl text-center mt-20">
    <h1 className="mb-4 text-4xl font-extrabold">
      About the Mikaelson Initiative
    </h1>
    <p className="mb-12 text-lg text-gray-600">
      We're building Africa's future - one student, one idea, one action at a
      time.
    </p>

    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
      <InfoCard
        title="Our Mission"
        text="To empower African communities through innovative technology solutions, quality education, and sustainable development programs that foster economic growth and social progress."
        background="rgba(92,225,230,0.5)"
        textColor="#111"
        borderColor="#5ce1e6"
      />
      <InfoCard
        title="Our Vision"
        text="A thriving Africa where every community has access to technology, education, and opportunities that enable them to build prosperous, sustainable futures."
        background="#2563eb"
        textColor="#fff"
      />
      <InfoCard
        title="Our Values"
        text="Innovation, community collaboration, sustainability, integrity, and empowerment drive everything we do as we work to transform Africa's future."
        background="#10b981"
        textColor="#fff"
      />
    </div>
  </header>
);
