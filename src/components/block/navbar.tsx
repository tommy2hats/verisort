"use client";

import { ArrowRight02FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Constants } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isDetached, setIsDetached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDetached(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      layout
      className={cn(
        "fixed top-0 left-0 z-50 w-full",
        isDetached ? "px-4" : "px-0",
      )}
      transition={{ type: "spring", stiffness: 360, damping: 34, mass: 0.35 }}
    >
      <motion.nav
        layout
        className={cn(
          "flex max-w-6xl items-center justify-between bg-background/50 px-6 py-4 backdrop-blur-3xl md:mx-auto",
          isDetached ? "border/40 mt-4 border px-4 py-2" : "mt-0",
        )}
        transition={{ type: "spring", stiffness: 360, damping: 34, mass: 0.35 }}
      >
        <h2 className="font-ike text-3xl">{Constants.SITE_NAME}</h2>
        <Button className="px-4">
          <span className="mr-1 size-2 rounded-full bg-green-400" />
          Book a call
          <span>
            <HugeiconsIcon icon={ArrowRight02FreeIcons} />
          </span>
        </Button>
      </motion.nav>
    </motion.div>
  );
}
