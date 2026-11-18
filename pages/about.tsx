import styles from '@/styles/AboutPage.module.css';
import { FaBriefcase, FaUniversity, FaAward, FaLaptopCode, FaCertificate } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; 

const awardsData = [
  {
    title: 'Key System Development & Deployment Impact',
    source: 'Deloitte',
    description: 'Independently designed and deployed 3 new systems, which are now utilized by over 15 departments across the organization, significantly boosting team efficiency.',
  },
  {
    title: 'Open Source Contribution & Community Impact',
    source: 'Smart Joules Pvt. Ltd.',
    description: 'Developed an open-source NPM module for multi-select autocomplete, fostering code reusability and best practices, leading to a 40% increase in community contributions.',
  },
  {
    title: 'Winner - CuseHack 2025',
    source: 'CuseHack / Syracuse University',
    description: 'CodeNova - AI-Powered Coding Interview Platform. Won Best Use of AI award at Anthropic-sponsored hackathon. Built an intelligent coding practice platform with 50+ algorithm challenges, real-time code execution, and AI avatar tutoring.',
  },
  {
    title: 'Winner - Hackathon 1.0',
    source: 'State Level University - DIT University',
    description: 'Project: Helping Hands - Connecting NGOs and food beneficiaries for food donation.',
  },
  {
    title: 'Applause Award (3 consecutive times)',
    source: 'Deloitte',
    description: 'Recognized as Senior Software Engineer for Team Leadership, Project Ownership, and solving complex dashboard algorithms.',
  },
  {
    title: 'Consistent Problem Solver',
    source: 'Syracuse University',
    description: 'Solved LeetCode problems consecutively for 6 months.',
  }
];

const skillsCodeString = `const bhupesh = {
  pronouns: "He" | "Him",
  code: ["Python", "TypeScript", "JavaScript", "Node.js", "SQL"],
  askMeAbout: ["backend", "distributed systems", "AI agents", "real-time systems"],
  technologies: {
    backEnd: {
      python: ["FastAPI", "Flask"],
      js: ["Node", "Express", "NestJS"],
      apis: ["REST", "GraphQL", "WebSockets"],
    },
    distributedSystems: [
      "concurrency", "idempotency", "distributed locking", "ACID transactions",
      "optimistic concurrency", "backpressure", "rate limiting",
      "circuit breakers", "retries", "dead-letter queues",
    ],
    databases: ["PostgreSQL", "Redis", "MongoDB", "pgvector"],
    messaging: ["Kafka", "GCP Pub/Sub", "WebSockets"],
    cloudServices: {
      aws: ["EC2", "S3", "Lambda", "RDS"],
      gcp: ["Cloud Run", "Pub/Sub"],
    },
    devOps: ["Docker", "CloudFormation", "Serverless Framework", "blue-green CI/CD", "GitHub Actions"],
    monitoring: ["Datadog", "Prometheus", "Grafana", "Splunk"],
    generativeAI: ["Claude", "OpenAI API", "Gemini", "AI agents", "tool calling", "RAG", "evals", "guardrails"],
    aiDevTools: ["Claude Code", "Cursor", "GitHub Copilot"],
    frontEnd: ["React", "Next.js"],
  },
  practices: ["Agile", "Test Driven Development", "code and design review"],
  currentFocus: "Backend and distributed systems, with AI as a core part of how I build.",
  funFact: "Balancing code, coffee, and the NYC subway-debugging while the city never sleeps!"
};`;

