import Image from 'next/image'
import React from 'react'
import gradient from "@/assets/images/ravolution.svg"
import heroImage from "@/assets/images/hero1.png"
import heroBg from "@/assets/images/Hero-bg.jpg"
import Button, { ButtonOutline } from '../Buttons/Button'
import { brush, print } from '@/icons/icon.js'
import Animation from '../Animation/Animation'


const heroBgImage = {
    backgroundImage: `url(${heroBg.src}`
}

const Circle = ({imgSrc, className}) => {
    return (
        <div  className={`min-w-[72px] w-[72px] min-h-[72px] bg-primary rounded-full flex items-center justify-center p-4 ${className}` }>
            <Image src={imgSrc} alt='icon' />
        </div>
    )
}

const Hero = () => {
  return (
    <section style={heroBgImage} className='bg-no-repeat bg-cover bg-center pt-[110px] overflow-hidden'>
        <div className="container">
            <div className='grid grid-cols-1 gap-[56px] items-center lg:grid-cols-2'>
                <div className='max-w-[569px] sm:mx-auto lg:mt-[65px] relative'>
                    <Animation className="bg-[#3ED0A1] animate-pulse-blue absolute -top-4 -left-4 hidden md:block" />
                    <Animation className="bg-[#FF5670] animate-pulse-red absolute top-[30%] right-0 hidden md:block" />
                    <Animation className="bg-[#46C9EE] animate-pulse-sky absolute -left-[57px] -bottom-[46px] hidden md:block" />
                    <h1 className='text-[32px] leading-tight sm:text-5xl sm:leading-tight lg:text-[56px] lg:leading-[64px]'>Join The <span className='text-primary md:text-primary_text'>Printing</span> Revolution</h1>
                    <div className='flex items-center justify-center w-[122px] h-[40px] rounded-full overflow-hidden md:w-[206px] md:h-[67px]'>
                        <Image src={gradient} alt='gradient image' className='object-cover w-full h-full' />
                    </div>
                    <p className='text-secondary leading-8 text-xl pt-6 pb-8 md:pb-10'>We are a leading European business group, manufacturers of high-quality textile transfers, and innovative textile transfer printing technology for the textile industry.</p>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <Button href="/" text="REQUEST A QUOTE" />
                        <ButtonOutline href="/" text="Contact Us" />
                    </div>
                </div>
                <div className='flex items-center justify-center relative'>
                    <div className='hidden absolute lg:flex flex-col gap-[89px] left-0'>
                        <Circle imgSrc={brush} className="ml-14" />
                        <Circle imgSrc={print} />
                        <Circle imgSrc={print}  />
                    </div>
                    <Image  className=' 2xl:translate-x-[119px] translate-y-1 md:translate-y-2 lg:translate-y-[100px] xl:translate-y-[118px]' src={heroImage} alt='hero image' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero