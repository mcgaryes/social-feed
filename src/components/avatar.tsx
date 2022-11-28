interface AvatarProps {
    image: string
    size?: number
    className?: string | undefined
}

export default function Avatar(props: AvatarProps) {

    return (

        <img src={props.image}
             style={{
                 width: props.size ?? 60,
                 height: props.size ?? 60
             }}
             className={"rounded-full".concat(" ", props.className ?? "")}
             alt={"avatar"}/>

    )

}
