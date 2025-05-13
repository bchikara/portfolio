import Image from 'next/image';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
     
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={24}
            height={24}
            className={styles.logo}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.technologies}>
          <p>Technologies: 
          <span>{project.technologies}</span></p>
        </div>
        {/* <div className={styles.links}>
        <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live link"
                      className={styles.livelink}
                    >
                      <span>Live link </span><FaExternalLinkSquareAlt size={16} className={styles.icon} />
                    </a>
          <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Repository"
                      className={styles.gitlink}
                    >
                      <span>View on Github </span><FaGithub size={16} className={styles.icon} />
                    </a> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
