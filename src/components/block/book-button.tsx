import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { ArrowRight02FreeIcons } from "@hugeicons/core-free-icons";

export default function BookCallButton() {
  return (
    <Button size="lg" className="mx-auto w-fit px-5">
      <span className="mr-1 size-2 rounded-full bg-green-400" />
      Book a call
      <HugeiconsIcon icon={ArrowRight02FreeIcons} />
    </Button>
  );
}
