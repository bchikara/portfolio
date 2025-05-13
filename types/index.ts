export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  technologies: Array<string>;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
// types/index.ts or types/leetcode.ts

export interface LeetCodeUser {
  username: string;
  avatar: string;
  ranking: number | string; // Can be a number or "N/A"
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  // Add other relevant fields like acceptance rate, etc. if fetched
}

export interface LeetCodeSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: number; // Unix timestamp (seconds)
  statusDisplay: string;
  lang: string;
}

export interface HeatmapData {
  date: string; // YYYY-MM-DD
  count: number;
}