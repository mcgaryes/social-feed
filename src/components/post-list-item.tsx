import {Post} from "../entities/post";
import Avatar from "./avatar";
import React, {useEffect, useMemo, useState} from "react";
import IconButton from "./icon-button";
import AddCommentForm from "./add-comment-form";
import ActionBarButton from "./action-bar-button";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {ActionIconType} from "./action-icon";
import moment from "moment";

interface PostListItemProps {
    post: Post
}

export default function PostListItem(props: PostListItemProps) {

    const {post} = props;

    const {
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

        <li className="list-none border rounded-lg px-6 py-4">

            <div className="flex flex-col gap-4">

                <div className="flex flex-row gap-4">

                    <Avatar image={avatar}/>

                    <div className="flex flex-col gap-1 grow">

                        <div className="flex flex-row gap-4">

                            <h1 className={"text-lg font-bold"}>{username}</h1>

                            <div className={"grow"}/>

                            <IconButton icon={"/icons/ellipsis.svg"}/>

                        </div>

                        <p className={"text-sm text-gray-500"}>
                            {timeSinceDate}
                        </p>

                    </div>


                </div>

                <p>{content}</p>

                <div className="flex flex-row gap-4">

                    <ActionBarButton icon={solid("heart")}
                                     count={hypeCount}
                                     action={"Hypes"}
                                     threshold={100}
                                     type={ActionIconType.hype}/>

                    <ActionBarButton icon={solid("comment")}
                                     count={comments.length}
                                     action={"Comments"}
                                     threshold={100}
                                     type={ActionIconType.comment}/>

                    <ActionBarButton icon={solid("share")}
                                     count={shareCount}
                                     action={"Shares"}
                                     threshold={100}
                                     type={ActionIconType.share}/>

                    <IconButton size={"small"}>
                        <p><span className={"font-bold"}>{viewCount}</span> Views</p>
                    </IconButton>

                </div>

                <AddCommentForm/>

            </div>

        </li>

    )

}
