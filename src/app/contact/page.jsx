import Contact from "@/components/Contact/Contact";
import FindUs from "@/components/FindUs/FindUs";
import Members from "@/components/Members/Members";

const ContactUs = () => {
    return (
      <main className="pt-[130px]">
          <Contact />
          <div className="hidden md:block">
            <FindUs />
          </div>
          <div className="md:hidden">
            <Members />
          </div>
      </main>
    )
  }
  
  export default ContactUs