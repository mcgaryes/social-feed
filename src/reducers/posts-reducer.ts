import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Post, Comment} from "../entities/post";
import {v1} from "uuid"

export interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        addPost: (state, action: PayloadAction<Partial<Post>>) => {

            state.posts.unshift({
                avatar: '/avatar.png',
                comments: [],
                content: action.payload.content ?? "",
                createdAt: new Date().toISOString(),
                hypeCount: 0,
                id: v1(),
                shareCount: 0,
                username: 'mcgaryes',
                viewCount: 0
            });

        },

        addComment: (state, action: PayloadAction<Partial<Comment>>) => {

            const postIndex = state.posts.findIndex(post => post.id === action.payload.pid);

            const post = state.posts[postIndex]

            console.log(post);

            post.comments?.unshift({
                id: v1(),
                pid: action.payload.pid!,
                content: action.payload.content ?? "",
                createdAt: new Date().toISOString(),
                avatar: '/avatar.png',
                username: 'mcgaryes',
                hypeCount: 0,
                shareCount: 0,
                replyCount: 0
            })

            state.posts[postIndex] =  post

        },

    }
})

// Action creators are generated for each case reducer function
export const { addPost, addComment } = postsSlice.actions

export default postsSlice.reducer
