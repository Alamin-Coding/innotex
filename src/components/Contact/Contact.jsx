import SectionHeading from "../SectionHeading/SectionHeading";

import Section from "../Section/Section";
import Link from "next/link";

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
            <div className="mt-[60px]">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-5">
                        <div className="border border-[#00A3CA] rounded-xl p-6">
                            <h3 className="text-3xl">Get in touch</h3>
                            <div className=" text-xl">
                                <p>Feel free to ask any questions or request information; I'm here to assist you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7">

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
