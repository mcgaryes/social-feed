import React, {ReactElement} from "react";

interface IconButtonProps {

    icon?: string
    cta?: string
    size?: "small" | "regular"
    children?: ReactElement

    handleCta(): void

}

export default function IconButton(props: IconButtonProps) {

    return (

        <button className="flex flex-row gap-2 items-center"
                onClick={(e) => {
                    e.preventDefault()
                    return props.handleCta()
                }}>

            {
                props.icon &&
                <img src={props.icon} className={"self-center"} alt={""}/>
            }

            {
                props.children &&
                props.size === "small" ?
                    <div className={"text-xs sm:text-sm"}>{props.children}</div> :
                    <div className={"text-sm sm:text-base"}>{props.children}</div>
            }

            {
                props.cta &&
                props.size === "small" ?
                    <p className={"text-xs sm:text-sm"}>{props.cta}</p> :
                    <p className={"text-sm sm:text-base"}>{props.cta}</p>

            }

        </button>
    )

}
