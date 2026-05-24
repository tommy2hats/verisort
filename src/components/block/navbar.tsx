"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Constants } from "@/lib/constant";
import { cn } from "@/lib/utils";
import BookCallButton from "./book-button";

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
        isDetached ? "px-4" : "px-6",
      )}
      transition={{ type: "spring", stiffness: 360, damping: 34, mass: 0.35 }}
    >
      <motion.nav
        layout
        className={cn(
          "flex max-w-6xl items-center justify-between px-0 py-4 md:mx-auto",
          isDetached ? "bg-none" : "mt-0",
        )}
        transition={{ type: "spring", stiffness: 360, damping: 34, mass: 0.35 }}
      >
        {/* <Image
          src="/assets/logooeoeo.png"
          alt="Logo"
          width={700}
          height={300}
          className="w-28.75 md:w-40"
        /> */}
        <h2
          className={cn(
            "font-ike text-accent text-3xl",
            isDetached &&
              "border/40 mt-0 border bg-background/50 px-2 py-0 backdrop-blur-3xl",
          )}
        >
          {Constants.SITE_NAME}
        </h2>
        <div
          className={cn(
            "text-accent",
            isDetached &&
              "border/40 mt-0 border bg-background/50 px-0 py-0 backdrop-blur-3xl",
          )}
        >
          <BookCallButton />
        </div>
      </motion.nav>
    </motion.div>
  );
}
