import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NestedAccordionItem = ({ title, children }) => (
  <AccordionItem>
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>{children}</AccordionContent>
  </AccordionItem>
);

const MultiLayerAccordion = () => {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <Accordion>
        <NestedAccordionItem title="Level 1 - Item 1">
          <Accordion>
            <NestedAccordionItem title="Level 2 - Item 1.1">
              <Accordion>
                <NestedAccordionItem title="Level 3 - Item 1.1.1">
                  <p>Content for Level 3 - Item 1.1.1</p>
                </NestedAccordionItem>
                <NestedAccordionItem title="Level 3 - Item 1.1.2">
                  <p>Content for Level 3 - Item 1.1.2</p>
                </NestedAccordionItem>
              </Accordion>
            </NestedAccordionItem>
            <NestedAccordionItem title="Level 2 - Item 1.2">
              <p>Content for Level 2 - Item 1.2</p>
            </NestedAccordionItem>
          </Accordion>
        </NestedAccordionItem>
        <NestedAccordionItem title="Level 1 - Item 2">
          <Accordion>
            <NestedAccordionItem title="Level 2 - Item 2.1">
              <p>Content for Level 2 - Item 2.1</p>
            </NestedAccordionItem>
            <NestedAccordionItem title="Level 2 - Item 2.2">
              <Accordion>
                <NestedAccordionItem title="Level 3 - Item 2.2.1">
                  <p>Content for Level 3 - Item 2.2.1</p>
                </NestedAccordionItem>
                <NestedAccordionItem title="Level 3 - Item 2.2.2">
                  <p>Content for Level 3 - Item 2.2.2</p>
                </NestedAccordionItem>
              </Accordion>
            </NestedAccordionItem>
          </Accordion>
        </NestedAccordionItem>
      </Accordion>
    </div>
  );
};

export default MultiLayerAccordion;
