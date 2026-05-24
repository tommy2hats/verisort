import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "what",
    question: "What exactly does Verisort AI build?",
    answer:
      "We build a custom AI system tailored to your team. You upload your documents — contracts, policies, manuals, anything — and your team can ask questions in plain language and get accurate answers instantly. No technical skills needed.",
  },
  {
    value: "dashboard",
    question: "Do we get a dashboard or interface?",
    answer:
      "Yes. Every system comes with a clean, user-friendly web interface — including full analytics, document management, and team management. Your team can upload, organize, and categorize documents, manage user access, and track usage — all from one place.",
  },
  {
    value: "who",
    question: "Who is this for?",
    answer:
      "Any team that works with lots of documents — law firms, real estate agencies, compliance departments, operations teams, and more. If your people spend time searching for information, this is for them.",
  },
  {
    value: "secure",
    question: "Is our data secure?",
    answer:
      "Absolutely. Your documents stay private and are never shared or used to train any external models. We deploy systems with enterprise-grade security tailored to your requirements.",
  },
  {
    value: "how-long",
    question: "How long does it take to set up?",
    answer:
      "Most teams are up and running within days, not months. We handle everything — from setup to onboarding your team.",
  },
  {
    value: "accuracy",
    question: "How accurate are the answers?",
    answer:
      "The AI only answers from your documents — it doesn\u2019t make things up. Every response is grounded in your actual files, so your team can trust what they get.",
  },
  {
    value: "scale",
    question: "Can it handle thousands of documents?",
    answer:
      "Yes. The system is built to scale with your team. Whether you have hundreds or tens of thousands of documents, performance stays fast and reliable.",
  },
  {
    value: "cost",
    question: "How much does it cost?",
    answer:
      "Pricing depends on your team size and document volume. Book a demo and we\u2019ll give you a clear quote — no hidden fees.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-lg space-y-3 md:order-last">
      <h2 className="text-xl">FAQs</h2>
      <Accordion defaultValue={["what"]}>
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
