interface AvatarProps {
    image: string
    size?: number
}

export default function Avatar(props: AvatarProps) {

    return (

        <img src={props.image}
             width={props.size ?? 60}
             height={props.size ?? 60}
             className={"bg-gray-200 rounded-full"}/>

    )

}
