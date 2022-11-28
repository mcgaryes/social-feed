import React from 'react'
import {screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utilities/test-utils'
import PostListItem from '../post-list-item'
import {Post} from "../../entities/post";
import {ActionType} from "../action-bar-button";

let post: Post

beforeAll(() => {
    post = {
        avatar: "",
        comments: [],
        content: "This is a test.",
        createdAt: new Date().toISOString(),
        hypeCount: 100,
        id: "post-id",
        shareCount: 200,
        username: "jsmith",
        viewCount: 300,
    }
})

test('that post renders correctly', async () => {

    renderWithProviders(<PostListItem post={post} />)

    // should show no user initially, and not be fetching a user
    expect(screen.getByText(/This is a test/i)).toBeInTheDocument()
    expect(screen.getByTestId(`${ActionType.hype.valueOf()}-display`).textContent).toEqual("100")
    expect(screen.getByTestId(`${ActionType.share.valueOf()}-display`).textContent).toEqual("200")
    expect(screen.getByTestId(`${ActionType.comment.valueOf()}-display`).textContent).toEqual("0")

})
