"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TABS = [
  { label: "FRONTEND", value: "frontend" },
  { label: "AI/ML", value: "ai-ml" },
] as const;

export default function Tabs() {
  const active = useSearchParams().get("tab") ?? "frontend";

  return (
    <div
      role="tablist"
      className="tabs flex justify-start gap-14 my-6 md:text-sm"
    >
      {TABS.map(({ label, value }) => {
        const isActive = active === value;
        return (
          <Link
            key={value}
            href={`?tab=${value}`}
            scroll={false}
            role="tab"
            aria-selected={isActive}
            className={`pb-1 -mb-px border-b-2 font-medium relative py-1 font-body text-xs transition-colors
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0
                after:bg-gold after:transition-[width] after:duration-300
                hover:text-cream hover:after:w-full  ${
                  isActive
                    ? "border-b-gold text-cream"
                    : "border-transparent text-muted"
                }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
