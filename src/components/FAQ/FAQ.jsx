
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const FAQ = ({faqAns}) => {


  return (
    <>
        <h5 className='uppercase text-2xl pb-6'>FAQ</h5>
        <div className="flex gap-6 flex-col">
            <Accordion type="single" collapsible>
                <div className="flex flex-col gap-6">
                {faqAns?.map( item => (
                    <AccordionItem value={item.id} key={item.id}>
                        <AccordionTrigger className="border border-[rgba(0,163,204,0.3)] rounded-[8px] no-underline p-5 text-left focus:no-underline"> {item.qus} </AccordionTrigger>
                        <AccordionContent className="p-5">
                        {item.ans}
                        </AccordionContent>
                    </AccordionItem>
                ) )}
            </div>
            </Accordion>
        </div>

    </>
  )
}

export default FAQ