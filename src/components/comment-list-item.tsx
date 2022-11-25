import {Comment} from "../entities/post";
import React, {useEffect, useState} from "react";
import moment from "moment";
import Avatar from "./avatar";
import ActionBarButton from "./action-bar-button";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {ActionIconType} from "./action-icon";
import {useDispatch} from "react-redux";
import {postsSlice} from "../reducers/posts-slice";

interface CommentListItemProps {
    comment: Comment
}

export default function CommentListItem(props: CommentListItemProps) {

    const {comment} = props;
    const dispatch = useDispatch();

    const {
        id,
        pid,
        content,
        createdAt,
        hypeCount,
        shareCount,
        username,
        avatar,
        replyCount
    } = comment;

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

        <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4 items-center">

                <Avatar image={avatar} size={40}/>

                <div className="flex flex-col gap-1 grow">

                    <h1 className={"text-lg font-bold"}>{username}</h1>

                    <p className={"text-sm text-gray-500"}>
                        {timeSinceDate}
                    </p>

                </div>


            </div>

            <p>{content}</p>

            <div className="flex flex-row gap-x-4 flex-wrap gap-y-0">

                <ActionBarButton icon={solid("heart")}
                                 count={hypeCount}
                                 action={"Hypes"}
                                 threshold={100}
                                 type={ActionIconType.hype}
                                 handleCta={() => dispatch(postsSlice.actions.upVoteComment({
                                     postId: pid,
                                     commentId: id
                                 }))}/>

                <ActionBarButton icon={solid("comment")}
                                 count={replyCount}
                                 action={"Replies"}
                                 threshold={100}
                                 type={ActionIconType.comment}/>

                <ActionBarButton icon={solid("share")}
                                 count={shareCount}
                                 action={"Shares"}
                                 threshold={100}
                                 type={ActionIconType.share}/>

            </div>

        </div>

    )

}
