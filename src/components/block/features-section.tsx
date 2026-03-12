import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const folder_name = "/features-sdgfsdg";

const FEATURES = [
  {
    image: `${folder_name}/speed.png`,
    title: "Answers in seconds",
    width: 1920,
    height: 720,
    aspectRatio: 16 / 9,
    description:
      "Retrieve precise answers across thousands of documents in seconds.",
  },
  {
    image: `${folder_name}/tracability.png`,
    title: "Every answer is traceable",
    width: 1920,
    height: 720,
    aspectRatio: 16 / 9,
    description:
      "Each response is linked to the original document, so teams can verify exactly where the information came from.",
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
      "Our AI Agent is trained on your documents and can answer any question you have about them.",
  },
  {
    image: `${folder_name}/security.png`,
    title: "Secure",
    width: 1000,
    height: 1000,
    scale: 1,
    aspectRatio: 1 / 1,
    description:
      "We take security seriously. Our AI Agent is trained on your documents and we never share your data with anyone else.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-center font-medium text-2xl md:text-3xl">
        <span className="italic">Why</span> teams love Verisort AI
      </h2>
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {FEATURES.slice(0, 2).map((feature) => (
            <Card key={feature.title}>
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
              <CardContent>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {FEATURES.slice(2).map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="relative mx-auto aspect-square w-full max-w-84 overflow-hidden p-0">
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
              <CardContent>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-foreground/70">
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
