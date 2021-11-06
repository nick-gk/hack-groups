export interface User {
   email: string;
}

export interface TablePost {
  id: number;
  date: Date;
  preview: string;
  likes: number;
  comments: number;
  shares: number;
}
