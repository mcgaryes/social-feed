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
            state.posts.push({
                id: v1(),
                title: action.payload.title ?? ""
            });
        },

    }
})

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
