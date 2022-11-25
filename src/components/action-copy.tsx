import React from "react";

export enum ActionIconType {
    hype, comment, share
}

interface ActionCopyProps {
    type: ActionIconType
    count: number
    action: string
}

export default function ActionCopy(props: ActionCopyProps) {

    return (

        <div className={"text-xs sm:text-sm"}>

            {
                props.type === ActionIconType.hype && props.count > 100 ?
                    <p><span className={`font-bold text-cred-200`}>{props.count}</span> {props.action}</p> :
                    <p><span className={`font-bold`}>{props.count}</span> {props.action}</p>

            }
        </div>

    )

}
