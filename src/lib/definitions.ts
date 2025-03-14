export type User = {
    id: number,
    username: string,
    password: string,
    imageUrl: String | null,
    bio: string | null,
    createdAt: string,
    roles: string;
    isActive: boolean,
    isPublic: boolean,
}

export type Profile = {
    username: string,
    imageUrl: String | null,
    bio: string,
    isFollowed: boolean,
    followersCount: number,
    followingCount: number,
    isActive: boolean,
    isPublic: boolean,
}

export type Post = {
    id: number,
    content: string | null,
    imageUrl: String | null,
    user: {
        username: string,
        imageUrl: String | null,
        bio: string | null,
        isFollowed: boolean,
    },
    createdAt: string,
    likedByCurrentUser: boolean,
    totalLikes: number,
}

export type Comment = {
    id: number,
    content: string,
    user: User,
    post: Post,
    createdAt: string,
}

export type Follow = {
    id: number;
    follower: User,
    followed: User,
    followedAt: string,
}

export type Like = {
    id: number,
    user: User,
    post: Post,
    createdAt: string,
}

export type Notification = {
    id: number,
    user: User,
    type: NotificationType,
    content: string,
    read: boolean,
    createdAt: string,
}

export type NotificationType = 'LIKE' | 'COMMENT' | 'FOLLOW';

export type DashboardStats = {
    totalUsers: number;
    totalPosts: number;
    reportedPosts: number;
    dailyPosts: { date: string; count: number }[];
    accountTypes: { public: number; private: number };
}