const experienceData = [
    {
        company: 'Osyte Inc.',
        title: 'Senior Software Engineer',
        dates: 'May 2025 – Present',
        location: 'Remote',
        tech: 'Python, Node.js, TypeScript, PostgreSQL, Redis, Docker, AWS, GCP',
        duties: [
        'Built the core services of the company\'s backend platform, designing Python (FastAPI) and Node.js microservices with typed REST APIs over PostgreSQL and Redis, and owning them from design to production.',
        'Kept services correct under concurrent load by making every handler idempotent, guarding shared state with distributed locks, pooling connections and applying backpressure on third-party calls.',
        'Made failures recoverable instead of silent with retries, rate limiting and dead-letter queues on the asynchronous message queues, so no customer data was lost when a downstream dependency went down.',
        'Built the cloud infrastructure automation for the platform on AWS and GCP: reusable GitHub Actions workflows that build Docker images, validate every change and roll it out to Cloud Run and AWS.',
        'Owned live-site health for the platform by adding structured logging, request tracing, dashboards and alerts, and taking on-call for incidents and root-cause analysis with the support team.',
        'Designed systems where AI agents work inside human workflows, using tool calling, structured outputs and retrieval over domain documents, with safety gates and review checkpoints before any action.',
        'Made AI output reliable enough for production by writing structured prompts, keeping the system designs, constraints and standards in a shared context repository, and grading changes with evals.',
        'Used AI as a core part of the development workflow with Claude Code and Cursor, and reviewed all generated code for correctness, security and performance before it merged.',
        'Set the team\'s engineering standards for code review, Test Driven Development and Agile delivery, and balanced new features against live-site work and paying down technical debt.',
        ],
    },
    {
        company: 'Deloitte (Client: PayPal)',
        title: 'Senior Software Engineer',
        dates: 'Feb 2021 – Jan 2024',
        location: 'Bengaluru, India',
        tech: 'Python, Node.js, TypeScript, PostgreSQL, Kafka, AWS',
        duties: [
        'Owned and operated multiple instances of a critical backend service in Python and Node.js on PayPal\'s payments platform, a large-scale distributed system running across multiple data centers.',
        'Kept the system highly available when dependencies failed by placing resilient abstraction layers over legacy systems, with idempotency keys, circuit breakers, retries and caching.',
        'Handled concurrency safely across services by guarding shared state with locks and idempotency keys, and moving contended database writes to optimistic concurrency.',
        'Built event-driven pipelines on Kafka with partitioned topics, consumer groups and idempotent consumers, so services stayed decoupled and a retry or replay never processed a payment event twice.',
        'Solved data management problems on PostgreSQL by removing N+1 queries, adding targeted indexes and wrapping every money movement in an ACID transaction.',
        'Automated infrastructure and releases on AWS with Infrastructure-as-Code in CloudFormation and blue-green CI/CD pipelines, so every build and deployment ran without manual steps.',
        'Served on the team\'s on-call rotation, resolving production incidents in real time by tracing failures through logs and dashboards in Splunk and Grafana, then fixing the root cause.',
        'Passed security and compliance reviews by building audit trails, access controls and careful data handling into the services from the start rather than retrofitting them.',
        'Led design reviews and mentored engineers across a distributed Agile team; received Deloitte\'s Applause Award in consecutive years.',
        ],
    },
    {
        company: 'TO THE NEW',
        title: 'Full Stack Engineer',
        dates: 'Feb 2020 – Feb 2021',
        location: 'Noida, India',
        tech: 'Python, Node.js, TypeScript, WebSockets, PostgreSQL',
        duties: [
        'Delivered backend features end to end for a PwC enterprise platform, building Node.js and Python services and working inside the client\'s Agile teams.',
        'Fixed the platform\'s top production crashes with no data loss by tracing logs back to race conditions and unhandled edge cases, and writing a failing test for each one before the fix, test-driven.',
        'Built a real-time WebSocket pipeline for live updates and cut redundant round-trips to the database by batching queries in the data layer.',
        ],
    },
    {
        company: 'JuZtEvent',
        title: 'Full Stack Developer',
        dates: 'Dec 2019 – Feb 2020',
        location: 'India',
        tech: 'Angular, Node.js, Redis, WebSockets, SignalR, Azure',
        duties: [
        'Built a high-concurrency transactional platform where race conditions cost real money — directly analogous to order execution systems.',
        'Engineered distributed seat-locking with Redis short-lived holds across Azure VMs/scale sets — reduced double-booking collisions to <0.1% during peak sales windows.',
        'Designed idempotent reservation APIs with optimistic concurrency (request tokens/ETags) — eliminated duplicate submissions from unreliable networks, guaranteeing exactly-once semantics.',
        'Delivered real-time seat availability to Angular clients via WebSockets/SignalR — sub-1s synchronization under high-concurrency load.',
        ],
    },
    {
        company: 'Smart Joules Pvt. Ltd.',
        title: 'Software Engineer',
        dates: 'Sep 2018 – Dec 2019',
        location: 'New Delhi, India',
        tech: 'Node.js, Python, PostgreSQL, REST APIs, IoT',
        duties: [
        'Built real-time data pipelines in Node.js and Python that ingested live IoT sensor streams into a PostgreSQL schema designed from scratch, feeding monitoring dashboards for building operators.',
        'Designed configurable, role-filtered REST APIs so each customer saw only their own data, and onboarded the first client sites directly.',
        'Contributed to open source by publishing an NPM module extracted from the platform\'s shared code.',
        ],
    },
];

