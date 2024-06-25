import React from 'react'
import Image from 'next/image'

const shadow = {
    boxShadow: "0 4px 30px  rgba(0, 0, 0, 0.04)"
}

const WelcomeCard = ({icon, heading, desc}) => {
  return (
    <div className='py-1 h-full'>
        <div className='px-4 py-6 rounded-xl border-r border-b border-r-[rgba(0,163,204,0.4)] border-b-[rgba(0,163,204,0.4)] h-full' style={shadow}>
            <div className='w-[30px] h-[30px] rounded-full outline outline-[1px] outline-[rgba(0,163,204,0.4)] bg-gradient-to-r from-[#00A3CC] to-[#00A3CC] flex items-center justify-center p-1 lg:outline-[3px] lg:w-[50px] lg:h-[50px]'>
                <Image src={icon} alt="icon" />
            </div>
            <div className='mt-6'>
                <h3 className='text-xl leading-8'>{heading}</h3>
                <p className='pt-2'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCard