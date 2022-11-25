import {FormEvent, FormEventHandler, SyntheticEvent, useCallback, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postsSlice} from "../reducers/posts-reducer";

interface AddCommentFormProps {
    postId: string
}

export default function AddCommentForm(props: AddCommentFormProps) {

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleCommentAdd = useCallback((e: FormEvent) => {

        e.preventDefault();

        const comment = inputRef.current?.value;

        if (comment !== "" && comment !== undefined) {
            dispatch(postsSlice.actions.addComment({pid: props.postId, content: comment}));
            inputRef.current?.blur();
            formRef.current?.reset();
        }

    }, [formRef, inputRef, dispatch, props.postId]);

    return (

        <form ref={formRef}
              onSubmit={(e) => handleCommentAdd(e)}
              className={"flex flex-row items-center gap-4 bg-gray-100 px-4 py-2 rounded-full"}>

            <img src={"/icons/comment.svg"}
                 className={""}
                 alt={""}/>

            <input ref={inputRef}
                   className={"bg-gray-100 grow focus:border-gray-100"}
                   placeholder={"Add Comment"}/>

            <button type={"submit"}>
                <img src={"/icons/add.svg"} className={""} alt={""}/>
            </button>

        </form>
    )

}
