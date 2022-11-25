import React, {ReactElement} from "react";
import noop from "../utilities/noop"

interface IconButtonProps {

    icon?: string
    cta?: string
    size?: "small" | "regular"
    children?: ReactElement
    type?: "button" | "submit" | "reset" | undefined

    handleCta?(): void

}

function childBasedContent(children: ReactElement, size: "small" | "regular") {
    return (
        size === "small" ?
            <div className={"text-xs sm:text-sm"}>{children}</div> :
            <div className={"text-sm sm:text-base"}>{children}</div>
    )
}

function ctaBasedContent(cta: string, size: "small" | "regular") {
    return (
        size === "small" ?
            <p className={"text-xs sm:text-sm"}>{cta}</p> :
            <p className={"text-sm sm:text-base"}>{cta}</p>
    )
}

export default function IconButton(props: IconButtonProps) {

    return (

        <button className="flex flex-row gap-2 items-center"
                type={props.type ?? "button"}
                onClick={(e) => {
                    e.preventDefault()
                    props.handleCta ? props.handleCta() : noop();
                }}>

            {
                props.icon &&
                <img src={props.icon} className={"self-center bg"} alt={"icon"}/>
            }

            {
                props.children &&
                childBasedContent(props.children, props.size ?? "regular")
            }

            {
                props.cta &&
                ctaBasedContent(props.cta, props.size ?? "regular")

            }

        </button>
    )

}
