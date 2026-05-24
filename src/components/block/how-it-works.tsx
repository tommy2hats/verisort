import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const folder_name = "/steps-shgsgv";

const STEPS = [
  {
    image: `${folder_name}/step-1.png`,
    title: "Upload your documents",
    width: 888,
    height: 555,
    description: "Upload the documents your team already works with.",
  },
  {
    image: `${folder_name}/step-2.png`,
    title: "Ask in plain English",
    width: 888,
    height: 555,
    description: "Ask questions about your documents as you normally would.",
  },
  {
    image: `${folder_name}/step-3.png`,
    title: "Get answers instantly",
    width: 888,
    height: 555,
    description:
      "Verisort finds the answer and shows the source chunk and document.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10">
      <div className="mx-auto flex flex-col items-center space-y-1">
        <Badge>How it works</Badge>
        <h2 className="text-center font-normal text-2xl md:text-3xl">
          Three <span className="font-semibold italic text-accent">Simple</span>{" "}
          steps
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {STEPS.map((step, _index) => (
          <Card key={step.title} className="bg-white py-0">
            <CardHeader className="space-y-1 pt-4">
              <span className="w-fit bg-secondary px-3 py-1 font-mono">
                0{++_index}
              </span>
              <CardTitle className="mt-3 text-xl md:text-lg">
                {step.title}
              </CardTitle>
              <CardDescription className="text-foreground/70 md:text-sm">
                {step.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative overflow-hidden p-0">
              <Image
                src={step.image}
                alt={step.title}
                width={step.width}
                height={step.height}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
              {/* <span className="bg-linear-to-b bg-opacity-30 from-neutral-50 to-neutral-200 bg-clip-text text-center font-semibold font-stretch-extra-expanded text-5xl text-transparent md:text-3xl">
                0{_index + 1}
              </span> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
