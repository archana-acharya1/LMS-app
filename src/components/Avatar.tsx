interface AvatarProps {
  imageUrl: string;
  name: string;
}

// export default function Avatar(props: AvatarProps) {


export default function Avatar({ imageUrl, name }: AvatarProps) {
  return (
    <div className="flex flex-row w-fit items-center justify-center gap-2">
      <img className="rounded-full" src={imageUrl} height={24} width={24} />
      <p className="text-lg">{name}</p>
    </div>
  )
}