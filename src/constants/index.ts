export const footerLinks = [
  {
    section: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Focus Areas", href: "/focus-areas" },
      { label: "Community", href: "/community" },
      { label: "Labs", href: "/labs" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
];
export interface TeamMember {
  name: string;
  country: string;
  role: string;
  img: string;
  department?: FilterType;
}

// Filter options
export const FILTERS = {
  ALL: "All",
  LEADS: "Team Leads",
  OPERATIONS: "Operations",
  TECH: "Tech team",
  DESIGN: "Design team",
} as const;

export type Product = {
  icon: string;
  id: string;
  color: string;
  category: string;
  description: string;
  title: string;
  image: string;
  features: Array<string>;
  longDesc: string;
};

export type FilterType = keyof typeof FILTERS;

// Team data
export const TEAM_MEMBERS: TeamMember[] = [

  // ── Team Leads ──────────────────────────────────────────
  {
    name: "Michael S. Olukayode",
    department: "LEADS",
    country: "NG",
    role: "Founder & Executive Director",
    img: "/assets/images/MichaelOlukayode.jpg",
  },
  {
    name: "Khadijah Abdul Juma",
    department: "LEADS",
    country: "KE",
    role: "Advisor on Partnership and Growth Network",
    img: "/assets/images/Khadija-Abdul.png",
  },
  {
    name: "Imam Bashir Abdulwahab",
    department: "LEADS",
    country: "NG",
    role: "Secretary, Board of Trustees",
    img: "/assets/images/Imam-Bashir.JPG",
  },
  {
    name: "Precious Oparanozie",
    department: "LEADS",
    role: "Advisor on Legal & Policy",
    country: "NG",
    img: "/assets/images/PreciousChidinma.jpg",
  },
  {
    name: "Oluwole Feranmi",
    department: "LEADS",
    role: "Operations Manager",
    country: "NG",
    img: "/assets/images/FeranmiOluwole.JPG",
  },

  // ── Operations ──────────────────────────────────────────
  {
    name: "Irene Chidinma Ezechi",
    department: "OPERATIONS",
    country: "NG",
    role: "Regional Program manager",
    img: "/assets/images/Irene-Ezechi.jpg",
  },
  {
    name: "Okikiolu Eniola-Glory Fiyinfoluwa",
    department: "OPERATIONS",
    country: "NG",
    role: "Community Operations Lead",
    img: "/assets/images/eniola.jpeg",
  },
  {
    name: "Hammed Abibat",
    department: "OPERATIONS",
    country: "NG",
    role: "Social Media Relations",
    img: "/assets/images/Hammed.JPG",
  },
  {
    name: "Inioluwa Afolabi",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager - Monthly Reset Challenges",
    img: "/assets/images/afolabi.jpeg",
  },
  {
    name: "Mariam Jimoh",
    department: "OPERATIONS",
    country: "NG",
    role: "ESG & Impact Lead",
    img: "/assets/images/MariamJimoh.jpeg",
  },
  {
    name: "Olusola Blessing",
    department: "OPERATIONS",
    country: "NG",
    role: "Technical Content Writer",
    img: "/assets/images/BlessingOlusola.jpeg",
  },
  {
    name: "Neh Glory Anye",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager - Digital Literacy (CyberSec.)",
    img: "/assets/images/Neh-Glory.jpeg",
  },
  {
    name: "Shukurat O. Abdulkadir",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager - Digital Literacy (CyberSec.)",
    img: "/assets/images/ShukuratAbdulkadir.jpg",
  },

  // ── Tech Team ────────────────────────────────────────────
  {
    name: "Iretioluwa Ogunmola",
    department: "TECH",
    country: "NG",
    role: "Product Management Lead",
    img: "/assets/images/Ireti.jpeg",
  },
  {
    name: "Olatunji-Aresa A. Olamide",
    department: "TECH",
    country: "NG",
    role: "Frontend Engineer",
    img: "/assets/images/AriyoAresa.jpg",
  },
  {
    name: "Boluwatife Adeleke",
    department: "TECH",
    country: "NG",
    role: "Product Marketing Manager",
    img: "/assets/images/Boluwatife-Mercy.jpeg",
  },
  {
    name: "Fashoyin Olujimi Temitope",
    department: "TECH",
    country: "NG",
    role: "Data Analyst",
    img: "/assets/images/Olujimi-Fashoyin.jpg",
  },
  {
    name: "Theresa Gyamfi",
    department: "TECH",
    country: "GH",
    role: "GRC Analyst & Policy Engineer",
    img: "/assets/images/AsieduGyamfi.png",
  },
  {
    name: "Obochi Happiness Adah",
    department: "TECH",
    country: "NG",
    role: "Backend Engineer",
    img: "/assets/images/HappinessObochi.jpg",
  },
  {
    name: "Abayomi Favour",
    department: "TECH",
    country: "NG",
    role: "Mobile Developer",
    img: "/assets/images/FavourAbayomi.jpg",
  },
  {
    name: "Ajigbayi Oluwafemi Tosin",
    department: "TECH",
    country: "NG",
    role: "Software Engineer",
    img: "/assets/images/OluwafemiAjigbayi.JPG",
  },
  {
    name: "Maxwell Oba-Joshua",
    department: "TECH",
    country: "NG",
    role: "Full-Stack Engineer",
    img: "/assets/images/MaxwellJoshua.jpg",
  },
  {
    name: "Olamilekan J. Aremu",
    department: "TECH",
    country: "NG",
    role: "Full-Stack Engineer",
    img: "/assets/images/OlamilekanAremu.jpg",
  },
  {
    name: "Adeoye Esther Toluwanimi",
    department: "TECH",
    country: "NG",
    role: "Social Media Relations",
    img: "/assets/images/AdeoyeEsther.jpg",
  },

  // ── Design Team ──────────────────────────────────────────
  {
    name: "Mercy Kalu",
    department: "DESIGN",
    country: "NG",
    role: "Product Designer",
    img: "/assets/images/MercyKalu.jpg",
  },
  {
    name: "Abraham Ekundayo",
    department: "DESIGN",
    country: "NG",
    role: "Product Designer",
    img: "/assets/images/AbrahamEkundayo.jpeg",
  },
  {
    name: "Sodeeq Badejoko",
    department: "DESIGN",
    country: "NG",
    role: "Graphic Designer",
    img: "/assets/images/SodeeqBadejoko.png",
  },
  {
    name: "Idowu Ayomide Victor",
    department: "DESIGN",
    country: "NG",
    role: "Graphic Designer",
    img: "/assets/images/AyomideIdowu.jpg",
  },
  {
    name: "Beloved-John Adejumo",
    department: "DESIGN",
    country: "NG",
    role: "Graphic Designer",
    img: "/assets/images/Beloved-john.jpg",
  },
  {
    name: "Ayegbusi Bright Temitope",
    department: "DESIGN",
    country: "NG",
    role: "Graphic Designer",
    img: "/assets/images/AyegbusiBright.jpg",
  },
];

export const products: Product[] = [
  {
    id: "hub-education",
    icon: "Ã°Å¸Å½â€œ",
    title: "RIO Hub for Education",
    category: "Education & Learning",
    color: "#367bf4",
    description:
      "Track academic progress, study habits, and engagement. Empower students and educators with data-driven insights for better learning outcomes.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Student progress tracking",
      "Educator effectiveness analytics",
      "Institutional insights dashboard",
    ],
    longDesc:
      "RIO Hub for Education transforms learning environments by providing real-time analytics on student engagement, progress tracking, and personalized learning paths. Educators gain actionable insights to improve teaching effectiveness while students stay motivated through gamified challenges and peer accountability.",
  },
  // {
  //   id: "hub-corporate",
  //   title: "RIO Hub for Companies",
  //   category: "Business & Enterprise",
  //   color: "#48d7e2",
  //   icon: "Ã°Å¸ÂÂ¢",
  //   description:
  //     "Boost workplace productivity and employee engagement. Track team performance, collaboration metrics, and professional development goals.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Team productivity analytics",
  //     "Employee engagement tracking",
  //     "Performance insights dashboard",
  //   ],
  //   longDesc:
  //     "RIO Hub for Companies revolutionizes workplace productivity by tracking team collaboration, project milestones, and employee wellness. Our AI-driven insights help managers identify bottlenecks, optimize workflows, and foster a culture of continuous improvement and accountability.",
  // },
  // {
  //   id: "hub-creators",
  //   title: "RIO Hub for Content Creators",
  //   category: "Content & Media",
  //   color: "#a44ff5",
  //   icon: "Ã°Å¸Å½Â¬",
  //   description:
  //     "Manage content schedules, track creative output, and build consistent habits. Stay accountable to your audience and creative goals.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Content calendar management",
  //     "Creative habit tracking",
  //     "Audience engagement metrics",
  //   ],
  //   longDesc:
  //     "RIO Hub for Content Creators streamlines content production with intelligent scheduling, audience analytics, and creative habit tracking. Stay consistent with your content calendar while building sustainable creative practices that keep your audience engaged.",
  // },
  // {
  //   id: "hub-developers",
  //   title: "RIO Hub for Developers",
  //   color: "#0eb27c",
  //   category: "Technology & Dev",
  //   icon: "Ã°Å¸â€™Â»",
  //   description:
  //     "Track coding habits, project milestones, and technical skill development. Build consistent development practices and collaborate effectively.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Code contribution tracking",
  //     "Project milestone management",
  //     "Technical skill progression",
  //   ],
  //   longDesc:
  //     "RIO Hub for Developers enhances coding productivity through commit tracking, project milestone management, and skill progression analytics. Build better coding habits, collaborate effectively with your team, and advance your technical expertise systematically.",
  // },
  // {
  //   id: "hub-startups",
  //   title: "RIO Hub for Startups",
  //   category: "Innovation & Startups",
  //   icon: "Ã°Å¸Å¡â‚¬",
  //   color: "#ee950a",
  //   description:
  //     "Monitor innovation cycles, team productivity, and startup growth metrics. Foster a culture of accountability and rapid iteration.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Sprint tracking",
  //     "Team velocity metrics",
  //     "Innovation pipeline management",
  //   ],
  //   longDesc:
  //     "RIO Hub for Startups accelerates innovation by tracking sprint velocity, team productivity, and product development cycles. Foster a culture of rapid iteration and accountability while maintaining clear visibility into your startup's growth metrics.",
  // },
  // {
  //   id: "hub-government",
  //   title: "RIO Hub for Government",
  //   category: "Public Sector",
  //   color: "#ed4141",
  //   icon: "Ã°Å¸Ââ€ºÃ¯Â¸Â",
  //   description:
  //     "Enhance public sector productivity and service delivery. Track project timelines, citizen engagement, and departmental performance.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Project timeline tracking",
  //     "Service delivery metrics",
  //     "Departmental analytics",
  //   ],
  //   longDesc:
  //     "RIO Hub for Government improves public sector efficiency through project timeline tracking, service delivery metrics, and departmental performance analytics. Enhance transparency, accountability, and citizen engagement with data-driven governance.",
  // },
  // {
  //   id: "hub-nonprofit",
  //   title: "RIO Hub for Nonprofits",
  //   category: "Social Impact",
  //   color: "#e63c8d",
  //   icon: "Ã°Å¸Â¤Â",
  //   description:
  //     "Maximize impact with volunteer management, program tracking, and donor engagement insights. Build sustainable community initiatives.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Volunteer coordination",
  //     "Program impact tracking",
  //     "Donor engagement analytics",
  //   ],
  //   longDesc:
  //     "RIO Hub for Nonprofits maximizes social impact through volunteer coordination, program effectiveness tracking, and donor engagement analytics. Build sustainable community initiatives with clear metrics that demonstrate your organization's impact.",
  // },
  // {
  //   id: "hub-sports",
  //   title: "RIO Hub for Sports & Fitness",
  //   icon: "Ã¢Å¡Â½",
  //   category: "Sports & Wellness",
  //   color: "#11ad9d",
  //   description:
  //     "Track training routines, athletic performance, and team coordination. Build winning habits and achieve fitness goals consistently.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Training schedule management",
  //     "Performance metrics tracking",
  //     "Team coordination tools",
  //   ],
  //   longDesc:
  //     "RIO Hub for Sports & Fitness optimizes athletic performance through training schedule management, performance metrics tracking, and team coordination tools. Build winning habits, track progress, and achieve fitness goals with data-driven insights.",
  // },
  // {
  //   id: "hub-creative",
  //   title: "RIO Hub for Creative Media",
  //   category: "Creative Industries",
  //   color: "#5d5ced",
  //   icon: "Ã°Å¸Å½Â¨",
  //   description:
  //     "Manage creative projects, track production workflows, and collaborate with teams. Deliver creative excellence on schedule.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Production workflow tracking",
  //     "Creative project management",
  //     "Team collaboration tools",
  //   ],
  //   longDesc:
  //     "RIO Hub for Creative Media streamlines production workflows with project management, creative collaboration tools, and deadline tracking. Deliver creative excellence on schedule while maintaining team coordination and quality standards.",
  // },
  // {
  //   id: "hub-research",
  //   title: "RIO Hub for Research",
  //   category: "Research & Academia",
  //   color: "#8856f4",
  //   icon: "Ã°Å¸â€Â¬",
  //   description:
  //     "Track research milestones, manage academic collaborations, and monitor publication progress. Advance knowledge systematically.",
  //   image: "/assets/images/product-hub.svg",
  //   features: [
  //     "Research milestone tracking",
  //     "Collaboration management",
  //     "Publication progress monitoring",
  //   ],
  //   longDesc:
  //     "RIO Hub for Research advances academic excellence through milestone tracking, collaboration management, and publication progress monitoring. Systematically advance knowledge while maintaining clear visibility into research outcomes and team contributions.",
  // },
];