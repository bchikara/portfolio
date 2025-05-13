import Link from 'next/link';
import { FaCheckCircle, FaTimesCircle, FaCode, FaClock } from 'react-icons/fa';
import { LeetCodeSubmission } from '@/types';
import styles from '@/styles/SubmissionCard.module.css'; // Create this CSS Module

// Helper to format time ago (install 'date-fns' or use simple logic)
import { formatDistanceToNow } from 'date-fns';

interface SubmissionCardProps {
  submission: LeetCodeSubmission;
}

const SubmissionCard = ({ submission }: SubmissionCardProps) => {
  const isAccepted = submission.statusDisplay === 'Accepted';
  const submissionTime = new Date(submission.timestamp * 1000); // Convert Unix timestamp to JS Date

  // Basic fallback for problem URL (replace if actual URL is available)
  const problemUrl = `https://leetcode.com/problems/${submission.titleSlug}/`;

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>
        <Link href={problemUrl} target="_blank" rel="noopener noreferrer">
          {submission.title}
        </Link>
      </h4>
      <div className={styles.details}>
        <span className={`${styles.status} ${isAccepted ? styles.accepted : styles.rejected}`}>
          {isAccepted ? <FaCheckCircle /> : <FaTimesCircle />} {submission.statusDisplay}
        </span>
        <span className={styles.language}>
          <FaCode /> {submission.lang}
        </span>
         <span className={styles.time}>
          <FaClock /> {formatDistanceToNow(submissionTime, { addSuffix: true })}
        </span>
      </div>
      {/* Optional: Add link to the specific submission if available */}
      {/* <Link href={`submission_url_here`} target="_blank" rel="noopener noreferrer">View Submission</Link> */}
    </div>
  );
};

export default SubmissionCard;