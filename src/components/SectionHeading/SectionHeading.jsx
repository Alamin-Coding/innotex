import vector from "@/assets/images/heading-vector.svg";
import Image from "next/image";

export const HeadingDescription = ({heading, description }) => {
    return (
      <div>
          <h2 className="text-xl leading-8">{heading}</h2>
          <p className="text-base leading-normal">{description}</p>
      </div>
    )
  }

const SectionHeading = ({subheading, heading, description, shortText=true }) => {
  return (
    <div>
        <div className="relative z-[1]">
            <Image src={vector} alt="vector circle" width={150} height={150} className="absolute left-0 top-1/2 -translate-y-1/2 w-[56px] h-[56px] -z-[1] -translate-x-1/2 md:w-[150px] md:h-[150px] md:-left-[14px]" />
            <p className="text-primary text-base leading-normal md:text-xl md:leading-8">{subheading}</p>
            <h2 className="text-[24px] leading-[40px] lg:text-[42px] lg:leading-[56px]">{heading}</h2>
        </div>
        { shortText && <p className="text-base leading-normal pt-4">{description}</p> }
    </div>
  )
}

export default SectionHeading