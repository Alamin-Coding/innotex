"use client"
import fLogo from "@/assets/images/footer-logo.png"
import cardBg from "@/assets/images/footer-card-bg.png"
import footerImage from "@/assets/images/footer-img.jpg"
import Image from "next/image"
import Link from "next/link"

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
  return  <li><Link href={link} className="text-white text-base font-poppins whitespace-nowrap">{text}</Link></li>
}

const FooterCard = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <Image className="absolute top-0 left-0 z-30 w-full h-full" src={cardBg} alt="bg-victor" />
      <div>
        <Image src={footerImage} alt="a man" />
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-white border-t border-red-200 pt-[200px] relative  after:left-0 after:top-0 after:contents after:w-full after:h-[200px] after:bg-red-300 after:z-20 after:rounded-b-[100%]">
      <FooterCard />
        <div className="bg-inno-darker">
          <div className="container">
            <div className="flex gap-10 justify-between pt-[31px] pb-20 flex-col  md:gap-9 md:flex-row">
              <div className="">
                <Image src={fLogo} width={200} alt="footer-logo" />
                <p className="text-white text-xl leading-8 pt-6">Sed ut perspiciatis undmnis iste natus error sit voluptatem accu santium dolore udantiuy totam.</p>
              </div>
              <div className="flex justify-between gap-6 flex-col sm:flex-row">
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