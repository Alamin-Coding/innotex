import Image from 'next/image'

const TeamCard = ({cardData}) => {
    const {img, title, desc} = cardData
    // let des = cardData.desc.slice(0, 94) + "..."
  return (
    <div className='bg-white'>
        <div className='rounded-lg overflow-hidden innot_img_zoom'>
            <Image src={img} alt='image' className='w-full object-cover' />
        </div>
        <div className="pt-4">
            <h5 className='text-base leading-[24px] pb-4'>{title}</h5>
            <p className='text-xl leading-8'>{desc}</p>
        </div>
    </div>
  )
}

export default TeamCard