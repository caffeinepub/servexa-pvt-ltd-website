import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We provide home services across Kolkata and Howrah. Our technicians are available for doorstep service in all major localities within these areas.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! We offer same-day service for most repairs and installations. Contact us early in the day for the best availability.',
  },
  {
    question: 'What brands do you service?',
    answer: 'We service all major brands including LG, Samsung, Whirlpool, Godrej, Voltas, Carrier, and many more. Our technicians are trained to work with all leading appliance brands.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is transparent and competitive. The cost depends on the type of service and parts required. We provide a detailed estimate before starting any work, with no hidden charges.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Yes, all our technicians are skilled, verified, and certified professionals with years of experience in their respective fields.',
  },
  {
    question: 'Do you provide warranty on repairs?',
    answer: 'Yes, we provide warranty on both parts and labor. The warranty period varies depending on the type of service and parts used.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gold-accent">Questions</span>
          </h2>
          <p className="text-xl text-white/80">Everything you need to know about our services</p>
        </div>

        <div className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-gold-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
