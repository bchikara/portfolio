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
  code: ["TypeScript", "JavaScript", "Python"],
  askMeAbout: ["web dev", "app dev", "UI/UX", "tech trends"],
  technologies: {
    frontEnd: {
      js: ["React", "Angular 4+", "Next.js"],
      css: ["Sass", "Tailwind", "Bootstrap"],
      uiLibraries: ["Material UI", "Ant Design", "Chakra UI"],
    },
    backEnd: {
      js: ["Node", "Express", "NestJS"],
      python: ["Flask"],
    },
    devOps: ["Docker", "CI/CD", "Nginx", "GitHub Actions"],
    cloudServices: {
      aws: ["AWS Fargate", "EC2", "S3", "Lambda"],
    },
    databases: ["PostgreSQL", "MongoDB", "SQLite", "Firebase Realtime DB", "redis"],
    misc: ["Socket.IO", "REST APIs", "WebSockets", "Cloud Functions"],
    generativeAI: ["GPT", "Vectorization"],
  },
  architecture: {
    frontEnd: ["SPA", "SSR"],
    backEnd: ["microservices", "monolithic", "serverless"],
    devOps: ["Cloudformation", "Serverless Framework"],
    databases: ["Relational", "NoSQL", "In-memory"],
  },
  currentFocus: "Leading the way in full-stack development and cloud innovation.",
  funFact: "Balancing code, coffee, and the NYC subway-debugging while the city never sleeps!"
};`;

const experienceData = [
    {
        company: 'Stealth Startup',
        title: 'AI Engineer / Full Stack Intern',
        dates: 'May 2025 – Dec 2025',
        location: 'New York, NY',
        tech: 'Python, Node.js, TypeScript, Django, PostgreSQL, Redis, AWS, ADP API, OpenAI API, AWS Bedrock, Prometheus, Grafana',
        duties: [
        'Built and owned backend infrastructure for a production fintech SaaS on Node.js, Python, PostgreSQL, Redis, and AWS — maintained 99.99% uptime across multi-tenant architecture serving real financial transactions at scale.',
        'Cut payroll processing time 50% for 5,500+ employees via idempotent ADP integration with exactly-once transaction semantics across distributed Django backend systems.',
        'Reduced workflow latency 40%+ by engineering an NLP/ML inference orchestration pipeline using OpenAI API and AWS Bedrock — eliminating manual human-in-the-loop bottlenecks.',
        'Built reusable LLM agent modules and prompt templates with Claude, accelerating AI delivery across teams.',
        ],
    },
    {
        company: 'Deloitte',
        title: 'Senior AI Engineer / Full Stack Developer',
        dates: 'Feb 2021 – Jan 2024',
        location: 'Bangalore, India',
        tech: 'Python, React, Redux, D3.js, Node.js, Three.js, TypeScript, AWS, GraphQL, GitHub Copilot, Claude, Amazon Bedrock',
        duties: [
        'Delivered full-stack platform and AI architecture as a Deloitte consultant for PayPal — engineered distributed backend systems within PayPal\'s payments ecosystem processing $500M+ in transactions across 15 enterprise departments.',
        'Owned GraphQL and REST API platform serving 2.5M+ weekly requests at 99.99% uptime — schema stitching, circuit breakers, N+1 elimination, 40% throughput increase.',
        'Built distributed analytics infrastructure on AWS processing 10M+ monthly financial transactions — drove 35% engagement growth and 25% lower decision latency.',
        'Led 7 HLD/LLD design reviews; blue-green CI/CD on AWS with 100% build automation; mentored 3 engineers — awarded Applause Award (3x consecutive).',
        ],
    },
    {
        company: 'TO THE NEW',
        title: 'AI Engineer / Full Stack Developer',
        dates: 'Feb 2020 – Feb 2021',
        location: 'Noida, India',
        tech: 'Angular 4+, Node.js, MongoDB, Express, RxJS, Python',
        duties: [
        'Delivered full-stack solutions for enterprise clients including PwC — owning both the UI layer and the API contracts beneath it.',
        'Migrated PwC\'s dashboard to Angular 4+ with lazy-loading, code-splitting, and tree-shaking — reducing bundle size 25% and lifting engagement 18%.',
        'Designed REST API and MongoDB schema for the TCH portal with indexing and aggregation pipelines — resolved the top 3 production crashes and scaled to 500+ concurrent users.',
        'Engineered async data workflows using RxJS (switchMap, debounceTime), request caching, and retry logic — cut page load time 50% and increased user retention 15%.',
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
        title: 'Full Stack Developer',
        dates: 'Sept 2018 – Dec 2019',
        location: 'Dehradun, India',
        tech: 'Angular, D3.js, TypeScript, RxJS, Node.js, Express',
        duties: [
        'Created interactive D3 dashboards, advanced multi-select autocomplete components, and dynamic charting applications to improve data visualization and user experience.',
        'Developed and published an open-source NPM module for multi-select autocomplete, increasing community contributions and adoption by 40%.',
        'Built and integrated RESTful APIs using Node.js (Express), improving backend communication and reducing data fetching overhead by 35%.',
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
              Hi! I&apos;m Bhupesh Chikara, a Software Engineer currently pursuing a
              Master of Science in Computer Science at <span className={styles.highlight}>Syracuse University</span> (Expected Dec 2025). I have a strong
              background in full-stack development, primarily focusing on JavaScript, TypeScript,
              and the React ecosystem (React, Redux, Next.js).
            </p>
            <p className={styles.paragraph}>
              My professional experience includes designing and implementing scalable applications, enhancing user experiences with data visualization tools like D3.js and Three.js, and working with various backend technologies including Node.js, MongoDB, and AWS services. I am passionate about building robust systems, solving complex problems, and continuously exploring new technologies.
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
                <p className={styles.educationMeta}>Syracuse, NY | Jan 2024 – Dec 2025 (Expected)</p>
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