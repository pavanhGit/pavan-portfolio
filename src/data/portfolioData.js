// Centralized Data Architecture for Pavan H Portfolio & Personal Brand
// Easily update info here without modifying UI components.

export const personalInfo = {
  name: "Pavan H",
  title: "Java Backend Developer / Software Engineer",
  heroSubtitle: "Java | Spring Boot | Microservices | REST APIs | Kafka | Redis | MySQL | AWS | Docker",
  email: "officialpavanh@gmail.com",
  phone: "+91 9945270658",
  location: "Bengaluru, India",
  github: "https://github.com/pavanhGit",
  linkedin: "https://www.linkedin.com/in/pavan-h-808a1a19b",
  instagram: "https://www.instagram.com/pavan._.h/",
  resumeUrl: "/Pavan-H-Resume.pdf",
  bioHeadline: "Java backend engineer with 3.8 years of experience building enterprise-grade systems across e-commerce and banking domains.",
};

export const aboutData = {
  summary: `I am Pavan H, a Java Backend Developer with 3.8 years of experience building enterprise backend systems across e-commerce and banking domains. My work focuses on Java 8+, Spring Boot, Spring MVC, Hibernate/JPA, RESTful APIs, Kafka-driven integrations, Redis caching, and SQL performance tuning in production environments.`,
  journey: `My engineering journey began with building scalable backend capabilities for commerce and financial systems, where reliability, data integrity, and performance are critical. I have worked on product catalog microservices, banking module support, reconciliation workflows, and event-driven data propagation across internal services.`,
  architectureGoal: `I aim to continue growing as a backend and systems engineer by deepening my expertise in microservices architecture, cloud-native design, enterprise transaction workflows, and production troubleshooting in regulated business environments.`,
  coreValues: [
    {
      title: "Resilient Design",
      description: "Building fault-tolerant backend services with circuit breakers, graceful degradation, and robust idempotency.",
    },
    {
      title: "Performance First",
      description: "Optimizing database queries, caching strategies, and thread concurrency to achieve sub-50ms API response times.",
    },
    {
      title: "Clean Architecture",
      description: "Adhering to SOLID principles, domain-driven design, and maintainable layered architectures.",
    },
    {
      title: "Continuous Learning",
      description: "Deepening expertise in distributed systems, event-driven architecture, and modern cloud technologies.",
    },
  ],
};

export const skillsData = [
  {
    category: "Backend Core",
    icon: "Server",
    skills: [
      { name: "Java (17 / 21)", level: "Advanced", desc: "Core Java, Concurrency, Streams, JVM Memory Management" },
      { name: "Spring Boot", level: "Advanced", desc: "Auto-configuration, Spring Cloud, Actuator, Profiles" },
      { name: "Spring MVC & Security", level: "Advanced", desc: "REST Controller architecture, OAuth2, JWT, Filter Chains" },
      { name: "JPA / Hibernate", level: "Advanced", desc: "Entity mapping, Lazy loading optimization, N+1 query solving" },
      { name: "RESTful APIs", level: "Advanced", desc: "API Design, Versioning, Swagger/OpenAPI documentation" },
    ],
  },
  {
    category: "Databases & Caching",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", desc: "Indexing strategies, Query optimization, JSONB support" },
      { name: "MySQL", level: "Advanced", desc: "Transactions, Isolation levels, Schema design" },
      { name: "Redis", level: "Intermediate", desc: "Distributed caching, Pub/Sub, Rate limiting, Session stores" },
      { name: "MongoDB", level: "Intermediate", desc: "Document modeling, Aggregation frameworks, Indexing" },
    ],
  },
  {
    category: "Distributed Systems & Messaging",
    icon: "Cpu",
    skills: [
      { name: "Apache Kafka", level: "Intermediate", desc: "Producers, Consumers, Consumer groups, Topic partitioning" },
      { name: "Microservices Architecture", level: "Advanced", desc: "Service discovery, API Gateways, Distributed tracing" },
      { name: "Event-Driven Design", level: "Intermediate", desc: "Asynchronous processing, Event sourcing concepts" },
    ],
  },
  {
    category: "Cloud, DevOps & Build Tools",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "Intermediate", desc: "EC2, S3, RDS, Lambda, IAM basics" },
      { name: "Docker", level: "Intermediate", desc: "Multi-stage builds, Containerization, Docker Compose" },
      { name: "Jenkins & CI/CD", level: "Intermediate", desc: "Automated test & build pipelines, Deployment automation" },
      { name: "Maven & Git", level: "Advanced", desc: "Dependency management, Gitflow workflow, Versioning" },
    ],
  },
  {
    category: "Testing & Monitoring",
    icon: "CheckCircle",
    skills: [
      { name: "JUnit 5 & Mockito", level: "Advanced", desc: "Unit testing, Integration testing, Mocking dependencies" },
      { name: "Swagger / OpenAPI", level: "Advanced", desc: "Interactive API documentation & schema definition" },
      { name: "Postman", level: "Advanced", desc: "API testing collections, Environment variables, Automation" },
    ],
  },
];

