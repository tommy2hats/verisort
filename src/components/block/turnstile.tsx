"use client";

import { useEffect, useRef } from "react";

export default function Turnstile({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const turnstile = window.turnstile;
    if (!turnstile) return;

    // Remove any existing widget before rendering a new one
    if (widgetId.current) {
      turnstile.remove(widgetId.current);
      widgetId.current = null;
    }

    widgetId.current = turnstile.render(el, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string,
      callback: onVerify,
    });

    return () => {
      if (widgetId.current) {
        turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [onVerify]);

  return <div ref={ref} />;
}
