import { locationIcon } from '@/icons/icon'
import Image from 'next/image'
import React from 'react'

const LocationCard = ({data}) => {
    const {phone, title, desc} = data
  return (
    <div className='border border-r-primary border-b-primary py-4 px-2 rounded-md md:py-4 md:px-6 bg-white/90'>
        <div className='w-6 h-6 rounded-full flex items-center justify-center bg-primary py-[10px] px-[3.3px] md:w-12 md:h-12'>
            <Image src={locationIcon} alt='location icon' className='h-4 md:h-[33px]' />
        </div>
        <h5 className='text-primary text-sm leading-5'>{title}</h5>
        <p className='text-sm leading-5 py-1'>{desc}</p>
        <a className='text-primary_text text-sm leading-5' href={`calto:${phone}`}>{phone}</a>
    </div>
  )
}

export default LocationCard