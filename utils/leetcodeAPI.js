import { user, submissions, problems } from 'leetcode-query';

export const fetchLeetCodeUser = async (username) => {
  try {
    const userData = await user(username);
    return userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
};

export const fetchLeetCodeSubmissions = async (username) => {
  try {
    const submissionData = await submissions(username);
    return submissionData;
  } catch (error) {
    console.error('Failed to fetch submission data:', error);
    return [];
  }
};

export const fetchLeetCodeProblems = async () => {
  try {
    const problemsData = await problems();
    return problemsData;
  } catch (error) {
    console.error('Failed to fetch problem data:', error);
    return [];
  }
};
