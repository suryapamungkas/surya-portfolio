export const predefinedProjects = [
  {
    id: "traveloop",
    Title: "Traveloop",
    Description:
      "A modern collaborative travel planning platform featuring interactive split-screen maps, smart itinerary builder, route optimization, and real-time budget management. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.",
    Img: "/traveloop.png",
    TechStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Leaflet"],
    Features: [
      "Responsive split-screen layout synchronizing day-by-day itineraries with interactive maps",
      "Multi-provider map engine supporting Leaflet, OpenStreetMap, Google Maps, and Mapbox",
      "Smart Itinerary Builder with automatic travel duration and distance optimization",
      "Integrated budget management and collaborative split-bill expense calculation",
      "Global destination discovery catalog with curated attractions, reviews, and operating hours"
    ],
    Link: "https://traveloop-trip.vercel.app",
    Github: "https://github.com/suryapamungkas/traveloop",
  },
  {
    id: "nusa-asset-management",
    Title: "Nusa Asset Management",
    Description:
      "An enterprise-grade Asset Management (EAM) system built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features multi-branch physical asset tracking, instant QR code generation, PSAK 16 straight-line depreciation, asset mutation workflows, and full PMO governance documentation (PMBOK 7th Edition).",
    Img: "/nusa-asset-management.png",
    TechStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Features: [
      "Multi-branch enterprise inventory tracking across regional offices (Jakarta, Surabaya, Medan, Makassar)",
      "Automated PSAK 16 Straight-Line depreciation engine and real-time book value auditing",
      "Instant QR code tracking engine and SVG physical barcode/label generator",
      "Inter-branch asset mutation & transfer lifecycle workflow with tiered approval validation",
      "Comprehensive PMO governance framework conforming to PMBOK 7th Edition & Agile standards"
    ],
    Link: "https://nusa-asset-management.vercel.app",
    Github: "https://github.com/suryapamungkas/nusa-asset-management",
  },
  {
    id: "lexindonesia-legal-platform",
    Title: "LexIndonesia",
    Description:
      "Indonesia’s premier integrated legal intelligence platform & regulatory compliance ecosystem modeled after Hukumonline. Features an indexed global law search engine with real-time enactment status, multi-tier RBAC (Free vs Pro), interactive legal research workspace, and a companion Chrome Extension (Manifest V3).",
    Img: "/lexindonesia-legal-platform.png",
    TechStack: ["JavaScript", "Vite", "Chrome Extension", "Tailwind CSS", "RegTech"],
    Features: [
      "Indexed multi-dimensional law search engine with keyword highlighting and real-time status indicators",
      "Role-Based Access Control (RBAC) supporting Free and Pro Subscriber access tiers",
      "Four specialized legal ecosystem catalogs: PRO Intelligence, SOLUSI Tech, INFO HUKUM, and EVENT",
      "My Workspace legal research notebook with local autosave, annotation, and export tools",
      "Companion Chrome Extension (Manifest V3) utilizing Side Panel API for side-by-side legal analysis"
    ],
    Link: "https://lexindonesia.vercel.app",
    Github: "https://github.com/suryapamungkas/lexindonesia-legal-platform",
  },
  {
    id: "resilio.id",
    Title: "Resilio.id",
    Description:
      "Indonesia's economic resilience and household financial shock response platform. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring an Early Warning financial health check engine, 6 core resilience pillars, and emergency fund calculators.",
    Img: "/resilio.id.png",
    TechStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "FinTech"],
    Features: [
      "Early Warning Financial Health Check diagnostic engine powered by React Hook Form & Zod",
      "Interactive 6-Pillar Economic Resilience grid addressing unemployment, emergency funds, and ethical micro-finance",
      "Dynamic Emergency Cash Buffer & Micro-Protection calculator with flexible savings milestones",
      "Crisis Rapid Response 48-hour protocol for unexpected layoffs and predatory lending rescue",
      "Dual Segment Architecture tailored for Households/Families and Community/B2B gotong-royong funds"
    ],
    Link: "https://resilioid.vercel.app",
    Github: "https://github.com/suryapamungkas/resilio.id",
  },
  {
    id: "vanguard-human-capital",
    Title: "SDM Unggul",
    Description:
      "Indonesian Human Capital & Future Skills edutech platform. Featuring an 8-pillar vocational curriculum, low-bandwidth adaptive mode for 3T regions, interactive video previews, scholarship simulators, and career readiness diagnostic testing.",
    Img: "/vanguard-human-capital.png",
    TechStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "EdTech"],
    Features: [
      "8-Pillar comprehensive vocational curriculum spanning AI literacy, applied finance, and 3T empowerment",
      "Adaptive Bandwidth Mode (<5MB audio format & lightweight rendering) for frontier 3T regions",
      "Interactive Career Readiness Diagnostic Test generating personalized 90-day learning roadmaps",
      "Full interactive video preview player with chapter scrubbing and audio-only playback",
      "3T Affirmative Scholarship & CSR subsidy simulator with real-time voucher validation"
    ],
    Link: "https://sdm-unggul.vercel.app",
    Github: "https://github.com/suryapamungkas/vanguard-human-capital",
  },
  {
    id: "nusa-decarb",
    Title: "NusaDecarb",
    Description:
      "An enterprise-grade Green-Tech & ESG advisory platform accelerating industrial decarbonization towards Indonesia's Net Zero Emission 2060. Built with React 19, TypeScript, and Tailwind CSS, NusaDecarb bridges climate regulatory compliance, carbon credit trading (IDX Carbon), and applied green technology solutions.",
    Img: "/nusa-decarb.png",
    TechStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    Features: [
      "Industrial energy transition & thermal efficiency auditing",
      "Indonesia Green Taxonomy 2.0 compliance & IDX Carbon integration",
      "Real-time carbon emissions tracking & certified MRV reporting",
      "Modern high-performance green-tech interface built with React 19"
    ],
    Link: "https://nusa-decarb.vercel.app",
    Github: "https://github.com/suryapamungkas/nusa-decarb",
  },
  {
    id: "llm-evaluation-dashboard",
    Title: "LLM Evaluation Dashboard",
    Description:
      "A modern LLM evaluation and prompt engineering dashboard featuring parallel benchmarking, LLM-as-a-Judge grading, Ground Truth verification, and Prompt A/B testing. Built with FastAPI, Streamlit, SQLite, and Docker.",
    Img: "/llm-evaluation-dashboard.png",
    TechStack: ["Python", "FastAPI", "Streamlit", "Docker", "SQLite"],
    Features: [
      "Parallel multi-LLM benchmarking across leading frontier models (GPT-4o, Gemini)",
      "Automated LLM-as-a-Judge evaluation with rubric scoring & qualitative reasoning",
      "Ground Truth verification and prompt versioning with A/B testing workflows",
      "Interactive real-time metric visualizations powered by Plotly and Streamlit",
      "Modular microservices architecture fully containerized with Docker Compose"
    ],
    Link: "#",
    Github: "https://github.com/suryapamungkas/llm-evaluation-dashboard",
  },
  {
    id: "trustchain-umkm",
    Title: "TrustChain UMKM",
    Description:
      "A robust supply chain verification infrastructure that transforms opacity into transparency for global export-import trade. By integrating Blockchain technology with advanced AI analytics, TrustChain empowers MSMEs to achieve secure transactions and seamless cross-border commerce.",
    Img: "/trustchain.png",
    TechStack: ["React", "Blockchain", "AI Analysis"],
    Features: [
      "End-to-end decentralized export-import supply chain tracking",
      "Automated AI smart contract verification for cross-border trade",
      "Real-time tamper-proof shipment validation & tamper detection",
      "Decentralized identity & compliance verification for MSMEs"
    ],
    Link: "https://trustchain-umkm.vercel.app/",
    Github: "https://github.com/suryapamungkas",
  },
  {
    id: "smart-vegetable-detector",
    Title: "smart-vegetable-detector",
    Description:
      "A client-side AI Progressive Web App featuring real-time vegetable classification with TensorFlow.js and on-device nutritional fun fact generation using Transformers.js (LaMini-Flan-T5). Fully offline-capable (PWA) with WebGPU acceleration.",
    Img: "/smart-vegetable-detector.png",
    TechStack: ["TensorFlow.js", "Transformers.js", "PWA", "JavaScript", "WebGPU"],
    Features: [
      "Real-time client-side vegetable classification using TensorFlow.js",
      "On-device nutritional fun fact generation powered by Transformers.js (LaMini-Flan-T5)",
      "Fully offline-capable Progressive Web App (PWA) with Workbox service workers",
      "High-performance client-side inference utilizing WebGPU hardware acceleration",
      "Privacy-first architecture running deep learning models entirely in the browser"
    ],
    Link: "https://smart-vegetable-detector.netlify.app",
    Github: "https://github.com/suryapamungkas/smart-vegetable-detector",
  },
];
