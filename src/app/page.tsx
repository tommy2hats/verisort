import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import FaqSection from "@/components/block/faq-section";
import FeaturesSection from "@/components/block/features-section";
import { VideoPlayer } from "@/components/block/video-player";
import { Separator } from "@/components/ui/separator";
import HowItWorks from "@/components/block/how-it-works";
import CtaSection from "@/components/block/cta";
import BookCallButton from "@/components/block/book-button";
import FootLinks from "@/components/block/foot-links";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 pb-16 lg:space-y-20">
      <section className="flex flex-col gap-10 md:gap-5 lg:flex-row-reverse lg:pt-16">
        <VideoPlayer playbackId="01M2cyxz7ddEDmZknVKTJvp00lwTMZITgfWkQImP63MW8" />

        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:justify-center lg:text-start">
          <h1 className="mx-auto max-w-sm font-normal text-3xl text-foreground/85 leading-tight tracking-tight md:max-w-md md:text-4xl lg:mx-0 lg:max-w-none lg:text-4xl">
            Your team{" "}
            <span className="font-semibold text-foreground/95">
              wastes hours
            </span>{" "}
            digging through documents?
          </h1>
          <div className="text-base text-muted-foreground lg:text-lg">
            <p className="text-balance">
              Verisort AI Agent finds the answer in{" "}
              <span className="cursor-default font-semibold text-foreground/80 underline underline-offset-4 duration-300 hover:text-foreground">
                seconds
              </span>
              .
            </p>
            <p className="flex items-center justify-center gap-2 lg:justify-start">
              <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5" />
              Secure. Accurate. Fast
            </p>
          </div>
          <BookCallButton />
        </div>
      </section>

      <Separator />

      <FeaturesSection />

      <Separator />

      <HowItWorks />

      <Separator />

      <CtaSection />

      <Separator />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <FaqSection />
        <FootLinks />
      </section>
    </main>
  );
}