export const experienceData = [
  {
    organization: "Tata Consultancy Services (TCS BaNCS)",
    role: "Product Engineer",
    period: "May 2024 - Present",
    location: "Bengaluru, India",
    type: "Full-Time",
    summary: "Developing and maintaining legacy Java modules on the TCS BaNCS core banking platform, including account management and transaction processing workflows in a regulated enterprise environment.",
    achievements: [
      "Develop and maintain Java modules for banking account lifecycle and transaction processing operations within TCS BaNCS core systems.",
      "Analyze business requirements and implement backend enhancements for regulated banking product features while ensuring compliance-ready behavior.",
      "Write and optimize SQL queries for reconciliation, reporting, and batch processing on banking databases to improve financial data-processing efficiency by ~25%.",
      "Participate in code reviews, unit testing, defect resolution, UAT support, and release-readiness validation in alignment with TCS delivery methodology.",
      "Collaborate with business analysts, QA, and frontend teams to clarify requirements, triage defects, and support integration readiness.",
    ],
    techStack: ["Java", "Spring MVC", "SQL", "TCS BaNCS", "Hibernate/JPA", "Jenkins", "Docker", "Git"],
  },
  {
    organization: "TapQwik Software Private Limited",
    role: "Software Engineer",
    period: "Jan 2023 - May 2024",
    location: "Bengaluru, India",
    type: "Full-Time",
    summary: "Built Java Spring Boot microservices for Samsung E-Commerce Catalog platform, managing product data, categories, media assets, search, and catalog synchronization across downstream services.",
    achievements: [
      "Developed REST APIs for catalog search, product detail retrieval, bulk product import, pagination, and filtering backed by MySQL and Redis caching.",
      "Integrated Apache Kafka event streams to propagate catalog updates to search and pricing microservices, reducing update propagation time by ~25%.",
      "Implemented validation logic, error handling, and API documentation for catalog service consumers to improve downstream integration reliability.",
      "Contributed to Docker containerization and Jenkins CI/CD setup to automate AWS deployment workflows for catalog services.",
      "Supported production troubleshooting for catalog sync problems, API performance bottlenecks, and data-quality discrepancies in live environments.",
    ],
    techStack: ["Java 8+", "Spring Boot", "Spring Data JPA", "MySQL", "Redis", "Apache Kafka", "AWS", "Docker", "Jenkins"],
  },
];

export const projectsData = [
  {
    id: "tcs-bancs-banking-modules",
    title: "TCS BaNCS Banking Modules",
    category: "FinTech & Systems",
    description: "Core banking backend support for account management, transaction processing, reconciliation, reporting, and operational data workflows within TCS BaNCS environments.",
    problem: "Banking modules require reliable account lifecycle updates, strict transaction validation, and efficient financial reporting under controlled compliance workflows.",
    solution: "Enhanced Java modules for transaction processing and reconciliation while optimizing SQL routines, validating financial data flows, and supporting production issue analysis using logs and database diagnostics.",
    keyChallenges: [
      "Supporting complex account and transaction processing workflows in a regulated system.",
      "Improving reconciliation and reporting performance through SQL optimization and validation routines.",
    ],
    techStack: ["Java", "SQL", "TCS BaNCS", "Legacy Integration", "Reporting", "Reconciliation"],
    githubUrl: "",
    liveDemoUrl: "",
    featured: true,
  },
  {
    id: "samsung-ecommerce-catalog-system",
    title: "Samsung E-Commerce Catalog System",
    category: "Microservices / FinTech",
    description: "Backend platform for Samsung's digital commerce catalog, managing product onboarding, category data, SKU information, product variants, search, pricing, and catalog synchronization across services.",
    problem: "Catalog updates needed to flow quickly and consistently across search and pricing systems without causing expensive database or API slowdowns.",
    solution: "Built Spring Boot microservices with REST APIs, Kafka-based asynchronous updates, MySQL-driven catalog ingestion, Redis caching, and query optimizations to keep product data responsive and synchronized.",
    keyChallenges: [
      "Handling bulk catalog ingestion and validation without data inconsistency.",
      "Reducing catalog read latency and update propagation delay under high-volume operations.",
    ],
    techStack: ["Java", "Spring Boot", "Kafka", "Redis", "MySQL", "AWS", "Docker", "Jenkins"],
    githubUrl: "",
    liveDemoUrl: "",
    featured: true,
  },
  {
    id: "catalog-api-microservice",
    title: "Catalog API & Search Microservice",
    category: "Distributed Systems",
    description: "A microservice layer for catalog search, product detail retrieval, category servicing, filtering, and bulk import workflows across Samsung commerce data assets.",
    problem: "Catalog consumers needed reliable product data access even during peak demand and large bulk updates.",
    solution: "Implemented optimized REST endpoints, Redis-based read acceleration, and validation workflows to support efficient product and category retrieval at scale.",
    keyChallenges: [
      "Balancing bulk product ingestion with low-latency read operations.",
      "Ensuring consistent API behavior during catalog updates and data-quality checks.",
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "REST APIs", "JPA", "Swagger"],
    githubUrl: "",
    liveDemoUrl: "",
    featured: false,
  },
  {
    id: "catalog-event-sync",
    title: "Event-Driven Catalog Sync Pipeline",
    category: "Distributed Systems",
    description: "Kafka-integrated synchronization pipeline that pushes catalog change events downstream to search and pricing services for near-real-time updates.",
    problem: "Catalog changes across product and pricing data were not propagating fast enough to consumers requiring near-real-time search freshness.",
    solution: "Used asynchronous Kafka producers and consumers to decouple catalog updates from downstream processing and reduce propagation delays while preserving consistency.",
    keyChallenges: [
      "Ensuring event-driven updates reach dependent services reliably.",
      "Minimizing propagation lag without introducing data duplication or drift.",
    ],
    techStack: ["Java", "Spring Boot", "Apache Kafka", "Event-Driven Architecture", "MySQL", "Redis"],
    githubUrl: "",
    liveDemoUrl: "",
    featured: false,
  },
];

