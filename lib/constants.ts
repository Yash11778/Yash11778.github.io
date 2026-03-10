// ─── Static Site Data ────────────────────────────────────────────────
// All hard-coded content lives here so section components stay pure.

export const SITE_NAME = "Daemons";
export const WHATSAPP_LINK = "https://wa.me/919356274667";

// ─── Services ────────────────────────────────────────────────────────

export interface Service {
  title: string;
  description: string;
  link: string;
}

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Blazing fast, SEO-optimized web applications. We build resilient Web2 platforms that handle massive scale from day one.",
    link: "#web-development",
  },
  {
    title: "Python Backtesting & Algo Trading",
    description:
      "We automate your trading strategies to focus on generating alpha.",
    link: "#algo-trading",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile experiences that feel native. High engagement, smooth performance, and zero compromise.",
    link: "#mobile-development",
  },
  {
    title: "Low-Level Systems (Rust)",
    description:
      "When milliseconds matter, we engineer solutions close to the metal.",
    link: "#rust-systems",
  },
  {
    title: "AI Agents & Automation",
    description:
      "Automate complex workflows. We deploy intelligent agents that handle support, data pipelines, and internal operations.",
    link: "#ai-automation",
  },
  {
    title: "Solana Development",
    description:
      "High-throughput, low-fee Web3 infrastructure. Smart contracts and full dApps engineered for the decentralized future.",
    link: "#solana-development",
  },
];

// ─── Tech Stack Marquee ──────────────────────────────────────────────

export const TECH_STACK = [
  "Next.js",
  "Python",
  "Rust",
  "Solana",
  "TypeScript",
  "React",
  "Node.js",
  "MERN Stack",
  "Docker",
  "AWS",
  "PostgreSQL",
] as const;

// ─── Metrics ─────────────────────────────────────────────────────────

export interface Metric {
  value: string;
  label: string;
}

export const METRICS: Metric[] = [
  { value: "100%", label: "IP Ownership" },
  { value: "0 to MVP", label: "Shipping Speed" },
  { value: "Direct", label: "Dev Communication" },
];

// ─── FAQs ────────────────────────────────────────────────────────────

export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We act as the dedicated technical execution team for founders who have the vision but need technical execution to get to market and scale fast.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. 100%. Upon final delivery and payment, all intellectual property, source code, and infrastructure is transferred entirely to your company.",
  },
  {
    q: "How do you handle pricing?",
    a: "We offer both milestone-based project pricing for clear scopes, and monthly retainer models if you need ongoing, dedicated engineering bandwidth.",
  },
  {
    q: "How fast can we start?",
    a: "Once we map your architecture and agree on the scope, our team can typically spin up infrastructure and begin shipping code within 48 to 72 hours.",
  },
];

// ─── Philosophy Selling Points ───────────────────────────────────────

export const PHILOSOPHY_POINTS = [
  "Zero BS execution",
  "Scalable architecture from Day 1",
  "Direct communication with engineers",
] as const;

// ─── Projects ────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "QuantLabs",
    description:
      "NLP-based backtesting engine and portfolio rebalancer. Dynamically adjusts strategies using live news feeds and real-time market sentiment analysis to generate alpha.",
    tags: ["Python", "NLP", "Algo Trading", "Backtesting", "Sentiment Analysis"],
    images: [
      "/quantlabs/quantlabs.png",
      "/quantlabs/quantlabs2.png",
      "/quantlabs/quantlabs3.png",
    ],
  },
  {
    title: "Ekonos",
    description:
      "A protocol on Solana enabling fractional ownership of real-world assets. Tokenize, trade, and manage fractions of high-value assets with on-chain transparency and instant settlement.",
    tags: ["Solana", "Web3", "DeFi", "Tokenization", "Rust"],
    images: ["/ekonos/ekonos.png"],
  },
];

// ─── Social / Contact ────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  email: "mailto:daemonsbuild@gmail.com",
  linkedin: "http://linkedin.com/company/daemons-build/",
  instagram: "https://instagram.com/daemons.build",
} as const;

export const PHONE_NUMBERS = [
  { display: "+91 99231 71129", wa: "https://wa.me/919923171129" },
  { display: "+91 92840 28578", wa: "https://wa.me/919284028578" },
] as const;
