// Centralized Data Architecture for Pavan H Portfolio & Personal Brand

export const personalInfo = {
  name: "Pavan",
  fullName: "Pavan H",
  heroHeading: "Hi, I am pavan",
  heroSubtitle: "Java Backend Developer building enterprise-grade banking systems.",
  heroParagraph: "I work on enterprise banking applications, solving backend issues and implementing changes across Java services, APIs, and databases. I'm focused on building reliable, secure, and maintainable backend systems.",
  title: "Java Backend Developer / Software Engineer",
  email: "officialpavanh@gmail.com",
  phone: "+91 9945270658",
  location: "Bengaluru, India",
  github: "https://github.com/pavanhGit",
  linkedin: "https://www.linkedin.com/in/pavan-h-808a1a19b",
  instagram: "https://www.instagram.com/pavan._.h/",
  resumeUrl: "/Pavan-H-Resume.pdf",
};

export const aboutData = {
  paragraphs: [
    "I'm a Java Backend Developer with 4 years of experience working on enterprise banking applications at TCS. My work focuses on resolving application issues, developing features based on business requirements, and maintaining reliable systems that support day-to-day banking operations.",
    "Over the course of my work, I've resolved 100+ application defects, handled 10+ urgent production issues, and contributed to migrating two banks from older Java versions to Java 17. I also collaborate with frontend and deployment teams to ensure changes integrate correctly and work as expected across the application.",
    "I enjoy breaking complex problems into smaller, manageable pieces. Whether I'm debugging an issue, translating a user story into code, or investigating a production problem, I focus on understanding the root cause and finding a simple, effective solution. I also explore AI tools to improve development speed and code quality without compromising the quality of the outcome.",
    "I'm continuously expanding my backend engineering skills and exploring AI technologies, with the goal of building reliable, maintainable software as part of a strong product engineering team.",
    "Beyond coding, I enjoy running, calisthenics, and animal flow—activities that challenge me to stay disciplined, keep learning, and push my limits."
  ],
  stats: [
    { value: "4 Years", label: "Enterprise Experience", detail: "Banking & E-Commerce" },
    { value: "100+", label: "Defects Resolved", detail: "Production & UAT" },
    { value: "10+", label: "Urgent P1 Issues Solved", detail: "Mission-critical banking" },
    { value: "Java 17", label: "Bank Migrations", detail: "2 Core Banking Systems" },
  ]
};

export const skillsList = [
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Spring Data JPA / Hibernate", category: "Backend" },
  { name: "Microservices Architecture", category: "Architecture" },
  { name: "RESTful Web Services", category: "Backend" },
  { name: "MySQL & SQL", category: "Database" },
  { name: "Apache Kafka", category: "Messaging" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS (EC2, S3, RDS)", category: "Cloud" },
  { name: "JUnit & Mockito", category: "Testing" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Maven", category: "Tools" },
  { name: "REST API Design & Integration", category: "Backend" },
  { name: "Design Patterns & SOLID Principles", category: "Architecture" },
  { name: "Agile / Scrum", category: "Practices" },
  { name: "Jenkins & CI/CD Pipelines", category: "DevOps" },
  { name: "Redis", category: "Database" },
  { name: "Linux", category: "DevOps" },
  { name: "Postman & OpenAPI", category: "Tools" },
  { name: "SonarQube", category: "Testing" },
  { name: "JIRA & Confluence", category: "Tools" },
];

export const workExperienceData = [
  {
    id: "tcs-bancs",
    company: "Tata Consultancy Services (TCS)",
    title: "TCS BaNCS — Banking Backend Modernization",
    role: "Java Backend Developer / Product Engineer",
    domain: "Enterprise Banking Applications",
    period: "2024 - Present",
    location: "Bengaluru, India",
    overview: "Modernized a legacy Java banking backend using the Spring Framework, while developing features, resolving production issues, and supporting critical banking operations.",
    technologies: ["Java", "Spring Framework", "SQL", "Oracle", "DB2", "TCS BaNCS", "Git", "Maven"],
    contributions: [
      "Migrated legacy backend components to Spring-managed components with dependency injection.",
      "Resolved 100+ defects and 10+ urgent production issues.",
      "Contributed to Java 17 migrations across two banking environments.",
      "Maintained reliable systems supporting daily banking transactions, account lifecycle processing, and reconciliation."
    ],
    featured: true,
  },
  {
    id: "samsung-ecommerce",
    company: "Samsung E-Commerce Platform",
    title: "Samsung E-Commerce Catalog System",
    role: "Backend Development | E-Commerce Platform",
    domain: "Distributed Microservices & E-Commerce",
    period: "2022 - 2024",
    location: "Bengaluru, India",
    overview: "Worked on a backend platform supporting product catalog management, SKU variants, and product data synchronization across e-commerce services.",
    technologies: ["Java", "Spring Boot", "Microservices", "Apache Kafka", "Redis", "MySQL", "Docker", "Jenkins", "AWS"],
    contributions: [
      "Developed backend services using Java and Spring Boot for product catalog operations.",
      "Integrated Apache Kafka for asynchronous catalog updates across services.",
      "Improved API performance through Redis caching and database query optimization.",
      "Supported bulk product data ingestion and validation workflows.",
      "Worked with Docker, Jenkins, and AWS for application deployment."
    ],
    featured: true,
  },
];

export const testimonialsData = [
  {
    id: "testimonial-1",
    name: "Engineering Lead",
    role: "Technical Lead",
    organization: "Enterprise Banking Operations",
    content: "Pavan's root cause analysis during critical production incidents and banking migrations was outstanding. He has deep Java backend discipline and communicates effectively across teams.",
    linkedIn: "https://www.linkedin.com/in/pavan-h-808a1a19b",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PavanLead",
  },
  {
    id: "testimonial-2",
    name: "Senior Architect",
    role: "Principal Solutions Architect",
    organization: "E-Commerce Systems",
    content: "Pavan demonstrated exceptional ownership building the catalog microservices with Spring Boot and Kafka. His query tuning and Redis caching drastically elevated system throughput.",
    linkedIn: "https://www.linkedin.com/in/pavan-h-808a1a19b",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PavanArch",
  },
];