const certificationsData = [
  {
    title: 'Artificial Intelligence Analyst 2019',
    issuer: 'IBM',
    credentialId: '9354-1556-4551-8848',
  },
  {
    title: 'IBM Certified Application Developer - Cloud Platform v2',
    issuer: 'IBM',
    credentialId: '2377-1556-4560-3169',
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bhupesh Chikara</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          {/* Introduction Section */}
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hi! I&apos;m Bhupesh Chikara, a backend and distributed systems engineer with a
              Master of Science in Computer Science from <span className={styles.highlight}>Syracuse University</span> (Dec 2025). I design, build
              and operate services in Python, Node.js and TypeScript on AWS and GCP.
            </p>
            <p className={styles.paragraph}>
              I work on the problems that decide whether a large system stays up: concurrency, idempotency, distributed locking, backpressure, retries and circuit breakers, and data management on PostgreSQL, Redis and Kafka. I built and operated services on PayPal&apos;s payments platform at Deloitte, and now build the backend platform at Osyte. AI is a core part of how I work: I use Claude Code and Cursor daily and review every change, human or AI-generated, for correctness, security and performance.
            </p>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}><FaLaptopCode /> Tech Stack & Skills</h2>
            <div className={styles.skillsCodeSnippet}>
                <SyntaxHighlighter
                  language="javascript"
                  style={oneDark}
                  showLineNumbers
                  wrapLines={true}            
                  // wrapLongLines={true}        
                  lineNumberStyle={{
                    fontSize: '0.8em',
                    paddingRight: '1.5em',
                    color: 'var(--text-secondary, #888)'
                  }}
                  customStyle={{
                    borderRadius: '8px',
                    border: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
                    padding: '1.5em',
                    margin: '0.5em 0',
                    whiteSpace: 'pre-wrap',      
                    wordBreak: 'break-word'      
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'var(--font-mono, "Fira Code", "Source Code Pro", monospace)',
                      whiteSpace: 'pre-wrap',    
                      wordBreak: 'break-word'
                    }
                  }}
                >
                  {skillsCodeString}
              </SyntaxHighlighter>

            </div>
          </section>

          {/* Experience Section - Timeline */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}><FaBriefcase /> Experience</h2>
            <div className={styles.timeline}>
              {experienceData.map((job, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelinePoint}></div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineCompany}>{job.company}</h3>
                    <div className={styles.timelineTitle}>{job.title}</div>
                    <div className={styles.timelineMeta}>
                      <span className={styles.timelineDates}>{job.dates}</span> | <span className={styles.timelineLocation}>{job.location}</span>
                    </div>
                    <ul className={styles.timelineDuties}>
                      {job.duties.map((duty, i) => <li key={i}>{duty}</li>)}
                    </ul>
                    {job.tech && <div className={styles.timelineTech}><strong>Technologies:</strong> {job.tech}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Recognition Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}><FaAward /> Recognition & Impact</h2>
            <div className={styles.awardsContainer}>
              {awardsData.map((award, index) => (
                <div key={index} className={styles.awardItem}>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <p className={styles.awardSource}>Source: <span className={styles.highlight}>{award.source}</span></p>
                  <p className={styles.awardDescription}>{award.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}><FaUniversity /> Education</h2>
            <div className={styles.educationItem}>
                <h3 className={styles.educationInstitution}>Syracuse University</h3>
                <p className={styles.educationDegree}>Master of Science in Computer Science</p>
                <p className={styles.educationMeta}>Syracuse, NY | Jan 2024 – Dec 2025</p>
            </div>
            <div className={styles.educationItem}>
                <h3 className={styles.educationInstitution}>DIT University</h3>
                <p className={styles.educationDegree}>Bachelor of Technology in Computer Science and Engineering</p>
                <p className={styles.educationMeta}>Dehradun, India | Aug 2015 – May 2019</p>
            </div>
          </section>

          {/* Certifications Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}><FaCertificate /> Licenses & Certifications</h2>
            {certificationsData.map((cert, index) => (
              <div key={index} className={styles.educationItem}>
                <h3 className={styles.educationInstitution}>{cert.title}</h3>
                <p className={styles.educationDegree}>Issued by {cert.issuer}</p>
                <p className={styles.educationMeta}>Credential ID: {cert.credentialId}</p>
              </div>
            ))}
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside of programming, I enjoy console and PC gaming, playing chess, and exploring new
              strategies—whether in a video game or on the chessboard. It&apos;s a great way to unwind and challenge myself differently. I also stay connected with the tech community and contribute
              to open-source projects when possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // This function runs at build time on the server.
  // You can fetch data here if needed, but for a static "About" page,
  // simply returning props for the title is common.
  return {
    props: {
      // You can pass any props needed by your page component here
      // For example, if you want to set the page title dynamically:
      title: 'About Bhupesh Chikara',
    },
  };
}


export default AboutPage;