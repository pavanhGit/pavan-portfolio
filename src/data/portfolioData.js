// Centralized Data Architecture for Pavan H Portfolio & Personal Brand
// Easily update info here without modifying UI components.

export const personalInfo = {
  name: "Pavan H",
  title: "Java Backend Developer / Software Engineer",
  heroSubtitle: "Specializing in Resilient Microservices, High-Throughput REST APIs & Cloud Architecture",
  email: "officialpavanh@gmail.com",
  phone: "+91 9945270658",
  location: "India",
  github: "https://github.com/pavanhGit",
  linkedin: "https://www.linkedin.com/in/pavan-h-808a1a19b",
  instagram: "https://www.instagram.com/pavan._.h/",
  resumeUrl: "#resume",
  bioHeadline: "Building robust, scalable backend systems with precision engineering and clean architecture.",
};

export const aboutData = {
  summary: `I am Pavan H, a dedicated Java Backend Developer and Software Engineer with a deep passion for designing high-performance distributed systems, resilient microservices, and clean RESTful APIs. My engineering philosophy revolves around writing maintainable, well-tested code that scales reliably under heavy workloads.`,
  journey: `My journey into software engineering started with a fascination for how large-scale enterprise systems handle millions of requests seamlessly behind the scenes. Over the years, I have specialized in the Java ecosystem—mastering Spring Boot, JPA/Hibernate, relational & NoSQL databases, and asynchronous messaging architectures like Kafka.`,
  architectureGoal: `My long-term ambition is to become a distinguished Software Architect, shaping cloud-native backend infrastructure, enforcing domain-driven design, and solving complex concurrency and performance challenges at enterprise scale.`,
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
    organization: "Enterprise Tech Solutions",
    role: "Java Backend Engineer",
    period: "2023 - Present",
    location: "India",
    type: "Full-Time",
    summary: "Architecting and maintaining high-throughput microservices using Spring Boot, PostgreSQL, Redis, and Apache Kafka.",
    achievements: [
      "Engineered a high-concurrency payment processing service handling 3,000+ requests/sec with 99.99% uptime.",
      "Optimized PostgreSQL database queries and indexing, cutting peak API response latency by 42%.",
      "Implemented a distributed Redis caching layer reducing database read load by 60%.",
      "Designed event-driven notifications using Apache Kafka consumer groups for decoupled messaging.",
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Kafka", "Docker", "AWS"],
  },
  {
    organization: "Innovate Software Labs",
    role: "Software Engineer — Java Backend",
    period: "2021 - 2023",
    location: "India",
    type: "Full-Time",
    summary: "Developed RESTful APIs and backend microservices for enterprise web applications.",
    achievements: [
      "Built stateless REST APIs secured with JWT and Spring Security filter chains.",
      "Integrated JPA/Hibernate layer with multi-tenant database isolation.",
      "Achieved 85%+ unit test coverage across core modules using JUnit 5 and Mockito.",
      "Containerized microservices using Docker and automated deployments with Jenkins pipelines.",
    ],
    techStack: ["Java 11", "Spring Boot", "MySQL", "Hibernate", "REST APIs", "JUnit", "Jenkins", "Git"],
  },
];

export const projectsData = [
  {
    id: "payment-gateway-api",
    title: "Resilient Payment Processing Gateway API",
    category: "Microservices / FinTech",
    description: "A high-concurrency Spring Boot microservice handling payment transactions with idempotency key enforcement and Redis rate-limiting.",
    problem: "Financial APIs face double-charge risks during network retries and sudden traffic surges.",
    solution: "Implemented Redis-backed idempotency filters, distributed locks, and Kafka dead-letter queues to safely handle concurrent payment requests.",
    keyChallenges: [
      "Preventing race conditions during simultaneous payment submissions.",
      "Maintaining sub-80ms transaction response time under heavy load.",
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Security", "Redis", "Kafka", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/pavan-h/payment-gateway-service",
    liveDemoUrl: "",
    featured: true,
  },
  {
    id: "order-inventory-engine",
    title: "Event-Driven E-Commerce Inventory Engine",
    category: "Distributed Systems",
    description: "Asynchronous order processing system utilizing Apache Kafka and Spring Data JPA to maintain inventory consistency during high-volume sales.",
    problem: "Monolithic order systems suffer from inventory locking bottlenecks during high-demand product launches.",
    solution: "Decoupled order placement from inventory deduction using Kafka topic partitioning and optimistic locking on stock records.",
    keyChallenges: [
      "Guaranteeing exactly-once event processing across multiple consumer instances.",
      "Resolving out-of-order inventory update events gracefully.",
    ],
    techStack: ["Java 21", "Spring Boot", "Apache Kafka", "PostgreSQL", "Hibernate", "JUnit 5"],
    githubUrl: "https://github.com/pavan-h/event-driven-inventory",
    liveDemoUrl: "",
    featured: true,
  },
  {
    id: "oauth2-auth-server",
    title: "Centralized Enterprise OAuth2 & JWT Auth Gateway",
    category: "Security & Auth",
    description: "Production-ready authentication server implementing Spring Security OAuth2, JWT token rotation, and Redis token blacklist revocation.",
    problem: "Microservices architecture lacked unified identity verification and stateless role-based access control.",
    solution: "Designed a centralized authentication gateway issuing signed RSA JWTs with granular scope management and Redis instant token revocation.",
    keyChallenges: [
      "Implementing instant token revocation in stateless JWT architectures.",
      "Ensuring zero performance overhead on API gateway authorization checks.",
    ],
    techStack: ["Java 17", "Spring Security", "OAuth2", "Redis", "Docker", "Swagger / OpenAPI"],
    githubUrl: "https://github.com/pavan-h/oauth2-auth-gateway",
    liveDemoUrl: "",
    featured: true,
  },
  {
    id: "banking-ledger-service",
    title: "ACID-Compliant Double-Entry Banking Ledger",
    category: "FinTech & Systems",
    description: "Financial ledger transaction engine providing strict double-entry accounting integrity and immutable audit logs.",
    problem: "Traditional ledger update operations risk balance discrepancies if single-entry transactions fail mid-execution.",
    solution: "Enforced strict double-entry ledger debit/credit balances within transactional database boundaries and automated balance auditing.",
    keyChallenges: [
      "Enforcing strict transactional isolation without locking the database tables indefinitely.",
      "Auditing historical balance integrity dynamically.",
    ],
    techStack: ["Java 17", "Spring Boot", "PostgreSQL", "Flyway", "Mockito", "Postman"],
    githubUrl: "https://github.com/pavan-h/banking-ledger-engine",
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
