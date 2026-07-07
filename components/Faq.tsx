"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Do you buy or take ownership of our product?",
    answer:
      "No. Euro-Cape Partners operates as a broker and sales agent, not a trading house. We never take title to product or hold inventory. Every sale is a direct transaction between your business and the European buyer.",
  },
  {
    question: "How are you compensated?",
    answer:
      "We work on a commission basis tied to the sales we generate on your behalf. Our return grows only when your export volumes do, which keeps our incentives aligned with your long-term growth rather than a single shipment.",
  },
  {
    question: "Which product categories do you work with?",
    answer:
      "Tree nuts (including macadamias, pecans, and almonds), dried fruits (raisins, apricots, prunes, figs, and mixed formats), and vegetables and general food products. We do not work with seafood or marine products.",
  },
  {
    question: "Which European markets do you cover?",
    answer:
      "We are based in Greece, giving us a working position in Southern Europe with direct routes into Northern European markets, so we can represent your product across both regions.",
  },
  {
    question: "How does a partnership with Euro-Cape Partners start?",
    answer:
      "It starts with a conversation about your product range, current export status, and where you want to grow. From there we outline which services (distributor search, buyer prospecting, sales representation, or a combination) fit your stage of export readiness.",
  },
  {
    question: "Do you handle import documentation and compliance?",
    answer:
      "We guide you through the certificates, labelling, and compliance paperwork EU buyers and customs authorities expect for dry goods and produce shipments, and coordinate with your logistics team on delivery windows.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-forest/10 border-y border-forest/10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-lg font-semibold text-forest-dark">
                {faq.question}
              </span>
              <span
                className={`shrink-0 text-2xl leading-none text-clay transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-soft">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
