import {FormEvent, useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import {postsSlice} from "../reducers/posts-slice";

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
              className={"flex flex-row items-center gap-4 bg-slate-100 px-4 py-2 rounded-full"}>

            <img src={"/icons/comment.svg"}
                 className={"opacity-70"}
                 alt={"comment"}/>

            <input ref={inputRef}
                   className={"font-poppins min-w-0 bg-gray-100 grow focus:border-gray-100"}
                   placeholder={"Add Comment"}/>

            <button type={"submit"}>

                <img src={"/icons/add.svg"}
                     className={"opacity-70 min-w-fit"}
                     alt={"add"}/>

            </button>

        </form>
    )

}
