import Image from "next/image"
import ListWithIcon from "../ListItem/ListWithIcon"
import Section from "../Section/Section"
import SectionHeading, { HeadingDescription } from "../SectionHeading/SectionHeading"


import product_1 from "@/assets/images/products-1.jpg"
import product_2 from "@/assets/images/products-2.jpg"
import { ButtonOutline } from "../Buttons/Button"
import ViewAll from "../Buttons/ViewAll"

import { rapidInkTransfers, metallicAndReflectiveTransfers } from "@/data/data.js";

const Products = () => {
  return (
    <Section>
        <div className="relative flex items-center justify-between pb-[60px]">
            <SectionHeading subheading="Products" heading="Our Transfers" shortText={false} />
            <ViewAll/>
        </div>
        <div className="grid grid-cols-1 gap-[72px] items-center md:grid-cols-2">
            <div className="rounded-xl relative">
                <Image className="rounded-xl w-full object-cover" src={product_1} alt="image" />
                <ul className="hidden md:block p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] w-[335px] -translate-x-[20%] translate-y-[25%] absolute bottom-0 left-0">
                    {rapidInkTransfers?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                </ul>
            </div>
            <HeadingDescription heading="RapidInk Transfers" description="Our RapidInk custom heat transfers are the perfect way to reproduce vibrant multicolored logos and designs on a wide range of garments and fabric types.">
                <div className="inline-flex flex-col gap-10 pt-6 md:pt-10">
                    <ul className="md:hidden p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                    {rapidInkTransfers?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                    </ul>
                    <ButtonOutline href="/contact" text="Contact Us" />
                </div>
            </HeadingDescription>
        </div>

        <div className="grid grid-cols-1 gap-[72px] items-center md:grid-cols-2 mt-10 md:mt-[246px]">
            <HeadingDescription heading="Metallic & Reflective Transfers" description="Elevate your garment prints with our custom metallic and reflective heat transfers. Ideal for fashion, retail, and industrial workwear, especially for certified reflective materials.">
                <div className="inline-flex flex-col gap-10 pt-6 md:pt-10">
                    <ul className="md:hidden p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                    {metallicAndReflectiveTransfers?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                    </ul>
                    <ButtonOutline href="/contact" text="Contact Us" />
                </div>
            </HeadingDescription>
            <div className="rounded-xl relative">
                <Image className="rounded-xl w-full object-cover" src={product_2} alt="image" />
                <ul className="hidden md:block p-6 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] w-[335px] -translate-x-[20%] translate-y-[25%] absolute bottom-0 left-0">
                {metallicAndReflectiveTransfers?.map(data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ))}
                </ul>
            </div>
        </div>
    </Section>
  )
}

export default Products