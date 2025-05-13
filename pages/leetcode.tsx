// pages/leetcode.tsx (or your specific file)

// ... (Keep existing imports: Image, CalendarHeatmap, Tooltip, icons, LeetCode, SubmissionCard, types, styles)
import Image from 'next/image';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import { FaCheckCircle, FaMedal } from 'react-icons/fa';
// Import icons you actually use, e.g.:
// import { VscCode } from 'react-icons/vsc';
import { LeetCode } from 'leetcode-query';

import SubmissionCard from '@/components/SubmissionCard';
import { LeetCodeUser, LeetCodeSubmission, HeatmapData } from '@/types';
import styles from '@/styles/LeetCodePage.module.css';
import ReactCalendarHeatmap from 'react-calendar-heatmap';


interface LeetCodePageProps {
  userProfile: LeetCodeUser;
  recentSubmissions: LeetCodeSubmission[];
  heatmapData: HeatmapData[];
  lastUpdated: string;
}

// ... (Keep LeetCodePage component and getHeatmapDateRange function as they were)
const getHeatmapDateRange = () => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  return { startDate, endDate };
};

type HeatmapValue = {
  date: string;
  count?: number; // Treat count as potentially optional here just in case, although it should come from HeatmapData
  [key: string]: any; // Allow other passthrough properties
};

// --- Inside your getTooltipDataAttrs function ---

const getTooltipDataAttrs = (
    value: HeatmapValue | undefined
): ReactCalendarHeatmap.TooltipDataAttrs => { // Explicitly type the return value

    if (!value || !value.date || value.count === undefined || value.count === null) {
        return {} as ReactCalendarHeatmap.TooltipDataAttrs; // Assert empty object too
    }

    // ... (your existing logic to calculate dateStr, count, tooltipContent)
    const dateStr = value.date;
    const count = value.count;
    const date = new Date(dateStr);
    const dateString = !isNaN(date.getTime())
        ? new Date(date.getTime() + date.getTimezoneOffset() * 60000)
              .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : 'Invalid date';
    const tooltipContent = count === 1
        ? `1 submission on ${dateString}`
        : `${count} submissions on ${dateString}`;

    // Assert that this object IS of type TooltipDataAttrs
    return {
        'data-tooltip-id': 'heatmap-tooltip',
        'data-tooltip-content': tooltipContent,
    } as ReactCalendarHeatmap.TooltipDataAttrs; // <--- ADD TYPE ASSERTION HERE
};



