import {
  ArrowRight02FreeIcons,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import FaqSection from "@/components/block/faq-section";
import FeaturesSection from "@/components/block/features-section";
import { VideoPlayer } from "@/components/block/video-player";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 pb-16 md:space-y-20">
      <section className="flex flex-col gap-10 md:flex-row-reverse lg:pt-16">
        <VideoPlayer playbackId="01M2cyxz7ddEDmZknVKTJvp00lwTMZITgfWkQImP63MW8" />
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:justify-center md:text-start">
          <h1 className="mx-auto max-w-sm font-semibold text-3xl text-foreground/80 leading-tight tracking-tight md:mx-0 md:max-w-none md:text-2xl lg:text-4xl">
            Your team wastes hours digging through documents?
          </h1>
          <div className="text-base text-muted-foreground md:text-base lg:text-lg">
            <p className="text-balance">
              Our Proprietary Agent finds the answer in{" "}
              <span className="font-semibold text-foreground/80 underline underline-offset-4">
                seconds
              </span>
              .
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5" />
              Secure. Accurate. Fast
            </p>
          </div>
          <Button size="lg" className="mt-2 px-5 lg:mt-5">
            <span className="mr-1 size-2 rounded-full bg-green-400" />
            Book a call
            <HugeiconsIcon icon={ArrowRight02FreeIcons} />
          </Button>
        </div>
      </section>

      <Separator />

      <FeaturesSection />

      <Separator />

      <FaqSection />
    </main>
  );
}
