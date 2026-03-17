import { Constants } from "@/lib/constant";
import BookCallButton from "./book-button";

const LINKS = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
];

export default function FootLinks() {
  return (
    <div className="flex flex-col justify-between gap-8 md:gap-0">
      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="font-ike text-5xl">{Constants.SITE_NAME}</h2>
          <p className="text-muted-foreground text-sm">
            Built for teams. Designed for document integlligence.
          </p>
        </div>

        <BookCallButton />
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {Constants.SITE_NAME}. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