const LeetCodePage = ({ userProfile, recentSubmissions, heatmapData, lastUpdated }: LeetCodePageProps) => {
  const { startDate, endDate } = getHeatmapDateRange();
  const totalSubmissionsInYear = heatmapData.reduce((sum, day) => sum + day.count, 0);

  // Fallback if userProfile is somehow null (though getStaticProps aims to prevent this)
  if (!userProfile) {
      return <div className={styles.layout}><p className={styles.pageSubtitle}>Could not load LeetCode profile data.</p></div>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>LeetCode</h1>
        <p className={styles.pageSubtitle}>
          Tracking my problem-solving journey on LeetCode. Stats and recent activity.
        </p>
      </div>

      <div className={styles.leetCodePage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={userProfile.avatar || '/default-avatar.png'}
              className={styles.avatar}
              alt={userProfile.username}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{userProfile.username}</h2>
              <div className={styles.stats}>
                 <div className={styles.statItem}>
                   <FaMedal className={styles.statIcon} />
                   <span>Rank: {typeof userProfile.ranking === 'number' ? userProfile.ranking.toLocaleString() : userProfile.ranking}</span>
                 </div>
                 <div className={styles.statItem} title="Easy Solved">
                   <span className={styles.easyColor}>E:</span>
                   <span>{userProfile.easySolved}</span>
                 </div>
                 <div className={styles.statItem} title="Medium Solved">
                   <span className={styles.mediumColor}>M:</span>
                   <span>{userProfile.mediumSolved}</span>
                 </div>
                  <div className={styles.statItem} title="Hard Solved">
                   <span className={styles.hardColor}>H:</span>
                   <span>{userProfile.hardSolved}</span>
                 </div>
                 <div className={styles.statItem}>
                   <FaCheckCircle className={styles.statIcon} />
                   <span>Total Solved: {userProfile.totalSolved}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Contribution Heatmap</h3>
        </div>
        <div className={styles.heatmapContainer}>
          <p className={styles.heatmapSubtext}>
            {totalSubmissionsInYear} submissions in the last year.
          </p>
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={heatmapData}
            classForValue={(value) => {
              if (!value || value.count === 0) return 'color-empty';
              if (value.count >= 8) return 'color-scale-4';
              if (value.count >= 5) return 'color-scale-3';
              if (value.count >= 3) return 'color-scale-2';
              if (value.count >= 1) return 'color-scale-1';
              return 'color-empty';
            }}
            tooltipDataAttrs={getTooltipDataAttrs}
            showWeekdayLabels={true}
            gutterSize={2}
          />
          <ReactTooltip 
          id="heatmap-tooltip" place="top"
          />
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Recent Submissions</h3>
        </div>
        <div className={styles.submissionsContainer}>
          {recentSubmissions.length > 0 ? (
            recentSubmissions.map((submission) => (
              <SubmissionCard key={submission.id} submission={submission} />
            ))
          ) : (
            <p>No recent submissions found.</p>
          )}
        </div>
        <p className={styles.lastUpdatedText}>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
      </div>
    </div>
  );
};


export async function getStaticProps() {
  const leetcodeUsername = process.env.NEXT_PUBLIC_LEETCODE_USERNAME;
  const now = new Date().toISOString();

  // Default profile structure in case of errors
  const defaultUserProfile: LeetCodeUser = {
    username: leetcodeUsername || "N/A",
    avatar: '',
    ranking: 'N/A',
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  };

  if (!leetcodeUsername) {
    console.error("LeetCode username (NEXT_PUBLIC_LEETCODE_USERNAME) not set in environment variables.");
    return {
      props: {
        title: 'LeetCode - Configuration Error',
        userProfile: defaultUserProfile,
        recentSubmissions: [],
        heatmapData: [],
        lastUpdated: now,
      },
      revalidate: 3600,
    };
  }

  const leetcode = new LeetCode();

  try {
    // Fetch data
    const userData = await leetcode.user(leetcodeUsername);

    if (!userData || !userData.matchedUser) {
      throw new Error(`No matchedUser data found for username: ${leetcodeUsername}. Check if the username is correct.`);
    }

    // --- CORRECTION HERE ---
    // Access submitStats directly, not submitStatsGlobal
    const submitStats = userData.matchedUser.submitStats;
    const profile = userData.matchedUser.profile;

    // Initialize userProfile with basic info
    const userProfile: LeetCodeUser = {
        username: userData.matchedUser.username,
        avatar: profile.userAvatar || '',
        ranking: profile.ranking && profile.ranking > 0 ? profile.ranking : 'N/A',
        // Initialize counts to 0, update if stats are found
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
    };

    // Safely access acSubmissionNum if submitStats exists
    if (submitStats && submitStats.acSubmissionNum) {
        userProfile.totalSolved = submitStats.acSubmissionNum.find((s: any) => s.difficulty === 'All')?.count || 0;
        userProfile.easySolved = submitStats.acSubmissionNum.find((s: any) => s.difficulty === 'Easy')?.count || 0;
        userProfile.mediumSolved = submitStats.acSubmissionNum.find((s: any) => s.difficulty === 'Medium')?.count || 0;
        userProfile.hardSolved = submitStats.acSubmissionNum.find((s: any) => s.difficulty === 'Hard')?.count || 0;
    } else {
        console.warn(`Could not find submitStats.acSubmissionNum for ${leetcodeUsername}. Solved counts will be 0.`);
    }
    // --- END CORRECTION ---


    // Map Recent Submissions (remains the same logic)
    const recentSubmissions: LeetCodeSubmission[] = (userData.recentSubmissionList || [])
      .slice(0, 10)
      .map((sub: any) => ({
        id: sub.id || `${sub.timestamp}-${sub.titleSlug}`,
        title: sub.title,
        titleSlug: sub.titleSlug,
        timestamp: parseInt(sub.timestamp, 10),
        statusDisplay: sub.statusDisplay,
        lang: sub.lang,
      }));

    // Map Heatmap Data (remains the same logic)
    const submissionCalendarRaw = userData.matchedUser.submissionCalendar;
    let heatmapData: HeatmapData[] = [];
    if (submissionCalendarRaw) {
      try {
        const calendar = JSON.parse(submissionCalendarRaw);
        heatmapData = Object.entries(calendar).map(([timestamp, count]) => {
          const date = new Date(parseInt(timestamp, 10) * 1000);
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');
          return {
            date: `${year}-${month}-${day}`,
            count: count as number,
          };
        });
      } catch (e) {
        console.error("Failed to parse submission calendar:", e);
      }
    }

    return {
      props: {
        title: `LeetCode - ${userProfile.username}`,
        userProfile,
        recentSubmissions,
        heatmapData,
        lastUpdated: now,
      },
      revalidate: 3600, // Revalidate data every hour
    };

  } catch (error: any) {
    console.error(`Failed to fetch LeetCode data for ${leetcodeUsername}:`, error.message);
    if (error.response) { // Log details if it's an HTTP error from underlying fetch
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    }
    return {
      props: {
        title: 'LeetCode - Data Fetch Error',
        userProfile: { ...defaultUserProfile, username: leetcodeUsername },
        recentSubmissions: [],
        heatmapData: [],
        lastUpdated: now,
      },
      revalidate: 600, // Revalidate sooner after an error
    };
  }
}

export default LeetCodePage;