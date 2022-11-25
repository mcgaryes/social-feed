import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Post} from "../entities/post";
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


            // let post = Post.from(action.payload);
            // state.posts.unshift(JSON.parse(JSON.stringify(post)));
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

        addComment: (state, action: PayloadAction<any>) => {
            // ...
        },

    }
})

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
