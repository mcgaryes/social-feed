import React from "react";

interface IconButtonProps {

    icon: string
    cta: string

    handleCta(): void

}

export default function IconButton(props: IconButtonProps) {

    return (
        <button className="flex flex-row gap-2" onClick={(e) => {
            e.preventDefault()
            return props.handleCta()
        }}>
            <img src={props.icon} className={"self-center"} alt={""}/>
            <p className={"self-center"}>{props.cta}</p>
        </button>
    )

}
