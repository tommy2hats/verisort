"use client";

import CtaForm from "./cta-form";

export default function CtaSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10">
      <div className="space-y-5 text-center">
        <div className="mx-auto max-w-md text-center font-normal text-4xl text-foreground/85 md:max-w-xl md:text-6xl">
          <h2>Ready to work </h2>
          <h2>
            <span className="font-semibold text-foreground/95">smarter</span>,
            not harder?
          </h2>
        </div>
        <p className="text-foreground/80 text-sm">
          Book a call with us today. Takes less than a minute.
        </p>
      </div>

      <CtaForm />
      {/* <div className="flex flex-col items-center gap-1 text-center">
        <BookCallButton />
      </div> */}
    </section>
  );
}
