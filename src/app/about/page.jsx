import Button, { ButtonOutline } from '@/components/Buttons/Button'
import Section from '@/components/Section/Section'
import SectionHeading, { HeadingDescription } from '@/components/SectionHeading/SectionHeading'
import story from "@/assets/images/story.jpg"
import Image from 'next/image'
import ListWithIcon from '@/components/ListItem/ListWithIcon'
import ViewAll from '@/components/Buttons/ViewAll'

import product_1 from "@/assets/images/products-1.jpg"
import product_2 from "@/assets/images/products-2.jpg"

import circleGradient from "@/assets/images/circle-gradient.png"

import { transfers, textileMachine } from "@/data/data.js";
import Contact from '@/components/Contact/Contact'

const AboutUs = () => {
  return (
    <>
    <Section>
      <div className='grid grid-cols-2'>
        <div>
          <SectionHeading subheading={"About"} heading={"About Innotex"} description={"Innotex Transfers, is a leading company specializing in the design and production of high quality heat transfer printing for the textile industry."} />
          <div>
            <Button href="export@innoprinter.com" text={"export@innoprinter.com"} />
          </div>
        </div>
        <div>Image</div>
      </div>
    </Section>

    {/* Story */}
    <Section>
      <div className=''>
        <div className='pb-[60px]'>
          <SectionHeading subheading={"Story"} heading={"Our story"} shortText={false} />
          <div>
          <div className='flex flex-col gap-6'>
            <p className='text-base leading-normal pt-4 lg:text-[20px] lg:leading-[32px]'>We are a leading European business group, manufacturers of high-quality textile transfers, and innovative textile transfer printing technology for the textile industry.</p>

            <p className='text-base leading-normal pt-4 lg:text-[20px] lg:leading-[32px]'>Our production capacity allows us to deliver from the smallest order to the production of a season, with a very short delivery time.</p>

            <p className='text-base leading-normal pt-4 lg:text-[20px] lg:leading-[32px]'>Our technology and transfers are perfect for any type of labeling and marking: Denim Labeling, Underwear, Baby clothing. Food textiles, Hospital clothing, Work clothing, Uniforms, Hotel clothing, Orthopedic material, T- shirts, Sportswear, Socks, Insoles, Marketing material, Labeling, Promotional, Industrial, etc.</p>

            <p className='text-base leading-normal pt-4 lg:text-[20px] lg:leading-[32px]'>Our innovative technology is the most recommended for marking and labeling your products, since it is printed directly on the garment, leaving it 100% dry and ready for immediate handling.</p>

            <p className='text-base leading-normal pt-4 lg:text-[20px] lg:leading-[32px]'>We manufacture all kinds of textile transfers: roll transfers, unitary transfers, resin roll transfers (for hospital clothing, for example), offset transfers, etc. We have the Oeko TEX Standard 100 norm, our transfers can be used in baby clothes and organic clothes, the highest level of quality.</p>

            <p className='text-base leading-normal pt-4 lg:text-[20px] lg:leading-[32px]'>Feel free to contact us to receive some free samples. When you taste our quality you will want more!</p>
          </div>
            <Button href="export@innoprinter.com" text={"export@innoprinter.com"} />
          </div>
        </div>
        <div className='rounded-xl overflow-hidden'>
          <Image src={story} alt='image' className='w-full object-cover' />
        </div>
      </div>
    </Section>

    <Section className="overflow-x-hidden">
        {/* heading */}
        <div className="relative flex items-center justify-between pb-[60px]">
            <SectionHeading subheading="Products" heading="Find Our Products" shortText={false} />
            <ViewAll/>
        </div>
        {/* RapidInk Transfers */}
        <div className="grid grid-cols-1 gap-[72px] items-center md:grid-cols-2">
            <div className="rounded-xl relative z-[1]">
                <Image className="rounded-xl w-full object-cover" src={product_1} alt="image" />
                <ul className="hidden md:block p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] w-[335px] -translate-x-[20%] translate-y-[25%] absolute bottom-0 left-0">
                    {transfers?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                </ul>
                {/* background circle shape */}
                <div className="absolute -translate-x-1/2 z-[-1] -left-[20%] -bottom-[40%]">
                    <Image src={circleGradient} alt="circle gradient color shape" className="w-full" />
                </div>
            </div>
            <HeadingDescription heading="RapidInk Transfers" description="Our RapidInk custom heat transfers are the perfect way to reproduce vibrant multicolored logos and designs on a wide range of garments and fabric types.">
                <div className="inline-flex flex-col gap-10 pt-6 md:pt-10">
                    <ul className="md:hidden p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                    {transfers?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                    </ul>
                    <ButtonOutline href="/contact" text="Contact Us" />
                </div>
            </HeadingDescription>
        </div>

        {/* Metallic & Reflective Transfers */}
        <div className="grid grid-cols-1 gap-[72px] items-center md:grid-cols-2 mt-10 md:mt-[246px]">
            <HeadingDescription heading="Metallic & Reflective Transfers" description="Elevate your garment prints with our custom metallic and reflective heat transfers. Ideal for fashion, retail, and industrial workwear, especially for certified reflective materials.">
                <div className="inline-flex flex-col gap-10 pt-6 md:pt-10">
                    <ul className="md:hidden p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                    {textileMachine?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                    </ul>
                    <ButtonOutline href="/contact" text="Contact Us" />
                </div>
            </HeadingDescription>
            <div className="rounded-xl relative">
                <Image className="rounded-xl w-full object-cover" src={product_2} alt="image" />
                <ul className="hidden md:block p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] w-[335px] -translate-x-[20%] translate-y-[25%] absolute bottom-0 left-0">
                {textileMachine?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                </ul>
                {/* background circle shape */}
                <div className="absolute translate-x-1/2 z-[-1] right-[5%] -bottom-[15%]">
                    <Image src={circleGradient} alt="circle gradient color shape" className="w-full" />
                </div>
            </div>
        </div>
    </Section>

    <Contact />
    </>
  )
}

export default AboutUs