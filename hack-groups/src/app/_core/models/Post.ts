import { PageEntity } from "./Page";

export interface TablePost {
  id: string;
  date: Date;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface PostDetails {
  id: string;
  date: Date;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  mediaFile?: string;
  mediaType: string;
  url: string;
  reactions: number;
  competitorId: string;
  keyWords: string;
}

export interface PostAnalysis {
  competitors: CompetitorMatchInfo[];
  ownMatchingPostcount: number;
  score: number;
  postKeywords: string[];
}

export interface CompetitorMatchInfo {
  competitor: PageEntity;
  competitorScore: number;
  matchingPostsCount: number;
  posts: PostDetails[];
}
