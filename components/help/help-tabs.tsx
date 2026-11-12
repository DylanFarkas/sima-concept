import Link from "next/link";
import { helpPages, type HelpHref } from "@/lib/home-content";
import { focusDark } from "@/components/shared/editorial";

export function HelpTabs({ current }: { current: HelpHref }) {
  return (
    <nav aria-label="Ayuda" className="mt-14 max-w-3xl sm:mt-16">
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {helpPages.map((page) => {
          const active = page.href === current;
          return (
            <li key={page.href}>
              <Link
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={`text-[13px] leading-6 transition-colors duration-300 ${
                  active
                    ? "text-white underline decoration-white/80 decoration-1 underline-offset-[5px]"
                    : "text-white/40 hover:text-white"
                } ${focusDark}`}
              >
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
