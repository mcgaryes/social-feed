import React, {useEffect, useState} from "react";
import IconButton from "./icon-button";
import {useDispatch} from "react-redux";
import {postsSlice} from "../reducers/posts-reducer";

interface PostFormProps {
}

export default function PostForm(props: PostFormProps) {

    const [canSubmit, setCanSubmit] = useState<boolean>(false);
    const [postTitle, setPostTitle] = useState<string>("");

    const dispatch = useDispatch();

    useEffect(() => {
        setCanSubmit(postTitle !== "")
    }, [postTitle])

    return (

        <form onSubmit={(e) => {
            e.preventDefault()
            if (postTitle !== "") {
                dispatch(postsSlice.actions.addPost({title: postTitle}))
            }
        }}>

            <div className="border rounded-lg px-6 py-4">

                <div className="flex flex-col gap-4">

                    <input className={"border rounded-lg p-3"}
                           type={"text"}
                           defaultValue={postTitle}
                           placeholder={"What's on your mind?"}
                           onChange={(e) => setPostTitle(e.target.value)}/>

                    <div className="flex flex-row gap-4">

                        <IconButton icon={"/icons/camera.svg"}
                                    cta={"Add Media"}
                                    handleCta={() => alert("add media")}/>

                        <IconButton icon={"/icons/video.svg"}
                                    cta={"Go Live"}
                                    handleCta={() => alert("go live")}/>

                        <div className={"grow"}/>

                        <input type={"submit"}
                               value={"Post"}
                               disabled={!canSubmit}
                               className={"cursor-pointer bg-blue-600 text-white font-bold px-7 py-3 rounded-lg disabled:bg-gray-100 hover:bg-blue-800"}/>

                    </div>

                </div>

            </div>

        </form>

    )

}
