import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export enum ActionIconType {
    hype, comment, share
}

interface ActionIconProps {
    icon: IconDefinition
    type: ActionIconType
}

export default function ActionIcon(props: ActionIconProps) {

    switch (props.type) {
        case ActionIconType.comment:

            return <FontAwesomeIcon icon={props.icon}
                                    style={{width: 20, height: 20}}
                                    className={"p-2 rounded-full hover:bg-cblue-100 active:bg-cblue-200 hover:text-cblue-200 active:text-white"}/>

        case ActionIconType.hype:

            return <FontAwesomeIcon icon={props.icon}
                                    style={{width: 20, height: 20}}
                                    className={"p-2 rounded-full hover:bg-cred-100 active:bg-cred-200 hover:text-cred-200 active:text-white"}/>

        case ActionIconType.share:

            return <FontAwesomeIcon icon={props.icon}
                                    style={{width: 20, height: 20}}
                                    className={"p-2 rounded-full hover:bg-cgray-100 active:bg-cgray-200 hover:text-cgray-200 active:text-white"}/>
    }


}
