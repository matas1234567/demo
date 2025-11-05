import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in each solution package?",
    answer: "Each package includes design, development, testing, and deployment. The One Site Solution is perfect for single-page sites, the Dynamic Solution adds CMS and multi-page functionality, while the Custom Solution is tailored entirely to your specific requirements with unlimited features.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Timelines vary by package: One Site Solution typically takes 1-2 weeks, Dynamic Solution takes 3-4 weeks, and Custom Solutions are estimated on a case-by-case basis. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! All packages include post-launch support. One Site Solution includes 1 month, Dynamic Solution includes 3 months, and Custom Solution includes 12 months of support. Extended support packages are also available.",
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Absolutely! We make it easy to upgrade as your business grows. We'll work with you to seamlessly transition to a more advanced solution while preserving your existing content and design.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, TypeScript, and Tailwind CSS for frontend development. For backend and CMS needs, we choose the best tools based on your specific requirements.",
  },
  {
    question: "Do you offer hosting services?",
    answer: "We help you set up hosting on reliable platforms and can manage it for you if needed. Hosting costs are separate from our development fees, and we'll recommend the best option for your budget and requirements.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="text-primary hover:underline font-medium"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

