import styles from '@/styles/AboutPage.module.css';
import { FaBriefcase, FaUniversity, FaAward, FaLaptopCode } from 'react-icons/fa';
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
        company: 'Deloitte',
        title: 'Senior Software Engineer',
        dates: 'Feb 2021 – Jan 2024',
        location: 'Bangalore, India',
        tech: 'React, Redux, D3.js, Node.js, Three.js, TypeScript, AWS',
        duties: [
        'Designed and implemented custom responsive fragments and dashboards using React.js, Redux, Custom hooks, and Context API, resulting in a 35% increase in user interaction rates.',
        'Leveraged D3.js to enable real-time exploration of charts, graphs, and maps within dashboards, reducing decision-making time by 25%.',
        'Integrated Three.js for 3D data visualizations, enhancing overall user experience and data accuracy by 20%.',
        'Coordinated cross-functional efforts, independently designing and deploying 3 new systems utilized by over 15 departments, significantly boosting team efficiency.',
        ],
    },
    {
        company: 'ToTheNew Pvt. Ltd.',
        title: 'Software Engineer',
        dates: 'Feb 2020 – Mar 2021',
        location: 'Noida, India',
        tech: 'Angular 4+, Node.js, MongoDB, Express, RxJS',
        duties: [
        'Engineered front-end solutions (COVID-19 dashboard, e-commerce platforms) using Angular 4+ and RxJS for clients like PWC.',
        'Architected the TCH channel studying portal using Angular 4, REST API, and RxJS.',
        'Implemented RxJS for handling asynchronous tasks, reducing loading times by 50% and increasing user retention rates by 15%.',
        ],
    },
    {
        company: 'Smart Joules Pvt. Ltd.',
        title: 'Joule Fellow',
        dates: 'Sept 2018 – Dec 2019',
        location: 'Dehradun, India',
        tech: 'Angular, D3.js, TypeScript, RxJS',
        duties: [
        'Created D3 dashboards, multi-select autocomplete, and D3 chart applications.',
        'Developed an open-source NPM module for multi-select autocomplete, increasing community contributions by 40%.',
        'Applied Angular and RxJS in constructing responsive D3 dashboards.',
        ],
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
                <p className={styles.educationMeta}>Dehradun, India | Aug 2016 – May 2020</p>
            </div>
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