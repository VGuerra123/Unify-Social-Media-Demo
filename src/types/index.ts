export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: string[];
  following: string[];
  joinedAt: string;
  /** Fecha ISO de la última vez que estuvo activo */
  lastActiveAt?: string;
  /** URL de su sitio web personal */
  website?: string;
  /** Ubicación, p. ej. "Santiago de Chile" */
  location?: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string;
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow';
  fromUserId: string;
  toUserId: string;
  postId?: string;
  read: boolean;
  createdAt: string;
}

export type UserManualSection = {
  id: string;
  title: string;
  icon: string;
  content: string;
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
};
