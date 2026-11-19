"use client";

import { useEffect, useState } from "react";
import { SimaIcon } from "@/components/icons";
import {
  announcementText,
  announcements,
  type Announcement,
} from "@/lib/announcements";

const INTERVAL_MS = 5200;
const SLIDE_MS = 780;
const SLIDE_HEIGHT = "2.75rem";

const slides = [...announcements, announcements[0]];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setInstant(false);
      setIndex((current) => current + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index !== announcements.length) return;
    const timeout = window.setTimeout(() => {
      setInstant(true);
      setIndex(0);
    }, SLIDE_MS);
    return () => window.clearTimeout(timeout);
  }, [index]);

  return (
    <div
      role="region"
      aria-label="Anuncios"
      className="relative overflow-hidden border-b border-ink/15 bg-cream text-ink"
    >
      <div className="overflow-hidden" style={{ height: SLIDE_HEIGHT }}>
        <div
          className="announce-track"
          data-instant={instant ? "" : undefined}
          style={{ transform: `translateY(calc(${index} * -${SLIDE_HEIGHT}))` }}
        >
          {slides.map((item, slideIndex) => (
            <AnnouncementSlide
              key={`${announcementText(item)}-${slideIndex}`}
              item={item}
            />
          ))}
        </div>
      </div>
      <ul className="sr-only">
        {announcements.map((item) => (
          <li key={announcementText(item)}>{announcementText(item)}</li>
        ))}
      </ul>
    </div>
  );
}

function AnnouncementSlide({ item }: { item: Announcement }) {
  return (
    <p
      aria-hidden="true"
      className="flex items-center justify-center gap-1.5 px-5 text-center font-sans text-[13px] leading-none tracking-[0.02em] sm:gap-2 sm:text-[14px]"
      style={{ height: SLIDE_HEIGHT }}
    >
      <SimaIcon name={item.icon} className="h-[1.15rem] w-[1.15rem] shrink-0 text-ink/55 sm:h-5 sm:w-5" />
      <span className="min-w-0 truncate">
        <span className="text-ink/60">{item.lead}</span>{" "}
        <span className="font-bold tracking-[0.03em] text-ink">{item.strong}</span>
      </span>
    </p>
  );
}
