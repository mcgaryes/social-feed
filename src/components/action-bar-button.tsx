import React from "react";
import noop from "../utilities/noop"
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export enum ActionType {
    hype = 0,
    comment = 1,
    share = 2
}

interface ActionBarButtonProps {

    icon: IconDefinition
    count: number
    action: string
    threshold: number
    type: ActionType

    handleCta?(): void

}

export default function ActionBarButton(props: ActionBarButtonProps) {

    const {
        action,
        type,
        icon,
        count,
        threshold,
        handleCta
    } = props;

    return (

        <button className="flex flex-row gap-0.5 items-center group"
                type={"button"}
                onClick={(e) => {
                    e.preventDefault()
                    handleCta ? handleCta() : noop();
                }}>

            {{
                0: count <= threshold ?
                    <FontAwesomeIcon icon={icon}
                                     className={"p-2 rounded-full text-gray-300 group-active:text-white group-hover:bg-cred-100 group-active:bg-cred-200 group-hover:text-cred-200"}/> :
                    <FontAwesomeIcon icon={icon}
                                     className={"p-2 rounded-full text-cred-200 group-active:text-white group-hover:bg-cred-100 group-active:bg-cred-200 group-hover:text-cred-200"}/>,
                1: <FontAwesomeIcon icon={icon}
                                    className={"p-2 rounded-full text-gray-300 group-active:text-white group-hover:bg-cblue-100 group-active:bg-cblue-200 group-hover:text-cblue-200"}/>,
                2: <FontAwesomeIcon icon={icon}
                                    className={"p-2 rounded-full text-gray-300 group-active:text-white group-hover:bg-cgray-100 group-active:bg-cgray-200 group-hover:text-cgray-200"}/>
            }[type.valueOf()]}

            <div className={"text-xs sm:text-sm font-poppins"}>
                {
                    type === ActionType.hype && count > threshold ?
                        <p><span data-testid={`${type}-display`} className={`font-bold text-cred-200`}>{count}</span> {action}</p> :
                        <p><span data-testid={`${type}-display`} className={`font-medium`}>{count}</span> {action}</p>
                }
            </div>

        </button>

    )

}
