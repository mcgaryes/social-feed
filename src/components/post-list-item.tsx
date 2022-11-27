import {Post} from "../entities/post";
import Avatar from "./avatar";
import React, {useEffect, useState} from "react";
import IconButton from "./icon-button";
import AddCommentForm from "./add-comment-form";
import ActionBarButton, {ActionType} from "./action-bar-button";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import moment from "moment";
import CommentsList from "./comments-list";
import {postsSlice} from "../reducers/posts-slice";
import {useDispatch} from "react-redux";

interface PostListItemProps {
    post: Post
}

export default function PostListItem(props: PostListItemProps) {

    const dispatch = useDispatch();
    const {post} = props;

    const {
        id,
        content,
        createdAt,
        comments,
        hypeCount,
        shareCount,
        username,
        viewCount,
        avatar
    } = post;

    const [timeSinceDate, setTimeSinceDate] = useState<string>("")

    useEffect(() => {

        setTimeSinceDate(moment(createdAt, "YYYY-MM-DDTHH:mm:ss.sssZ").fromNow())

        const timeSinceInterval = setInterval(() => {
            setTimeSinceDate(moment(createdAt, "YYYY-MM-DDTHH:mm:ss.sssZ").fromNow())
        }, 30000);

        return () => {
            clearInterval(timeSinceInterval);
        };

    }, [createdAt]);

    return (

        <div className="border rounded-lg px-6 py-4 flex flex-col gap-4">

            <div className="flex flex-row gap-4">

                <Avatar image={avatar}/>

                <div className="flex flex-col gap-1 grow">

                    <div className="flex flex-row gap-4">

                        <h1 className={"font-poppins text-lg"}>{username}</h1>

                        <div className={"grow"}/>

                        <IconButton icon={"/icons/ellipsis.svg"}/>

                    </div>

                    <p className={"text-sm text-gray-500"}>
                        {timeSinceDate}
                    </p>

                </div>


            </div>

            <p className={"text-sm leading-relaxed"}>{content}</p>

            <div className="flex flex-row gap-x-4 flex-wrap gap-y-0">

                <ActionBarButton icon={solid("heart")}
                                 count={hypeCount}
                                 action={"Hypes"}
                                 threshold={100}
                                 type={ActionType.hype}
                                 handleCta={() => dispatch(postsSlice.actions.upVotePost(id))}/>

                <ActionBarButton icon={solid("comment")}
                                 count={comments.length}
                                 action={"Comments"}
                                 threshold={100}
                                 type={ActionType.comment}/>

                <ActionBarButton icon={solid("share")}
                                 count={shareCount}
                                 action={"Shares"}
                                 threshold={100}
                                 type={ActionType.share}/>

                <IconButton size={"small"}>
                    <p className={"font-poppins"}><span className={"font-medium"}>{viewCount}</span> Views</p>
                </IconButton>

            </div>

            <AddCommentForm postId={id}/>

            <CommentsList comments={comments}/>

        </div>

    )

}
