import Image from 'next/image'
import React from 'react'

const BlogCard = ({cardData}) => {
    const {img, title, desc} = cardData
    // let des = cardData.desc.slice(0, 94) + "..."
  return (
    <div className='p-6 bg-white rounded-xl shadow-[0px_4px_60px_rgba(0,0,0,0,0.5)] border border-[rgba(181,182,185,0.05)]'>
        <div className='rounded-lg overflow-hidden innot_img_zoom'>
            <Image src={img} alt='image' />
        </div>
        <div className="pt-4">
            <h3 className='truncate w-full text-2xl leading-[40px]'>{title}</h3>
            <p className=''>{desc}</p>
        </div>
    </div>
  )
}

export default BlogCard