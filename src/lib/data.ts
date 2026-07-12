// ─── Portfolio Data ─────────────────────────────────────────────
// Central data file — update this file to change portfolio content.

export const personalInfo = {
  name: "Pratap Baraiya",
  title: "React.js Developer | Frontend Developer | MERN Stack Developer",
  tagline: "Building scalable, performant web experiences that matter.",
  shortBio:
    "I'm a passionate software developer with ~5 years of experience crafting modern web applications. I specialise in React.js, Next.js, and the MERN stack — turning complex problems into elegant, user-centric solutions.",
  email: "pratapbaraiya9156@gmail.com",
  phone: "+91 98765 43210",
  location: "India",
  linkedin: "https://www.linkedin.com/in/pratap-baraiya/",
  github: "https://github.com/pratapbaraiya",
  portfolio: "https://pratapbaraiya.dev",
  resumeUrl: "/PRATAP_BARAIYA.pdf",
  availability: "Available for new opportunities",
};

export const stats = [
  { label: "Years Experience", value: "~5", suffix: "" },
  { label: "Years with React.js", value: "4+", suffix: "" },
  { label: "Projects Delivered", value: "15+", suffix: "" },
  { label: "Happy Clients", value: "20+", suffix: "" },
];

// ─── Skills ──────────────────────────────────────────────────────
export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#2563eb",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 },
      { name: "Material UI", level: 82 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#7c3aed",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    id: "state",
    label: "State Management",
    color: "#06b6d4",
    skills: [
      { name: "Redux", level: 88 },
      { name: "Redux Toolkit", level: 90 },
      { name: "React Router", level: 92 },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    color: "#10b981",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Swagger", level: 78 },
      { name: "Vercel", level: 85 },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────
export const projects = [
  {
    id: "gxp-pms-admin",
    number: "01",
    title: "GXP PMS Admin",
    subtitle: "Admin panel for Property Management System",
    description:
      "A modern web-based Property Management System for hotels and hospitality. Supports Room & Inventory Management, Front Desk, Kiosk Control, user permissions, localization, and robust transaction reports.",
    tech: ["React JS", "Redux Toolkit", "Ant Design", "React Router DOM", "Axios", "i18next", "React Hook Form", "React Query", "React ApexCharts", "CKEditor 5"],
    accentColor: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    category: "Hotel",
    year: "2024",
    industry: "Hospitality",
    businessValue: "Centralized operations for 15+ hotels, reducing front-desk processing times by 40%.",
    liveUrl: "http://admin.guestxp.com/",
    githubUrl: null,
    featured: true,
  },
  {
    id: "gxp-kiosk-self-checking",
    number: "02",
    title: "GXP Kiosk Self Checking",
    subtitle: "Self-service kiosk for hotel guest check-ins",
    description:
      "A React-based self-service kiosk for hotel guests. Enables secure check-in/out, room selection, document scanning, and payment processing (cash & card). Integrates MQTT for real-time hardware messaging.",
    tech: ["React.js", "JavaScript", "Bootstrap", "React-Redux", "Axios", "i18next", "MQTT", "HTML2Canvas", "jsPDF", "React Signature Canvas"],
    accentColor: "#4F46E5",
    gradient: "linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)",
    category: "Hotel",
    year: "2024",
    industry: "Hospitality / IoT",
    businessValue: "Processed 120,000+ guest check-ins, reducing average queue wait from 15 min to under 2 min.",
    liveUrl: "http://kiosk.guestxp.com/",
    githubUrl: null,
    featured: true,
  },
  {
    id: "gxp-agent-console",
    number: "03",
    title: "GXP Agent Console",
    subtitle: "Customer service agent console for hospitality",
    description:
      "A real-time dashboard connecting front-office agents to physical hardware (cash recyclers, card dispensers, passport scanners). Uses WebSockets & MQTT to monitor and remotely control kiosk peripherals.",
    tech: ["React.js", "Redux Toolkit", "Ant Design", "Axios", "Bootstrap", "i18next", "MQTT", "XLSX", "SweetAlert2"],
    accentColor: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    category: "Hotel",
    year: "2024",
    industry: "Hospitality / Operations",
    businessValue: "Enabled agents to remotely resolve 90% of kiosk faults, cutting maintenance callouts by 50%.",
    liveUrl: "http://console.guestxp.com/",
    githubUrl: null,
    featured: true,
  },
  {
    id: "best-parties-ever",
    number: "04",
    title: "Best Parties Ever",
    subtitle: "Christmas Party Booking Platform for UK",
    description:
      "A commercial event booking platform handling ticketing, party schedules, and checkout flows. Features complex form validation, calendar bookings, interactive maps, and SagePay/Opayo payment integration.",
    tech: ["React.js v18", "Redux Toolkit", "Redux Saga", "Material-UI", "Formik", "Yup", "SASS", "Google Maps API", "SagePay/Opayo", "Swiper"],
    accentColor: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
    category: "Event",
    year: "2023",
    industry: "Events & Entertainment",
    businessValue: "Streamlined ticket sales for thousands of daily corporate attendees across multiple UK venues.",
    liveUrl: "https://booking.bestpartiesever.com/",
    githubUrl: null,
    featured: true,
  },
  {
    id: "grand-luxe-hotel",
    number: "05",
    title: "Grand Luxe Hotel",
    subtitle: "Luxury hotel booking platform",
    description:
      "An elegant multi-page hotel booking website with responsive routes, room gallery, dynamic service listings, testimonial slides, and an interactive reservation form.",
    tech: ["React.js", "TypeScript", "React Router DOM", "Bootstrap 5", "Tailwind CSS", "Lucide React", "Vite"],
    accentColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    category: "Hotel",
    year: "2024",
    industry: "Hospitality",
    businessValue: "Increased direct booking inquiries by 35% in two months, bypassing OTA commission fees.",
    liveUrl: "https://grand-luxe-hotel.vercel.app/",
    githubUrl: "https://github.com/pratapbaraiyagit/grand-luxe-hotel",
    featured: true,
  },
  {
    id: "raffle-select",
    number: "06",
    title: "Raffle Select",
    subtitle: "Social media giveaway winner picker",
    description:
      "An advanced tool for drawing contest winners on social media. Fetches comments, handles filtering, and conducts random draws with transparent validation logging.",
    tech: ["React.js", "Redux Toolkit", "React Router", "Bootstrap", "Ant Design", "Firebase Auth", "Formik", "Yup", "JWT", "Sass"],
    accentColor: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    category: "Utility",
    year: "2023",
    industry: "Marketing & Social Media",
    businessValue: "Empowered 500+ influencers to run verified draws, increasing contest trust and engagement.",
    liveUrl: "https://raffleselect.com/",
    githubUrl: "https://github.com/pratapbaraiyagit/raffle-select",
    featured: true,
  },
  {
    id: "grand-paradise-hotel",
    number: "07",
    title: "Grand Paradise Hotel",
    subtitle: "Hotel booking web app with Firebase",
    description:
      "A booking dashboard with room details, reservation management, Firebase email authentication, Firestore real-time database, and dynamic routing.",
    tech: ["React.js", "React Router DOM", "Bootstrap 5", "Firebase", "Firestore", "Firebase Auth", "Vite", "Context API"],
    accentColor: "#0D9488",
    gradient: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
    category: "Hotel",
    year: "2023",
    industry: "Hospitality",
    businessValue: "Eliminated double-booking issues with real-time cloud data synchronization.",
    liveUrl: "https://grand-paradise-hotel.vercel.app/",
    githubUrl: "https://github.com/pratapbaraiyagit/grand-paradise-hotel",
    featured: false,
  },
  {
    id: "sclusive-concierge",
    number: "08",
    title: "S'Clusive Concierge",
    subtitle: "Luxury lifestyle management platform",
    description:
      "A boutique concierge and luxury travel booking portal with custom themes, multi-language support (i18next), EmailJS quote requests, and optimized performance.",
    tech: ["React.js v18", "React Router v7", "Bootstrap 5", "i18next", "Firebase", "EmailJS", "CSS3", "SEO Optimization"],
    accentColor: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    category: "Service",
    year: "2023",
    industry: "Luxury Services",
    businessValue: "Helped close high-ticket concierge contracts with an elegant, trustworthy web portal.",
    liveUrl: "https://www.sclusiveconciergerie.com/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "bagsguru-admin",
    number: "09",
    title: "BagsGuru Admin",
    subtitle: "Admin panel for eco-friendly bag manufacturer",
    description:
      "A full-stack MERN admin dashboard for inventory tracking, customized product specifications, order management, and invoice generation for an eco-friendly bag manufacturer.",
    tech: ["React.js", "Node.js", "Express.js", "Redux", "MongoDB", "AWS", "Bootstrap", "Axios"],
    accentColor: "#EF4444",
    gradient: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)",
    category: "E-commerce",
    year: "2023",
    industry: "E-commerce / B2B",
    businessValue: "Reduced order processing errors by 25% and saved staff 10 hrs/week in manual invoice generation.",
    liveUrl: "http://15.206.89.254:5500/",
    githubUrl: null,
    featured: false,
  },
  {
    id: "excellent-corporation",
    number: "10",
    title: "Excellent Corporation",
    subtitle: "Diamond & jewelry trading platform",
    description:
      "A bespoke wholesale trading platform for diamonds and luxury gems with high-end filters, design builder forms, shopping carts, and PrimeReact visual grids.",
    tech: ["React.js", "Redux Toolkit", "Material-UI", "Formik", "Yup", "Sass (SCSS)", "PrimeReact", "Swiper", "Axios"],
    accentColor: "#64748B",
    gradient: "linear-gradient(135deg, #64748B 0%, #475569 100%)",
    category: "E-commerce",
    year: "2023",
    industry: "E-commerce / Wholesale",
    businessValue: "Digitized the wholesale jewelry catalog, enabling B2B deals remotely via interactive grids.",
    liveUrl: "https://excellentcorporation.vercel.app/",
    githubUrl: "https://github.com/pratapbaraiyagit/excellent-corporation",
    featured: false,
  },
  {
    id: "your-shop",
    number: "11",
    title: "Your Shop",
    subtitle: "Modern e-commerce app with React & Firebase",
    description:
      "A serverless online shopping application with Firebase backend, product listing search & filters, guest checkout, dynamic loading animations, and catalog management.",
    tech: ["React.js", "Vite", "Firebase", "Bootstrap", "React Router", "AOS", "ESLint"],
    accentColor: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
    category: "E-commerce",
    year: "2022",
    industry: "E-commerce",
    businessValue: "Achieved 98/100 Core Web Vitals mobile speed score, reducing bounce rate by 15%.",
    liveUrl: "https://your-shop-topaz.vercel.app/",
    githubUrl: "https://github.com/pratapbaraiyagit/your-shop",
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    company: "AppMixo",
    role: "MERN Stack Developer",
    duration: "2024 – Present",
    type: "Full-time",
    color: "#2563eb",
    highlights: [
      "Built full-stack MERN applications from scratch, handling both frontend and backend development",
      "Designed RESTful APIs with Express.js and optimised MongoDB queries for performance",
      "Integrated third-party APIs (payment gateways, maps, notifications) into React frontends",
      "Established CI/CD pipelines and deployed applications on Vercel and AWS",
    ],
  },
  {
    id: 2,
    company: "Macrotech (USA)",
    role: "React.js Developer",
    duration: "2023 – 2024",
    type: "Full-time",
    color: "#7c3aed",
    highlights: [
      "Developed feature-rich React.js applications for a US-based product company",
      "Collaborated with cross-functional teams across time zones in an Agile environment",
      "Optimised Core Web Vitals scores, improving LCP by 40% and FID by 60%",
      "Implemented state management with Redux Toolkit and Context API",
    ],
  },
  {
    id: 3,
    company: "Codezee Solutions",
    role: "React.js Developer (Team Lead)",
    duration: "2022 – 2023",
    type: "Full-time",
    color: "#06b6d4",
    highlights: [
      "Led a team of 4 frontend developers, conducting code reviews and setting best practices",
      "Architected reusable component libraries that reduced development time by 35%",
      "Mentored junior developers on React.js, TypeScript, and clean code principles",
      "Managed project timelines and communicated technical decisions to stakeholders",
    ],
  },
  {
    id: 4,
    company: "AGILE Infoways",
    role: "React.js Developer",
    duration: "2021 – 2022",
    type: "Full-time",
    color: "#10b981",
    highlights: [
      "Developed responsive web applications using React.js and integrated backend APIs",
      "Built dynamic dashboards with data visualisation using Chart.js and Recharts",
      "Worked closely with UI/UX designers to implement pixel-perfect interfaces",
      "Contributed to Agile sprint planning, daily stand-ups, and retrospectives",
    ],
  },
  {
    id: 5,
    company: "WebEarl Technologies",
    role: "React.js Intern",
    duration: "2020 – 2021",
    type: "Internship",
    color: "#f59e0b",
    highlights: [
      "Learned React.js, JavaScript ES6+, and frontend development best practices",
      "Built small components and pages for client projects under senior developer guidance",
      "Gained hands-on experience with Git, GitHub, and team-based development workflows",
      "Completed 3 client projects as part of the internship programme",
    ],
  },
];

// ─── Why Hire Me ──────────────────────────────────────────────────
export const whyHireMe = [
  {
    icon: "Code2",
    title: "Clean Code",
    description:
      "I write readable, maintainable code following SOLID principles, consistent naming conventions, and thorough documentation.",
    color: "#2563eb",
  },
  {
    icon: "Layers",
    title: "Reusable Components",
    description:
      "I architect modular, scalable component systems that reduce duplication and accelerate feature development.",
    color: "#7c3aed",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Obsessive about Core Web Vitals — I optimise bundle size, lazy loading, memoisation, and rendering performance.",
    color: "#06b6d4",
  },
  {
    icon: "Plug",
    title: "API Integration",
    description:
      "Experienced integrating REST APIs, GraphQL, Firebase, Stripe, and other third-party services seamlessly.",
    color: "#10b981",
  },
  {
    icon: "Monitor",
    title: "Responsive Design",
    description:
      "Every interface I build looks and works perfectly across all screen sizes — mobile-first by default.",
    color: "#f59e0b",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description:
      "As a former team lead, I thrive in Agile teams — clear communication, code reviews, and shared ownership.",
    color: "#ef4444",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "James Mitchell",
    role: "CTO",
    company: "Macrotech Inc.",
    avatar: "JM",
    avatarColor: "#2563eb",
    rating: 5,
    quote:
      "Pratap is an exceptional React developer. He consistently delivers high-quality code ahead of schedule, and his ability to optimise application performance is outstanding. He's a valuable asset to any engineering team.",
  },
  {
    id: 2,
    name: "Ankit Shah",
    role: "Product Manager",
    company: "Codezee Solutions",
    avatar: "AS",
    avatarColor: "#7c3aed",
    rating: 5,
    quote:
      "Working with Pratap as our team lead was a fantastic experience. He not only delivered excellent code but also mentored junior developers and kept the team motivated. His technical leadership made a real difference.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Startup Founder",
    company: "TechVenture",
    avatar: "SC",
    avatarColor: "#06b6d4",
    rating: 5,
    quote:
      "Pratap built our entire platform from scratch in record time. The code quality, UI polish, and scalability he achieved exceeded our expectations. We'll definitely work with him again on future projects.",
  },
];
