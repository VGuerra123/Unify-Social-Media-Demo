import { create } from 'zustand';
import { Post, User, Notification, Comment } from '../types';
import { generateDemoData } from '../utils/demoData';

interface StoreState {
  initialized: boolean;
  currentUser: User | null;
  users: User[];
  posts: Post[];
  notifications: Notification[];
  isMenuOpen: boolean;
  currentPage: string;

  // Actions
  initializeApp: () => void;
  login: (userId: string) => void;
  logout: () => void;
  toggleMenu: () => void;
  setCurrentPage: (page: string) => void;
  createPost: (content: string, imageUrl?: string) => void;
  likePost: (postId: string) => void;
  addComment: (postId: string, content: string) => void;
  followUser: (userId: string) => void;
  unfollowUser: (userId: string) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  initialized: false,
  currentUser: null,
  users: [],
  posts: [],
  notifications: [],
  isMenuOpen: false,
  currentPage: 'feed',

  initializeApp: () => {
    const demoData = generateDemoData();
    set({
      initialized: true,
      users: demoData.users,
      posts: demoData.posts,
      notifications: demoData.notifications,
      currentUser: demoData.currentUser
    });
  },

  login: (userId: string) => {
    const { users } = get();
    const user = users.find(u => u.id === userId);
    if (user) {
      set({ currentUser: user });
    }
  },

  logout: () => {
    set({ currentUser: null });
  },

  toggleMenu: () => {
    set(state => ({ isMenuOpen: !state.isMenuOpen }));
  },

  setCurrentPage: (page: string) => {
    set({ currentPage: page });
  },

  createPost: (content: string, imageUrl?: string) => {
    const { posts, currentUser } = get();
    if (!currentUser) return;

    const newPost: Post = {
      id: `post-${Date.now()}`,
      userId: currentUser.id,
      content,
      imageUrl,
      likes: [],
      comments: [],
      createdAt: new Date().toISOString()
    };

    set({ posts: [newPost, ...posts] });
  },

  likePost: (postId: string) => {
    const { posts, currentUser } = get();
    if (!currentUser) return;

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const hasLiked = post.likes.includes(currentUser.id);
        const likes = hasLiked 
          ? post.likes.filter(id => id !== currentUser.id)
          : [...post.likes, currentUser.id];
        return { ...post, likes };
      }
      return post;
    });

    set({ posts: updatedPosts });
  },

  addComment: (postId: string, content: string) => {
    const { posts, currentUser } = get();
    if (!currentUser) return;

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const newComment: Comment = {
          id: `comment-${Date.now()}`,
          userId: currentUser.id,
          content,
          createdAt: new Date().toISOString()
        };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });

    set({ posts: updatedPosts });
  },

  followUser: (userId: string) => {
    const { users, currentUser } = get();
    if (!currentUser) return;

    const updatedUsers = users.map(user => {
      if (user.id === currentUser.id) {
        return { 
          ...user, 
          following: [...user.following, userId] 
        };
      }
      if (user.id === userId) {
        return { 
          ...user, 
          followers: [...user.followers, currentUser.id] 
        };
      }
      return user;
    });

    const updatedCurrentUser = updatedUsers.find(u => u.id === currentUser.id) || currentUser;
    
    set({ 
      users: updatedUsers,
      currentUser: updatedCurrentUser
    });
  },

  unfollowUser: (userId: string) => {
    const { users, currentUser } = get();
    if (!currentUser) return;

    const updatedUsers = users.map(user => {
      if (user.id === currentUser.id) {
        return { 
          ...user, 
          following: user.following.filter(id => id !== userId)
        };
      }
      if (user.id === userId) {
        return { 
          ...user, 
          followers: user.followers.filter(id => id !== currentUser.id)
        };
      }
      return user;
    });

    const updatedCurrentUser = updatedUsers.find(u => u.id === currentUser.id) || currentUser;
    
    set({ 
      users: updatedUsers,
      currentUser: updatedCurrentUser
    });
  }
}));