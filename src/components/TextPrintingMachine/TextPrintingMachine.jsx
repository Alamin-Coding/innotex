import printing_machine from "@/assets/images/text-printing-machine.jpg"
import mk2 from "@/assets/images/mk2.jpg"
import Section from "../Section/Section"
import SectionHeading, { HeadingDescription } from "../SectionHeading/SectionHeading"
import Image from "next/image"
import { innoPrinterMK1, innoPrinterMK2, FAQ_MK1 } from "@/data/data.js"
import ListWithIcon from "../ListItem/ListWithIcon"
import { ButtonOutline } from "../Buttons/Button"
import FAQ from "../FAQ/FAQ"

const TextPrintingMachine = () => {
  return (
    <Section>
        <SectionHeading subheading={"Printing"} heading={"Textile Printing Machine"} description={"Our strengths and Advantage discover what makes Us the most reliable and effective partner for your business."} />

        <div className="grid grid-cols-1 gap-6 mt-10 md:gap-[58px]">
            <div className="rounded-[12px] overflow-hidden innot_img_zoom">
                <Image src={printing_machine} alt="a man working" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <HeadingDescription heading={"InnoPrinter MK1"} description={"Technical characteristics for MK1 models:"}>
                    {innoPrinterMK1?.map( data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ) )}
                    <div className="mt-10">
                        <ButtonOutline href="/" text={"View Details"} />
                    </div>
                </HeadingDescription>
                </div>
                <div>
                    <FAQ faqAns={FAQ_MK1} />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 md:gap-[58px]">
            <div className="rounded-[12px] overflow-hidden innot_img_zoom">
                <Image src={mk2} alt="a man working" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <HeadingDescription heading={"InnoPrinter MK2"} description={"Elevate your garment prints with our custom metallic and reflective heat transfers. Ideal for fashion, retail, and industrial workwear, especially for certified reflective materials."}>
                    {innoPrinterMK2?.map( data => (
                        <ListWithIcon key={data.id} text={data.listText} />
                    ) )}
                    <div className="mt-10">
                        <ButtonOutline href="/" text={"View Details"} />
                    </div>
                </HeadingDescription>
                </div>
                <div>
                    <FAQ faqAns={FAQ_MK1} />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default TextPrintingMachine