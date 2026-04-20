"use client";

import { useState } from "react";

const faqItems: { question: string; answer: string }[] = [
  {
    question: "What happens if I need major work — am I covered?",
    answer:
      "Yes. Member pricing applies to every procedure we offer — fillings, crowns, implants, veneers, root canals, and sedation dentistry. You'll know your exact price before anything starts. No surprises, no bills in the mail three weeks later.",
  },
  {
    question: "I already have insurance through my job. Why would I switch?",
    answer:
      "You don't have to switch — but run the math. Your premiums, copays, deductibles, and annual cap all add up. Most members with employer insurance find they're still paying out of pocket on anything beyond basic cleanings. Gleam covers the gap for less than most monthly premiums.",
  },
  {
    question: "What if I signed up and then never go?",
    answer:
      "That's on you — but we make it hard not to come in. One-click booking, same-week appointments, and 6 locations across LA means there's no excuse. Most members who signed up thinking they'd barely use it end up coming 3-4 times a year once the friction is gone.",
  },
  {
    question: "Is this just for people without insurance?",
    answer:
      "Not at all. About half our members have employer insurance and use Gleam for everything insurance won't touch — cosmetic procedures, implants, veneers, and anything that hits their deductible first. Insurance covers less than people think. Gleam covers the rest.",
  },
  {
    question: "How is this different from just going to a cheap dentist?",
    answer:
      "Cheap dentists make money by upselling procedures you may not need. Gleam makes money on membership — so we have zero financial incentive to recommend anything unnecessary. We're literally on your side when it comes to what you actually need done.",
  },
  {
    question: "What if I need a procedure you don't offer?",
    answer:
      "We'll refer you to a trusted specialist and make sure you're not going in blind. Transparent pricing and honest recommendations, even when the answer isn't us.",
  },
  {
    question: "Why would I pay for this when I already pay for insurance?",
    answer:
      "Because insurance was designed to protect the insurance company, not your teeth. It caps out at $1,500, makes you wait 6 months before covering anything real, and still sends you a bill after every visit. Gleam costs less than most monthly premiums — and actually covers what you need.",
  },
  {
    question: "What's the catch?",
    answer:
      "Because insurance was designed to protect the insurance company, not your teeth. It caps out at $1,500, makes you wait 6 months before covering anything real, and still sends you a bill after every visit. Gleam costs less than most monthly premiums — and actually covers what you need.",
  },
  {
    question: "How do I know the member price is actually a good deal?",
    answer:
      "Because insurance was designed to protect the insurance company, not your teeth. It caps out at $1,500, makes you wait 6 months before covering anything real, and still sends you a bill after every visit. Gleam costs less than most monthly premiums — and actually covers what you need.",
  },
  {
    question:
      "What if I need something serious — like an implant or a crown?",
    answer:
      "That's exactly when membership matters most. Those are the procedures insurance fights you on and cheap dentists overcharge for. Gleam members get a flat member rate upfront — you know the number before you sit down.",
  },
  {
    question: "Am I locked in?",
    answer:
      "That's exactly when membership matters most. Those are the procedures insurance fights you on and cheap dentists overcharge for. Gleam members get a flat member rate upfront — you know the number before you sit down.",
  },
  {
    question: "How is this different from just finding a dentist on Yelp?",
    answer:
      "That's exactly when membership matters most. Those are the procedures insurance fights you on and cheap dentists overcharge for. Gleam members get a flat member rate upfront — you know the number before you sit down.",
  },
  {
    question: "What if I barely go to the dentist — is it still worth it?",
    answer:
      "That's exactly when membership matters most. Those are the procedures insurance fights you on and cheap dentists overcharge for. Gleam members get a flat member rate upfront — you know the number before you sit down.",
  },
  {
    question: "Does this replace my dentist completely?",
    answer:
      "That's exactly when membership matters most. Those are the procedures insurance fights you on and cheap dentists overcharge for. Gleam members get a flat member rate upfront — you know the number before you sit down.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="h-1 w-full bg-[#FFF159]" aria-hidden />
      <div
        className="min-h-[clamp(10rem,28vh,22rem)] w-full bg-white md:min-h-[clamp(12rem,32vh,26rem)]"
        aria-hidden
      />

      <section className="w-full font-helvetica-neue-regular" aria-labelledby="faq-heading">
        <div className="flex h-[88px] items-center justify-center bg-[#3D3D3A] text-center md:h-[110px]">
          <h2
            id="faq-heading"
            className="text-[34px] font-bold uppercase text-white sm:text-[44px] md:text-[56px]"
          >
            FAQ
          </h2>
        </div>

        <div className="bg-[#F9F5F1] px-4 py-2 md:px-8 md:py-4">
          <div className="divide-y-2 divide-black/80 mx-[18px]">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              return (
                <div key={index} className="py-8 md:py-10">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={`faq-trigger-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start gap-4 text-left"
                      onClick={() =>
                        setOpenIndex((prev) =>
                          prev === index ? null : index
                        )
                      }
                    >
                      <span className="flex-1 text-[17px] font-semibold leading-snug text-black md:text-[24px]">
                        {item.question}
                      </span>
                      <span
                        className="mt-0.5 shrink-0 text-black transition-transform duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0 md:mt-1"
                        aria-hidden
                        style={{
                          transform: isOpen ? "rotate(180deg)" : undefined,
                        }}
                      >
                        <svg
                          className="size-5 md:size-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="pt-3"
                        aria-hidden={!isOpen}
                      >
                        <p className="text-[16px] font-normal leading-relaxed text-black md:text-[24px] md:leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
