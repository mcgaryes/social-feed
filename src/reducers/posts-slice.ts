import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Comment, Post} from "../entities/post";
import {v1} from "uuid"
import {randomPostFactory} from "../utilities/random-factories";

export interface UpVotePayload {
    type: "comment" | "post"

}

export interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: [randomPostFactory()],
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

            state.posts[postIndex] = post

        },

        upVotePost: (state, action: PayloadAction<string>) => {

            console.log(action.payload);

            const postIndex = state.posts.findIndex(post => post.id === action.payload);
            const post = state.posts[postIndex];
            post.hypeCount++;
            state.posts[postIndex] = post;

        },

        upVoteComment: (state, action: PayloadAction<{postId: string, commentId: string}>) => {

            const postIndex = state.posts.findIndex(post => post.id === action.payload.postId);
            const post = state.posts[postIndex];

            const commentIndex = post.comments.findIndex(comment => comment.id === action.payload.commentId);
            const comment = post.comments[commentIndex];

            comment.hypeCount++;
            state.posts[postIndex] = post

        },

    }
})

// Action creators are generated for each case reducer function
export const {addPost, addComment, upVotePost, upVoteComment} = postsSlice.actions

export default postsSlice.reducer
