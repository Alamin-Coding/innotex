import SectionHeading from "../SectionHeading/SectionHeading";

import Section from "../Section/Section";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import contactBg from "@/assets/images/contact-bg.png"
import Image from "next/image";
import {mailIcon} from "@/icons/icon";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const contactBgImage = {
    backgroundImage: `url(${contactBg.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
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
            <div className="mt-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-5 order-2 md:order-2" style={contactBgImage}>
                        <div className="border border-[#00A3CA]/30 rounded-xl p-6">
                            <div>
                                <h3 className="text-3xl">Get in touch</h3>
                                <div className=" text-xl">
                                    <p>Feel free to ask any questions or request information; I&apos;m here to assist
                                        you.</p>
                                </div>
                            </div>
                            <div className="border-b border-[#00A3CC] my-8"></div>
                            <div className="flex flex-col gap-y-6">
                                <div className="flex gap-6 py-2 px-6 rounded-lg border-r border-r-primary shadow-[0_4px_30px_#EEF8FB] bg-white">
                                    <div
                                        className=" flex align-center justify-center bg-[#00A3CA] w-12 h-12 rounded-full ">
                                        <Image width={26} height={21} src={mailIcon} alt="mail"/>
                                    </div>
                                    <div>
                                        <h4>Mail</h4>
                                        <p>info@innotex.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 py-2 px-6 rounded-lg border-r border-r-primary shadow-[0_4px_30px_#EEF8FB] bg-white">
                                    <div
                                        className=" flex align-center justify-center bg-[#00A3CA] w-12 h-12 rounded-full">
                                        <Image width={26} height={21} src={mailIcon} alt="mail"/>
                                    </div>
                                    <div>
                                        <h4>Call</h4>
                                        <p>123456789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-1">
                        <div>
                            <div className="rounded-xl bg-white p-[30px] contactform_wrap">
                                <div className="contactform flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="grid w-full items-center">
                                            <Label htmlFor="name">Name*</Label>
                                            <Input className="h-[60px] rounded-lg" type="text" id="name" placeholder="Enter your name"/>
                                        </div>
                                        <div className="grid w-full items-center">
                                            <Label htmlFor="email">Email*</Label>
                                            <Input className="h-[60px] rounded-lg" type="email" id="email" placeholder="Enter your email"/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="grid w-ful items-center">
                                            <Label htmlFor="country">Country *</Label>
                                            <Select>
                                                <SelectTrigger className="h-[60px] rounded-lg">
                                                    <SelectValue placeholder="Select country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="us">United States</SelectItem>
                                                        <SelectItem value="japan">Japan</SelectItem>
                                                        <SelectItem value="finland">Finland</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid w-full items-center">
                                            <Label htmlFor="type">Organization Type</Label>
                                            <Select>
                                                <SelectTrigger className="h-[60px] rounded-lg">
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="matrix-structure">Matrix structure</SelectItem>
                                                        <SelectItem value="matrix-structure">Matrix structure</SelectItem>
                                                        <SelectItem value="matrix-structure">Matrix structure</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            {/* <Input className="h-[60px] rounded-lg" type="email" id="email" placeholder="Enter your email"/> */}
                                        </div>
                                    </div>
                                    <div className="grid w-full items-center">
                                        <Label htmlFor="massages">How can we help?</Label>
                                        <Textarea className="rounded-lg min-h-[140px]" placeholder="Type your massages"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
