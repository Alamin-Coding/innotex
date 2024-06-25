import Image from "next/image"
import Section from "../Section/Section"
import SectionHeading from "../SectionHeading/SectionHeading"

import certificate from "@/assets/images/certificate.png"
import bgImage from "@/assets/images/certificate-bg.jpg"


const bgStyle = {
    background: `url(${bgImage.src}) no-repeat center/cover`
}

const Certificate = () => {
  return (
    <Section style={bgStyle}>
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:max-w-[387px] md:pt-10">
                <SectionHeading
                    subheading="Certificate"
                    heading="Innotransfers Certifications"
                    description="When it comes to promotional products, umbrellas have always been a popular choice.  They not …"
                />
            </div>
            <div className="flex-shrink">
                <Image src={certificate} alt="certificate" />
            </div>
        </div>
    </Section>
  )
}

export default Certificate