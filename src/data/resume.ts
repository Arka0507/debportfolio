export interface Project {
  title: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featuredStat?: { label: string; value: string };
}

export interface TimelineItem {
  type: 'experience' | 'education' | 'achievement' | 'certification';
  role: string;
  organization: string;
  period: string;
  location?: string;
  bullets?: string[];
  credential?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; proficiency?: string }[];
}

export const RESUME_DATA = {
  name: "Arkadeb Das",
  role: "Entry-Level Data Analyst & Data Scientist",
  location: "Based in Noida, Uttar Pradesh",
  shortLocation: "Noida, India",
  email: "arkadeb001@gmail.com",
  links: {
    github: "https://github.com/Arka0507",
    linkedin: "https://www.linkedin.com/in/arkadeb-das",
    resumePdf: "/resume.pdf"
  },
  summary: {
    heroLine: "Aspiring Data Scientist passionate about uncovering hidden patterns in complex datasets. Eager to turn raw data into clear, actionable business decisions.",
    aboutP1: "Aspiring Data Scientist and Data Analyst fresher (B.Tech CSE, CGPA 8.5) passionate about uncovering hidden patterns in complex datasets. Skilled in Python, SQL, Excel, and machine learning for data cleaning, exploratory data analysis, data visualization, and reporting.",
    aboutP2: "Experienced in engineering SQL pipelines for over 11,000 operational records, building KPI dashboards across ₹20.96 Cr in retail transactions, and deploying computer vision tracking models. Available to join immediately in an engineering-focused data scientist or analyst role."
  },
  heroStats: [
    {
      value: "11,000+",
      label: "Records Queried & Transformed",
      detail: "High-integrity SQL operational data"
    },
    {
      value: "₹20.96 Cr",
      label: "Retail Mart Sales Analyzed",
      detail: "10,000 multi-region orders & AOV metrics"
    },
    {
      value: "1,095",
      label: "IPL Matches Modeled",
      detail: "17 tournament seasons KPI dataset"
    }
  ],
  workStats: [
    { value: "17", label: "Seasons of Match Analytics" },
    { value: "₹20.96 Cr", label: "Retail Volume Modeled" },
    { value: "100%", label: "Real Empirical Datasets" }
  ],
  projects: [
    {
      title: "IPL Dashboard (2008-2024)",
      subtitle: "Microsoft Excel Analytics & KPI Model",
      bullets: [
        "Cleaned and transformed raw match-level data (1,095 matches across 17 seasons) into a dashboard-ready dataset; built PivotTables, PivotCharts, KPI cards and slicers.",
        "Identified that teams chose to field first in 64.3% of tosses, Mumbai hosted the most matches (145), and CSK and MI lead with 5 tournament titles each.",
        "Derived tournament margin dynamics showing an average winning margin of 30.1 runs alongside toss conversion and venue-wise performance distributions."
      ],
      tech: ["Microsoft Excel", "PivotTables", "PivotCharts", "Slicers", "Data Cleaning"],
      githubUrl: "https://github.com/Arka0507",
      featuredStat: { label: "Toss Field-First Rate", value: "64.3%" }
    },
    {
      title: "Retail Mart Sales Dashboard",
      subtitle: "Webskitters Academy Commercial Analysis",
      bullets: [
        "Built an interactive dashboard on 10,000 orders and ₹20.96 Cr in sales with year, month, region and order-status slicers; tracked AOV (₹21,035) and a 13% lost-order rate.",
        "Found that Electronics drove ~72% of sales, Uttar Pradesh (795) and Maharashtra (752) led order volume, and 71.6% of orders were delivered.",
        "Analyzed sales-rep performance, channel-discount structures, and payment-mode patterns to isolate customer drop-off drivers."
      ],
      tech: ["Microsoft Excel", "PivotTables", "PivotCharts", "Slicers", "KPI Dashboards"],
      githubUrl: "https://github.com/Arka0507",
      featuredStat: { label: "Average Order Value", value: "₹21,035" }
    },
    {
      title: "TrafficVision AI - Traffic Object Detection",
      subtitle: "YOLO & Computer Vision Tracking System",
      bullets: [
        "Built an end-to-end traffic video analytics application using lightweight YOLO, OpenCV, and ByteTrack for frame-by-frame multi-object detection and tracking.",
        "Constructed dynamic distance calculations, real-time vehicle speed estimation, and annotated bounding boxes with class confidence scoring.",
        "Implemented a full-stack video-upload workflow with a FastAPI backend to produce automated telemetry inspection reports."
      ],
      tech: ["Python", "YOLO", "OpenCV", "ByteTrack", "FastAPI"],
      githubUrl: "https://github.com/Arka0507",
      featuredStat: { label: "Tracking Pipeline", value: "Frame-by-Frame" }
    }
  ] as Project[],
  stackMarquee: [
    { name: "Python", category: "Language" },
    { name: "SQL", category: "Database Querying" },
    { name: "Microsoft Excel", category: "Analysis & BI" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Numerical Computing" },
    { name: "Scikit-Learn", category: "Machine Learning" },
    { name: "YOLO", category: "Computer Vision" },
    { name: "OpenCV", category: "Vision Processing" },
    { name: "ByteTrack", category: "Object Tracking" },
    { name: "FastAPI", category: "Backend & API" },
    { name: "HTML5", category: "Web" },
    { name: "CSS3", category: "Web" },
    { name: "Jupyter Notebook", category: "Dev Tool" },
    { name: "VS Code", category: "IDE" },
    { name: "Google Colab", category: "Cloud Notebook" },
    { name: "GitHub", category: "Version Control" },
    { name: "PivotTables", category: "Excel BI" },
    { name: "KPI Dashboards", category: "Reporting" },
    { name: "Data Cleaning", category: "Core Pipeline" },
    { name: "C", category: "Language" },
    { name: "C++", category: "Language" },
    { name: "Java", category: "Language" }
  ],
  skillsCategorized: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", proficiency: "Proficient" },
        { name: "SQL", proficiency: "Proficient" },
        { name: "C", proficiency: "Decent" },
        { name: "C++", proficiency: "Decent" },
        { name: "Java", proficiency: "Decent" }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", proficiency: "Relational" },
        { name: "PostgreSQL", proficiency: "Relational" }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Microsoft Excel", proficiency: "Advanced" },
        { name: "Pandas", proficiency: "Data Wrangling" },
        { name: "NumPy", proficiency: "Matrix Math" },
        { name: "Data Cleaning", proficiency: "Pipeline Integrity" },
        { name: "KPI Dashboards", proficiency: "Decision Analytics" }
      ]
    },
    {
      title: "Machine Learning & Vision",
      skills: [
        { name: "Scikit-Learn", proficiency: "Predictive Models" },
        { name: "YOLO", proficiency: "Object Detection" },
        { name: "OpenCV", proficiency: "Image Processing" },
        { name: "ByteTrack", proficiency: "Multi-Object Tracking" }
      ]
    },
    {
      title: "Web & Frameworks",
      skills: [
        { name: "FastAPI", proficiency: "High-Performance API" },
        { name: "HTML5", proficiency: "Semantic Markup" },
        { name: "CSS3", proficiency: "Styling & Responsive" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Jupyter Notebook", proficiency: "Exploration" },
        { name: "VS Code", proficiency: "Primary Environment" },
        { name: "Google Colab", proficiency: "GPU Workloads" },
        { name: "GitHub", proficiency: "Source Control" }
      ]
    }
  ] as SkillCategory[],
  timeline: [
    {
      type: "experience",
      role: "Data Analytics Trainee",
      organization: "Webskitters Academy",
      period: "Jun 2026 - Present",
      location: "India",
      bullets: [
        "Build interactive Excel dashboards with PivotTables, PivotCharts and slicers that turn raw business data into clear, KPI-driven insights.",
        "Engineered complex SQL queries to extract, clean, and transform over 11,000 records of raw operational data, ensuring high data integrity and significantly reducing manual preprocessing time."
      ]
    },
    {
      type: "achievement",
      role: "Certified Participant - Three Continent Program",
      organization: "Fairleigh Dickinson University, USA",
      period: "Mar - Jun 2025",
      location: "United States",
      bullets: [
        "Gained hands-on international exposure to Artificial Intelligence, collaborative engineering, and cross-border innovation paradigms."
      ]
    },
    {
      type: "experience",
      role: "Research Intern",
      organization: "Ulavi Technologies",
      period: "Jun 2025 - Aug 2025",
      location: "India",
      bullets: [
        "Researched AI-powered insights and data-driven decision-making approaches for enterprise business use cases.",
        "Analyzed patterns, trends and performance metrics; prepared comprehensive reports and visual summaries to support strategic executive decisions."
      ]
    },
    {
      type: "achievement",
      role: "Certified Participant - Three Continent Program",
      organization: "Birkbeck, University of London, UK",
      period: "Jan - Mar 2025",
      location: "United Kingdom",
      bullets: [
        "Explored global business technology and developed practical applications in AI across enterprise systems."
      ]
    },
    {
      type: "achievement",
      role: "Cyber Cup 2.0 - 24-Hour Hackathon",
      organization: "Amity School of Engineering and Technology (ASET)",
      period: "24-Hour Intensive",
      location: "Noida, India",
      bullets: [
        "Completed the intensive hackathon by architecting and building 'Lingua Display', a multilingual digital display platform."
      ]
    },
    {
      type: "certification",
      role: "Cloud Computing Certification",
      organization: "NPTEL",
      period: "Dec 2024",
      credential: "Dec 2024 Examination"
    },
    {
      type: "certification",
      role: "Python for Data Science",
      organization: "NPTEL",
      period: "Accredited",
      credential: "NPTEL National Certification"
    },
    {
      type: "certification",
      role: "Data Science Course",
      organization: "CodeWithHarry",
      period: "Sep 2026",
      credential: "Data Science Specialization"
    },
    {
      type: "education",
      role: "Bachelor of Technology (B.Tech)",
      organization: "Amity University Noida",
      period: "Sep 2022 - May 2026",
      location: "Noida, Uttar Pradesh",
      bullets: [
        "Major: Computer Science and Engineering",
        "Academic Performance: CGPA 8.5",
        "Focused coursework in databases, algorithms, data analysis, and machine learning."
      ]
    },
    {
      type: "education",
      role: "Higher Secondary (PCMB)",
      organization: "Ramakrishna Mission Vivekananda Vidyamandir",
      period: "May 2018 - Mar 2020",
      bullets: [
        "Physics, Chemistry, Mathematics, Biology (PCMB)",
        "Academic Performance: 89%"
      ]
    },
    {
      type: "education",
      role: "Matriculation",
      organization: "CM High School, Malda",
      period: "Mar 2018",
      bullets: [
        "West Bengal Board of Secondary Education (WBBSE)",
        "Academic Performance: 88%"
      ]
    }
  ] as TimelineItem[],
  principles: [
    {
      title: "100% Empirical Evidence",
      description: "Every finding, recommendation, and KPI must trace directly to verifiable distributions in raw data. Zero guesswork or ungrounded assumptions."
    },
    {
      title: "Clean Pipelines Before Complex Models",
      description: "Rigorous schema validation, data cleaning, and handling null anomalies yield higher business impact than fancy models applied to noisy data."
    },
    {
      title: "Actionable Business Metrics First",
      description: "Dashboards are decision engines, not vanity charts. Whether measuring AOV, lost-order rates, or toss impact, the focus is enabling decisive action."
    },
    {
      title: "Continuous Execution & Global Perspective",
      description: "From 24-hour hackathons to international exposure across three continents (India, UK, USA), high velocity and adaptability define my engineering ethos."
    }
  ]
};

