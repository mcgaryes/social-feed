import {Comment} from "../entities/post";
import CommentListItem from "./comment-list-item";
import React from "react";

interface CommentsListProps {
    comments: Comment[]
}

export default function CommentsList(props: CommentsListProps) {

    return (

        <ul className={"list-none"}>

            {
                props.comments.map(comment => (
                    <li key={comment.id} className={"list-none"}>
                        <div style={{width: "100%", height: 1}} className={"bg-gray-200 my-6"}/>
                        <CommentListItem comment={comment}/>
                    </li>
                ))
            }

        </ul>

    )

}
