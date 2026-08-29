import React from "react";
import { AVAILABLE_FOR_WORK, HERO_STACK, PROFILE } from "@/data/profile";

export default function HeroSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 items-center gap-16 py-24 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-3.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-[11.5px] text-muted">
              {AVAILABLE_FOR_WORK
                ? "Available for senior roles & contracts"
                : "Currently engaged — open to conversations"}
            </span>
          </p>

          <h1 className="mb-5 text-[clamp(38px,5.4vw,70px)] font-semibold leading-[0.98] tracking-[-0.035em]">
            Vipisanan
            <br />
            Esvaramoorthy
          </h1>

          <p className="mb-3.5 font-mono text-sm text-accent">
            {PROFILE.role} · {PROFILE.headline}
          </p>

          <p className="mb-7 max-w-[52ch] text-lg leading-relaxed text-muted">
            {PROFILE.summary}
          </p>

          <div className="mb-9 flex max-w-[52ch] items-center gap-2.5 rounded-lg border border-line border-l-2 border-l-accent bg-surface px-4 py-3.5">
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-faint">
              now
            </span>
            <span className="text-[14.5px] leading-snug text-muted">
              {PROFILE.currentRole} at{" "}
              <strong className="font-semibold text-ink">{PROFILE.currentCompany}</strong>{" "}
              — {PROFILE.currentDomain}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#reach-out"
              className="rounded-lg bg-ink px-5.5 py-3.5 text-[14.5px] font-semibold !text-canvas transition-colors hover:bg-accent hover:!text-accent-contrast"
            >
              Start a conversation
            </a>
            <a
              href="#sample-work"
              className="rounded-lg border border-line bg-surface px-5.5 py-3.5 text-[14.5px] font-medium !text-ink transition-colors hover:border-faint"
            >
              See selected work
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-1.5 font-mono text-[11px] text-faint">~/about-me</span>
          </div>
          <img
            src={PROFILE.photo}
            alt={`Portrait of ${PROFILE.name}, ${PROFILE.role}`}
            width={640}
            height={640}
            className="block aspect-square w-full object-cover grayscale-[25%]"
          />
          <dl className="grid grid-cols-2 border-t border-line">
            <div className="border-r border-line px-4.5 py-4">
              <dd className="font-mono text-[22px] font-semibold text-ink">
                {PROFILE.yearsExperience}
              </dd>
              <dt className="mt-0.5 font-mono text-[10.5px] uppercase tracking-wider text-faint">
                years shipping
              </dt>
            </div>
            <div className="px-4.5 py-4">
              <dd className="font-mono text-[22px] font-semibold text-ink">04</dd>
              <dt className="mt-0.5 font-mono text-[10.5px] uppercase tracking-wider text-faint">
                products live
              </dt>
            </div>
          </dl>
        </div>
      </div>

      <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 border-y border-line py-5">
        {HERO_STACK.map((tech) => (
          <li key={tech} className="font-mono text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
