import SectionHeading from "../SectionHeading/SectionHeading";

import Section from "../Section/Section";
import Link from "next/link";
import { Label} from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import contactBg from "@/assets/images/contact-bg.png"

const contactBgImage = {
    background: `url(${contactBg.src})`
}



const Contact = () => {
    return (
        <Section>
            <SectionHeading
                subheading="Contact"
                heading="Contact us"
                description="Whether you have a question about services, prices, need a any other details please contact us using the form and the other information on this page."
            />
            <div className="mt-6">
                <Link style={{boxShadow: '0 4px 60px rgba(0, 0, 0, 0.05)'}}
                      className="rounded-md px-6 py-[13px] block duration-200 sm:inline-block text-center  bg-primary text-white border border-primary hover:bg-transparent hover:text-primary"
                      href="mailto:contact@innoprinter.com">contact@innoprinter.com</Link>
            </div>

            {/* Only Desktop view */}
            <div className="hidden lg:block mt-[60px] ">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-5">
                        <div className="border border-[#00A3CA] rounded-xl p-6">
                            <h3 className="text-3xl">Get in touch</h3>
                            <div className=" text-xl">
                                <p>Feel free to ask any questions or request information; I&apos;m here to assist you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7">

                    </div>
                </div>
            </div>

            <div className="py-20" style={contactBgImage}>
                <div className="rounded-xl bg-white p-5">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name*</Label>
                            <Input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email*</Label>
                            <Input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email*</Label>
                            <Input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email*</Label>
                            <Input type="email" id="email" placeholder="Enter your email" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