export const testimonialsData = [
  {
    id: "testimonial-1",
    name: "Engineering Lead",
    role: "Senior Engineering Manager",
    organization: "Enterprise Tech Solutions",
    content: "Pavan has an exceptional grasp of backend performance and Java microservices. His work on optimizing our database queries and caching reduced API latency significantly. He builds systems designed for longevity.",
    linkedIn: "https://www.linkedin.com/in/pavan-h-808a1a19b",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechLead",
    isPlaceholder: true,
  },
  {
    id: "testimonial-2",
    name: "Senior Architect",
    role: "Principal Solutions Architect",
    organization: "Innovate Software Labs",
    content: "Pavan stands out for his disciplined approach to clean code, SOLID principles, and system reliability. When faced with complex concurrency issues, he dives deep into the underlying mechanics until it is cleanly solved.",
    linkedIn: "https://www.linkedin.com/in/pavan-h-808a1a19b",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Architect",
    isPlaceholder: true,
  },
];

export const adventuresData = {
  tagline: "Software engineer by code. Adventurer by curiosity.",
  subtext: "Exploring limits outside the terminal. From long-distance endurance cycling to high-altitude mountain trails.",
  stats: [
    { value: "500+ KM", label: "Cycling Expedition", detail: "Long-distance endurance ride" },
    { value: "10 KM", label: "Endurance Run", detail: "Paced road milestone" },
    { value: "4,200M", label: "Highest Trek Altitude", detail: "Himalayan ridge expedition" },
    { value: "∞", label: "Crazy Ideas Loading", detail: "Next milestone in progress" },
  ],
  stories: [
    {
      id: "cycling-500km",
      title: "500KM Endurance Cycling Expedition",
      category: "Cycling",
      date: "2024",
      highlight: "Pushed through 14 hours of continuous pedaling, steep climbs, and unpredictable weather.",
      description: "Covered 500+ kilometers over demanding terrains. Testing physical endurance taught me the exact same discipline required in long-term engineering problems: pace yourself, monitor metrics, and keep grinding.",
      statsTag: "500 KM / 14 Hours",
    },
    {
      id: "running-10k",
      title: "10K Endurance Milestone",
      category: "Running",
      date: "2023",
      highlight: "Completed sub-50 minute 10K road race.",
      description: "Running is pure mental clarity. Training for speed and breath control builds the focus needed to debug complex race conditions late at night.",
      statsTag: "10 KM / 49 Mins",
    },
    {
      id: "mountain-trek",
      title: "4,200m High Altitude Mountain Ridge Trek",
      category: "Trekking",
      date: "2023",
      highlight: "Navigated freezing ridge trails with minimal oxygen.",
      description: "Reaching 4,200 meters altitude reminded me how vast the world is beyond code editors. Respect the trail, prepare for edge cases, and enjoy the summit view.",
      statsTag: "4,200 Meters Elevation",
    },
  ],
  bucketList: [
    { task: "Cycle 500+ Kilometers in a single expedition", status: "completed", year: "2024" },
    { task: "Complete a 10K Endurance Run sub-50m", status: "completed", year: "2023" },
    { task: "Reach 4,000m+ Mountain Altitude Peak", status: "completed", year: "2023" },
    { task: "Complete a Full 42.2KM Marathon", status: "in-progress", year: "Target 2025" },
    { task: "Cycle Coast-to-Coast across Southern India", status: "planned", year: "Upcoming" },
    { task: "Build & Open-Source a High-Performance Distributed Java Cache", status: "in-progress", year: "Active" },
  ],
};
