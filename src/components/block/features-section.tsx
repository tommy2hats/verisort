import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const folder_name = "/features-wewee";

const FEATURES = [
  {
    image: `${folder_name}/speed.png`,
    title: "Answers in seconds",
    width: 1920,
    height: 720,
    aspectRatio: 16 / 9,
    description:
      "Handle complex documents and get answers in just a few seconds.",
  },
  {
    image: `${folder_name}/tracability.png`,
    title: "Every answer is traceable",
    width: 1920,
    height: 720,
    aspectRatio: 16 / 9,
    description:
      "Each response contains citations, so teams can verify exactly where the information came from.",
  },
  {
    image: `${folder_name}/doc-types.png`,
    title: "Built for complex documents",
    width: 1000,
    height: 1000,
    aspectRatio: 1 / 1,
    scale: 1,
    description:
      "Retrieve precise answers across thousands of documents in seconds.",
  },
  {
    image: `${folder_name}/accuracy.png`,
    title: "Accurate",
    width: 1000,
    height: 1000,
    scale: 1,
    aspectRatio: 1 / 1,
    description:
      "Our AI Agent learns from your files and answers any question you ask it.",
  },
  {
    image: `${folder_name}/security.png`,
    title: "Secure",
    width: 1000,
    height: 1000,
    scale: 1,
    aspectRatio: 1 / 1,
    description: "Security is our priority. your data stays private always.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10">
      <h2 className="text-center font-normal text-2xl text-foreground/85 md:text-3xl">
        <span className="italic">Why</span> teams{" "}
        <span className="font-semibold text-foreground/95">love</span> Verisort
        AI
      </h2>
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {FEATURES.slice(0, 2).map((feature) => (
            <Card key={feature.title} className="shadow">
              <CardHeader
                className="relative overflow-hidden p-0"
                style={{
                  aspectRatio: feature.aspectRatio,
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={feature.width}
                  height={feature.height}
                  className="scale-90"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
              </CardHeader>
              <CardContent className="space-y-1">
                <CardTitle className="text-xl md:text-lg">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 md:text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.slice(2).map((feature) => (
            <Card key={feature.title} className="shadow">
              <CardHeader className="relative mx-auto aspect-square w-full max-w-84 overflow-hidden p-0 md:max-h-60">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={feature.width}
                  height={feature.height}
                  className="h-full w-full object-cover"
                  style={{
                    scale: feature.scale,
                  }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
              </CardHeader>
              <CardContent className="flex h-fit flex-col justify-end gap-1">
                <CardTitle className="text-xl md:text-lg">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 md:text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
