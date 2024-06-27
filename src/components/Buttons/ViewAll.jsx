import { longArrow } from '@/icons/icon'
import Image from 'next/image'
import Link from 'next/link'

const ViewAll = () => {
  return (
    <Link href="/" className="flex items-center gap-[17px] text-primary text-sm leading-normal md:text-lg md:leading-6">View all  <Image src={longArrow} alt='icon'/></Link>
  )
}

export default ViewAll