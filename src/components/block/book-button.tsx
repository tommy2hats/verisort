import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02FreeIcons } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CtaForm from "./cta-form";

export default function BookCallButton() {
  return (
    <Dialog>
      <form>
        <DialogTrigger>
          <Button size="lg" className="mx-auto w-fit px-5">
            <span className="mr-1 size-2 rounded-full bg-green-400" />
            Book a call
            <HugeiconsIcon icon={ArrowRight02FreeIcons} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="mb-5">
            <DialogTitle>Book a call</DialogTitle>
            <DialogDescription>
              Fill out the form below to book a call with us.
            </DialogDescription>
          </DialogHeader>
          <CtaForm />
          {/* <DialogFooter>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Book call</Button>
          </DialogFooter> */}
        </DialogContent>
      </form>
    </Dialog>
  );
}
