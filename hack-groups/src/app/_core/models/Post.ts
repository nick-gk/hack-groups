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
}
