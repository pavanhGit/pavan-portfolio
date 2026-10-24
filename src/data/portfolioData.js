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

export const skillsData = [
  {
    category: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Core Java & Java 8+", level: "Production", desc: "OOP, Concurrency, Multithreading, Streams API, Collections, JVM Memory" },
      { name: "Spring Boot", level: "Production", desc: "Microservices, Auto-configuration, Actuator, Profiles, Application properties" },
      { name: "Spring MVC & RESTful APIs", level: "Production", desc: "REST Controller design, Request mapping, Exception handling, Interceptors" },
      { name: "Spring Data JPA & Hibernate", level: "Production", desc: "Entity mappings, Criteria queries, Transaction management, Lazy loading" },
    ],
  },
  {
    category: "Banking & Enterprise",
    icon: "ShieldCheck",
    skills: [
      { name: "TCS BaNCS", level: "Specialized", desc: "Core banking platform architecture, modules configuration & enterprise integration" },
      { name: "Account & Transaction Processing", level: "Specialized", desc: "Account lifecycle, debit/credit processing, ledger validation, financial integrity" },
      { name: "Financial Reconciliation & Batch", level: "Production", desc: "End-of-day batch processing, transaction reconciliation, reporting workflows" },
      { name: "Production Support & Troubleshooting", level: "Production", desc: "Root cause analysis (RCA), log diagnostics (Log4j/Logback), defect triage" },
    ],
  },
  {
    category: "Messaging & Event Processing",
    icon: "Cpu",
    skills: [
      { name: "Apache Kafka", level: "Production", desc: "Producers, Consumers, Event streams, Consumer groups, Topic partitioning" },
      { name: "Event-Driven Architecture", level: "Production", desc: "Asynchronous processing, Inter-service decoupled communication" },
      { name: "Redis Caching", level: "Production", desc: "In-memory caching, low-latency API acceleration, session management" },
    ],
  },
  {
    category: "Database & Data Processing",
    icon: "Database",
    skills: [
      { name: "SQL & Query Optimization", level: "Production", desc: "Complex joins, Execution plan analysis, Performance tuning, Subqueries" },
      { name: "Database Indexing & JDBC", level: "Production", desc: "B-Tree indexes, Composite indexing, Connection pooling, PreparedStatements" },
      { name: "MySQL, Oracle & DB2", level: "Production", desc: "Enterprise relational database schemas, ACID compliance, Transactions" },
    ],
  },
  {
    category: "Cloud, DevOps & Linux",
    icon: "Cloud",
    skills: [
      { name: "AWS Cloud (EC2, S3, RDS)", level: "Practical", desc: "Virtual instances, cloud storage, managed relational database services" },
      { name: "Docker Containerization", level: "Production", desc: "Dockerfiles, Image builds, Containerized microservice deployments" },
      { name: "Jenkins & CI/CD Pipelines", level: "Production", desc: "Automated build, test verification, and deployment pipelines" },
      { name: "Linux & Build Tools", level: "Production", desc: "Shell navigation, Bash scripting, Maven, Git, GitHub workflow" },
    ],
  },
  {
    category: "API, Testing & Practices",
    icon: "CheckCircle",
    skills: [
      { name: "REST API Integration & OpenAPI", level: "Production", desc: "Swagger, OpenAPI spec, Postman, JSON/XML contract handling" },
      { name: "JUnit & Mockito", level: "Production", desc: "Automated unit testing, mock injection, regression suites, SonarQube quality" },
      { name: "Agile & Software Engineering", level: "Production", desc: "Scrum, Sprint planning, SOLID principles, Design patterns, JIRA" },
    ],
  },
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
