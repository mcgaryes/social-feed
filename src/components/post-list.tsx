import {shallowEqual, useSelector} from "react-redux";
import {PostsState} from "../reducers/posts-slice";
import PostListItem from "./post-list-item";
import {Post} from "../entities/post";

interface PostListProps {

}

export default function PostList(props: PostListProps) {

    const result: any = useSelector((state: PostsState) => state.posts, shallowEqual);

    return (
        <ul className={"list-none gap-3 flex-col flex"}>
            {
                result.posts.map((post: Post) => {
                    return (
                        <li key={post.id} className="list-none">
                            <PostListItem post={post}/>
                        </li>
                    )
                })
            }
        </ul>
    )

}
