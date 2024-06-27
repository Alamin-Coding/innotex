import { circleIcon } from "@/icons/icon"
import Image from "next/image"

const ListWithIcon = ({text}) => {
  return (
    <li className="flex gap-2 items-center py-3">
        <span>
            <Image src={circleIcon} alt="circle" />
        </span>
        <p className="flex-1 text-sm leading-[20px]">{text}</p>
    </li>
  )
}

export default ListWithIcon