import {Post} from "../entities/post";
import Avatar from "./avatar";
import React from "react";
import IconButton from "./icon-button";

interface PostListItemProps {
    post: Post
}

export default function PostListItem(props: PostListItemProps) {

    return (

        <li className="list-none border rounded-lg px-6 py-4">

            <div className="flex flex-col gap-4">

                <div className="flex flex-row gap-4">

                    <Avatar image={"https://www.fillmurray.com/180/180"}/>

                    <div className="flex flex-col gap-1">
                        <h1 className={"text-lg font-bold"}>Eric McGary</h1>
                        <p className={"text-sm text-gray-500"}>2 minutes ago</p>
                    </div>

                    <div className={"grow"}/>

                    <img src={"/icons/ellipsis.svg"} className={"self-center"} alt={""}/>

                </div>

                <p>{props.post.title}</p>

                <div className="flex flex-row gap-4">

                    <IconButton icon={"/icons/hype.svg"}
                                size={"small"}
                                handleCta={() => {
                                    alert("clicked hypes")
                                }}>
                        <p><span className={"font-bold"}>100</span> Hypes</p>
                    </IconButton>

                    <IconButton icon={"/icons/comment.svg"}
                                size={"small"}
                                handleCta={() => {
                                    alert("clicked comments")
                                }}>
                        <p><span className={"font-bold"}>25</span> Comments</p>
                    </IconButton>

                    <IconButton icon={"/icons/share.svg"}
                                size={"small"}
                                handleCta={() => {
                                    alert("clicked shares")
                                }}>
                        <p>
                            <span className={"font-bold"}>12</span> Shares
                        </p>
                    </IconButton>

                    <IconButton size={"small"}
                                handleCta={() => {
                                    alert("clicked shares")
                                }}>
                        <p>
                            <span className={"font-bold"}>12</span> Views
                        </p>
                    </IconButton>

                </div>

                <p>Add Comment</p>

            </div>

        </li>

    )

}
