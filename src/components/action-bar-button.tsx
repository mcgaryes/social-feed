import React from "react";
import noop from "../utilities/noop"
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import ActionIcon, {ActionIconType} from "./action-icon";
import ActionCopy from "./action-copy";

interface ActionBarButtonProps {

    icon: IconDefinition
    count: number
    action: string
    threshold: number
    type: ActionIconType

    handleCta?(): void

}

export default function ActionBarButton(props: ActionBarButtonProps) {

    return (

        <button className="flex flex-row gap-0.5 items-center group"
                type={"button"}
                onClick={(e) => {
                    e.preventDefault()
                    props.handleCta ? props.handleCta() : noop();
                }}>

            <ActionIcon icon={props.icon}
                        type={props.type}/>

            <ActionCopy action={props.action}
                        type={props.type}
                        count={props.count}/>

        </button>


    )

}
