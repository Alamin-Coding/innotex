"use client"
import fLogo from "@/assets/images/footer-logo.png"
import footerImage from "@/assets/images/footer-img.jpg"
import footerShape from "@/assets/images/footer-shape.svg"
import footerCardShape from "@/assets/images/footer-card-vector.svg"
import cShape from "@/assets/images/footer-c.svg"
import dots from "@/assets/images/footer-dots.svg"
import Image from "next/image"
import Link from "next/link"
import Button from "../Buttons/Button"

const bgImage = {
  background: `url(${footerImage.src}) no-repeat center/cover`
}

const MenuItem = ({heading, children}) => {
  return (
    <div className="flex-1 sm:flex-auto">
      <h5 className="text-white text-2xl leading-10 pb-6 whitespace-nowrap">{heading}</h5>
      <ul className="flex flex-col gap-3">
        {children}
      </ul>
    </div>
  )
}

const LinkItem = ({text, link}) => {
  return  <li><Link href={link} className="text-white whitespace-nowrap">{text}</Link></li>
}

const FooterCard = () => {
  return (
    <div className="relative rounded-xl overflow-hidden h-[558px] flex items-end" style={bgImage}>
      <div className="w-full">
        <Image src={footerCardShape} alt="shape" className="w-full -mb-[1px]" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 bg-[#00556B] px-4 pt-4 pb-5 md:px-12 relative after:content[''] after:w-screen after:h-[200px] after:bg-footer-card-top after:absolute after:left-1/2 after:-translate-x-1/2 after:top-0 after:z-10 ">
          <div className="max-w-[647px]">
            <h4 className="text-white text-2xl leading-[40px]">Welcome to the INNO Transfer Platform</h4>
            <p className="text-white pt-4">Lorem ipsum dolor sit amet consectetur. Viverra cursus justo nam semper ut ipsum leo lectus. Viverra commodo quisque odio.</p>
          </div>
          <div>
            <Button primary={false} href="/contact" text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  )
}



const Footer = () => {
  return (
    <footer className="bg-white pt-20 overflow-hidden">
      <div className="container -mb-[263px] lg:-mb-[426px]">
        <FooterCard />
      </div>
        <Image src={footerShape} alt="shape" className="w-full -mb-[1px]" />
        <div className="bg-inno-darker pt-[210px]">
          <div className="container">
            <div className="flex gap-10 justify-between pt-[31px] pb-20 flex-col  md:gap-9 md:flex-row">
              <div className="relative flex-1">
                <Image src={fLogo} alt="footer-logo" />
                <p className="text-white leading-8 pt-6 max-w-[272px]">Sed ut perspiciatis undmnis iste natus error sit voluptatem accu santium dolore udantiuy totam.</p>
                <Image src={cShape} alt="footer-logo" className="absolute -left-[28%] -top-[44%] w-[53%]" />
                <Image src={dots} alt="footer-logo" className="absolute left-[49%] -top-[36%] w-[51%]" />
              </div>
              <div className="flex justify-between gap-6 flex-col sm:flex-row md:gap-[66px]">
                <MenuItem heading="Resources">
                  <LinkItem link={"/"} text="Download" />
                  <LinkItem link={"/"} text="Funding" />
                  <LinkItem link={"/"} text="Services" />
                </MenuItem>

                <MenuItem heading="Company">
                  <LinkItem link={"/"} text="Contact and Support" />
                  <LinkItem link={"/"} text="Success History" />
                  <LinkItem link={"/"} text="Setting & Privacy" />
                </MenuItem>

                <MenuItem heading="Contact Us">
                  <LinkItem link={"/"} text="Location" />
                  <LinkItem link={"/"} text="Email" />
                  <LinkItem link={"/"} text="Telephone" />
                </MenuItem>

                <MenuItem heading="Social Media">
                  <LinkItem link={"/"} text="Facebook" />
                  <LinkItem link={"/"} text="Instagram" />
                  <LinkItem link={"/"} text="Twitter" />
                </MenuItem>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer