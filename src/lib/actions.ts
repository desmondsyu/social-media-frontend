import axiosInstance from "./axiosInstance";
import type { Post, Comment, Profile } from "./definitions";
import { CommentProp, LikeProp, LoginProp, PostProp, UserProp } from "./propinterfaces";
import { getCookie } from 'typescript-cookie'


// Auth
export async function register(formData: FormData): Promise<void> {
    try {
        await axiosInstance.post(`/register`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "multipart/form-data",
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function login(formData: LoginProp): Promise<any> {
    try {
        const response = await axiosInstance.post(`/login`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getUser(username: string): Promise<Profile> {
    try {
        const response = await axiosInstance.get(`/users/${username}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}


// Posts
export async function getUserPosts(username: string): Promise<Post[]> {
    try {
        const response = await axiosInstance.get(`/posts/user/${username}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getAllPosts(): Promise<Post[]> {
    try {
        const response = await axiosInstance.get(`/posts`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getFollowedPosts(): Promise<Post[]> {
    try {
        const response = await axiosInstance.get(`/posts/followed`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function createPost(formData: PostProp): Promise<void> {
    try {
        await axiosInstance.post(`/posts`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function updatePost(postId: number, formData: Post): Promise<void> {
    try {
        await axiosInstance.put(`/posts/${postId}`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deletePost(postId: number): Promise<void> {
    try {
        await axiosInstance.delete(`/posts/${postId}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

// Comment
export async function getCommentsForPost(postId: number): Promise<Comment[]> {
    try {
        const response = await axiosInstance.get(`/comments/post/${postId}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function createComment(formData: CommentProp): Promise<void> {
    try {
        await axiosInstance.post(`/comments`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deleteComment(commentId: number): Promise<void> {
    try {
        await axiosInstance.delete(`/comments/${commentId}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

// Like
export async function getLikeCount(postId: number): Promise<number> {
    try {
        const response = await axiosInstance.get(`/likes/post/${postId}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function createLike(formData: LikeProp): Promise<void> {
    try {
        await axiosInstance.post(`/likes`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deleteLike(formData: LikeProp): Promise<void> {
    try {
        await axiosInstance.delete(`/likes`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
                data: formData,
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

// Follow
export async function followUser(username: string): Promise<void> {
    try {
        await axiosInstance.post(`/follows/${username}`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function unfollowUser(username: string): Promise<void> {
    try {
        await axiosInstance.delete(`/follows/${username}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getFollowers(username: string | null): Promise<Profile[]> {
    try {
        const response = await axiosInstance.get(`/follows/followers/${username}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getFollowed(username: string | null): Promise<Profile[]> {
    try {
        const response = await axiosInstance.get(`/follows/followed/${username}`,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function followSelf(username: string): Promise<void> {
    try {
        await axiosInstance.post(`/follows/${username}`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            },
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

// profile management
export async function deactivateUser(username: string): Promise<void> {
    try {
        await axiosInstance.post(`/deactivate/${username}`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            }
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function recoverUser(username: string): Promise<void> {
    try {
        await axiosInstance.post(`/recovery/${username}`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            }
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function setPublic(): Promise<void> {
    try {
        await axiosInstance.post(`/set-public`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            }
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function setPrivate(): Promise<void> {
    try {
        await axiosInstance.post(`/set-private`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            }
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deleteUser(): Promise<void> {
    try {
        await axiosInstance.post(`/delete-user`,
            {},
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            }
        );
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function updateUser(username: string, formData: FormData): Promise<void> {
    try {
        await axiosInstance.patch(`/update-profile/${username}`,
            formData,
            {
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${getCookie('token')}`,
                },
            }
        );

    } catch (error: any) {
        throw new Error(error.message);
    }
}