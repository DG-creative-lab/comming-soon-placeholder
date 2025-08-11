// app/page.tsx
import HeroIllustration from "./components/HeroIllustration";
import { Inter, Press_Start_2P } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const arcade = Press_Start_2P({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Page() {
  return (
    <main
      className={`
        relative min-h-[100svh] overflow-hidden
        bg-[#0f1216] text-white ${inter.className}
      `}
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* animated gradient, keep subtle */}
        <div className="absolute inset-0 bg-animated opacity-35" />
        {/* grid + noise */}
        <div className="absolute inset-0 grid-faint" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24 text-center">
        {/* hero illustration ABOVE the copy, in normal flow */}
        <div className="mx-auto w-[min(960px,92vw)] max-w-4xl" aria-hidden>
          <HeroIllustration />
        </div>

        <h1
          className={`${arcade.className} mt-8 text-4xl md:text-6xl text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,.4)]`}
        >
          AGENTS AT WORK
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg md:text-xl leading-relaxed text-zinc-100/90">
          Building a meta-template generator for Mastra.
          <br className="hidden sm:block" />
          <span className="font-mono tracking-wide">Fewer keystrokes. More agents.</span> 🚀
        </p>

        {/* removed the Judge Mode link */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://mastra.ai/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm text-zinc-100 transition hover:bg-black/40"
            aria-label="Mastra agents (opens in new tab)"
          >
            Built with Mastra
            <span className="ml-1 text-xs text-zinc-300/80">(because tools deserve manners)</span>
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-zinc-300/70">
          P.S. If this page is up during demo time, we’re probably furiously deploying. Refresh for ✨ magic ✨.
        </p>
      </section>
    </main>
  );
}