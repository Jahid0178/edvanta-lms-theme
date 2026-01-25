import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const FaqSection = () => {
  return (
    <section className="py-[60px] bg-linear-to-b from-secondary/0 to-secondary/10">
      <div className="container">
        <SectionHeader title="Frequently asked Questions" />
        <Accordion
          type="single"
          collapsible
          defaultValue="1"
          className="mt-9 space-y-6"
        >
          {faqs.map((faq) => (
            <AccordionItem
              value={faq.id.toString()}
              key={faq.id}
              className="group bg-white border rounded-md last:border-b data-[state=open]:bg-secondary/5 data-[state=open]:border-secondary/20"
            >
              <AccordionTrigger className="p-6 text-lg lg:text-2xl hover:no-underline">
                <span className="flex items-center gap-4">
                  <span className="flex justify-center items-center text-black min-w-10 min-h-10 lg:w-14 lg:h-14 bg-gray-100 rounded-full group-data-[state=open]:bg-white transition-colors duration-300">
                    {faq.id}
                  </span>{" "}
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
