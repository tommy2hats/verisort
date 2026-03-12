"use client";

import {
  FullScreenIcon,
  MinimizeScreenIcon,
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeMute02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type MuxPlayerElement from "@mux/mux-player";
import MuxPlayer from "@mux/mux-player-react";
// import { Pause, Play, Volume2, VolumeOff } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function VideoPlayer({ playbackId }: { playbackId: string }) {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [_hovered, setHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = useRef<MuxPlayerElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoaded = useCallback(() => setLoaded(true), []);

  const togglePlay = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: This div is used to detect mouse leave events for the hover state of the controls.
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full overflow-hidden transition-all md:scale-[80%] lg:scale-100",
        loaded && "border border-border/30",
      )}
      style={{ aspectRatio: "16/9", backgroundColor: "#fff" }}
      onMouseLeave={() => setHovered(false)}
      onDoubleClick={toggleFullscreen}
    >
      <MuxPlayer
        ref={ref}
        playbackId={playbackId}
        autoPlay
        muted
        // loop
        onPlaying={handleLoaded}
        style={{
          "--controls": "none",
          "--media-object-fit": "cover",
          "--media-background-color": "transparent",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          opacity: loaded ? 1 : 0,
          position: "relative",
          zIndex: 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        accentColor="#ffffff"
      />
      <div
        className={cn(
          "absolute inset-0 z-10 flex items-end px-2 pb-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          {
            "opacity-100": !playing,
          },
        )}
      >
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={togglePlay}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-white/20 text-black backdrop-blur-md transition-colors hover:bg-white/30"
            >
              {playing ? (
                <HugeiconsIcon icon={PauseIcon} />
              ) : (
                <HugeiconsIcon icon={PlayIcon} />
              )}
            </Button>
            <Button
              type="button"
              onClick={toggleMute}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-white/20 text-black backdrop-blur-md transition-colors hover:bg-white/30"
            >
              {muted ? (
                <HugeiconsIcon icon={VolumeMute02Icon} />
              ) : (
                <HugeiconsIcon icon={VolumeHighIcon} />
              )}
            </Button>
          </div>
          <Button
            type="button"
            onClick={toggleFullscreen}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-white/20 text-black backdrop-blur-md transition-colors hover:bg-white/30"
          >
            {isFullscreen ? (
              <HugeiconsIcon icon={MinimizeScreenIcon} />
            ) : (
              <HugeiconsIcon icon={FullScreenIcon} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
