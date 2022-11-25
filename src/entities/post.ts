import {v1} from "uuid";

export interface Comment {
}

export interface Post {
    id: string
    content: string
    createdAt: string
    avatar: string
    username: string
    hypeCount: number
    shareCount: number
    viewCount: number
    comments: Comment[]
}
