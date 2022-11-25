import React, {useMemo} from "react";
import noop from "../utilities/noop"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import ActionIcon, {ActionIconType} from "./action-icon";

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

        <button className="flex flex-row gap-0.5 items-center"
                type={"button"}
                onClick={(e) => {
                    e.preventDefault()
                    props.handleCta ? props.handleCta() : noop();
                }}>

            <ActionIcon icon={props.icon}
                        type={props.type}/>

            <div className={"text-xs sm:text-sm"}>

                <p>
                    <span className={"font-bold"}>{props.count}</span> {props.action}
                </p>

            </div>

        </button>


    )

}
