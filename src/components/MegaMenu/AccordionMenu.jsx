import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// const NestedAccordionItem = ({ title, children }) => (
//   <AccordionItem>
//     <AccordionTrigger>{title}</AccordionTrigger>
//     <AccordionContent>{children}</AccordionContent>
//   </AccordionItem>
// );

const MultiLayerAccordion = () => {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="hover:no-underline hover:text-primary">Heat Transfer</AccordionTrigger>
          <AccordionContent>
            <AccordionItem value="sitem-1">
              <AccordionTrigger className="hover:no-underline hover:text-primary">Textile Transfers</AccordionTrigger>
              <AccordionContent>RapidInk Transfers</AccordionContent>
              <AccordionContent>EcoResist Transfers</AccordionContent>
              <AccordionContent>Metallic & Reflective Transfers</AccordionContent>
              <AccordionContent>Digital Transfers</AccordionContent>
              <AccordionContent>Subliblock Transfers</AccordionContent>
              <AccordionContent>3D Transfers</AccordionContent>
              <AccordionContent>Neck Labels</AccordionContent>
              <AccordionContent>Sports Patches & Badges</AccordionContent>
            </AccordionItem>
            <AccordionItem value="sitem-2">
              <AccordionTrigger className="hover:no-underline hover:text-primary">Textile Transfers</AccordionTrigger>
              <AccordionContent>RapidInk Transfers</AccordionContent>
              <AccordionContent>EcoResist Transfers</AccordionContent>
              <AccordionContent>Metallic & Reflective Transfers</AccordionContent>
              <AccordionContent>Digital Transfers</AccordionContent>
              <AccordionContent>Subliblock Transfers</AccordionContent>
              <AccordionContent>3D Transfers</AccordionContent>
              <AccordionContent>Neck Labels</AccordionContent>
              <AccordionContent>Sports Patches & Badges</AccordionContent>
            </AccordionItem>
            <AccordionItem value="sitem-3">
              <AccordionTrigger className="hover:no-underline hover:text-primary">Textile Transfers</AccordionTrigger>
              <AccordionContent>RapidInk Transfers</AccordionContent>
              <AccordionContent>EcoResist Transfers</AccordionContent>
              <AccordionContent>Metallic & Reflective Transfers</AccordionContent>
              <AccordionContent>Digital Transfers</AccordionContent>
              <AccordionContent>Subliblock Transfers</AccordionContent>
              <AccordionContent>3D Transfers</AccordionContent>
              <AccordionContent>Neck Labels</AccordionContent>
              <AccordionContent>Sports Patches & Badges</AccordionContent>
            </AccordionItem>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MultiLayerAccordion;
