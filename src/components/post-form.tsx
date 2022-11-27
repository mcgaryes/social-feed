import React, {useCallback, useRef, useState} from "react";
import IconButton from "./icon-button";
import {useDispatch} from "react-redux";
import {postsSlice} from "../reducers/posts-slice";

interface PostFormProps {
}

export default function PostForm(props: PostFormProps) {

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [canSubmit, setCanSubmit] = useState<boolean>(false);

    const dispatch = useDispatch();

    const validateForm = useCallback(() => {
        setCanSubmit(inputRef.current?.value !== "")
    }, [inputRef])

    const submit = useCallback(() => {

        let text = inputRef.current?.value;

        if (text !== "") {
            dispatch(postsSlice.actions.addPost({content: text}));
            formRef.current?.reset();
            inputRef.current?.blur();
        }
    }, [formRef, inputRef, dispatch]);

    return (

        <form ref={formRef}
              id={"post-form"}
              onSubmit={(e) => {
                  e.preventDefault()
                  submit()
              }}>

            <div className="border rounded-lg px-6 py-4">

                <div className="flex flex-col gap-4">

                    <input ref={inputRef}
                           type={"text"}
                           className={"font-poppins border rounded-lg p-3"}
                           placeholder={"What's on your mind?"}
                           onChange={() => validateForm()}/>

                    <div className="flex flex-row gap-4">

                        <div className="flex flex-row gap-4 flex-wrap gap-y-0">

                            <IconButton icon={"/icons/camera.svg"}
                                        cta={"Add Media"}/>

                            <IconButton icon={"/icons/video.svg"}
                                        cta={"Go Live"}/>

                        </div>

                        <div className={"grow"}/>

                        <button type={"submit"}
                                disabled={!canSubmit}
                                className={"cursor-pointer bg-cblue-200 text-white font-bold px-7 py-3 rounded-lg disabled:bg-gray-100 hover:bg-cblue-300 active:bg-cblue-400"}>
                            Post
                        </button>

                    </div>

                </div>

            </div>

        </form>

    )

}
