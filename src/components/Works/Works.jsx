import Section from "../Section/Section"
import SectionHeading from "../SectionHeading/SectionHeading"
import work_1 from "@/assets/images/work-1.jpg"
import work_2 from "@/assets/images/work-2.jpg"
import work_3 from "@/assets/images/work-3.jpg"
import Image from "next/image"

const Works = () => {
  return (
    <Section>
        <SectionHeading subheading={"Our Works"} heading={"Visit INNO TRANSFER’s Works - Connect your network with us"} shortText={false} />
        <div className="grid grid-cols-[4fr_8fr] gap-1 max-h-[648px] mt-[60px] md:mt-[78px] md:gap-6">
            <div className="rounded-[15px] overflow-hidden innot_img_zoom">
                <Image src={work_1} alt="image" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1 md:gap-6">
                <div className="rounded-[15px] overflow-hidden innot_img_zoom">
                    <Image src={work_2} alt="image" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-1 md:gap-6">
                    <div className="rounded-[15px] overflow-hidden innot_img_zoom">
                        <Image src={work_3} alt="image" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-[15px] overflow-hidden innot_img_zoom">
                        <Image src={work_3} alt="image" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Works