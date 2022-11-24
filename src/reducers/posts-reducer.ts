import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Post} from "../entities/post";

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

        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload)
        },

    }
})

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
