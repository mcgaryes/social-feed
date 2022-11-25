export interface Comment {
    id: string
    pid: string
    content: string
    createdAt: string
    avatar: string
    username: string
    hypeCount: number
    shareCount: number
    replyCount: number
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
