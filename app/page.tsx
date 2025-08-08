// app/page.tsx
import { Inter, Press_Start_2P } from "next/font/google";
import HeroIllustration from "./components/HeroIllustration";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <main
      className={`min-h-screen ${inter.className} flex items-center justify-center bg-slate-900`}
    >
      <div className="relative mx-auto max-w-4xl px-4 py-10 md:py-16">
        <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl ring-1 ring-black/10 px-6 py-8 md:px-12 md:py-12">
          <div className="mx-auto max-w-xl">
            <HeroIllustration />
          </div>

          <h1
            className={`mt-8 text-center text-2xl md:text-3xl text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,.35)] ${pixel.className}`}
          >
            AGENTS AT WORK
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-center text-base md:text-lg leading-relaxed text-slate-200">
            Building a meta-template generator for Mastra.
            <br className="hidden sm:block" />
            <span className="font-mono tracking-wide">
              Fewer keystrokes. More agents.
            </span>{" "}
            🚀
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://mastra.ai/blog/mastra-build-recap"
              className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110 active:translate-y-px"
            >
              Judge Mode: Enabled ✅
            </Link>

            <a
              href="https://mastra.ai/agents"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700/70 bg-black/20 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800/60"
            >
              Built with Mastra
              <span className="ml-1 text-xs text-slate-400">
                (because tools deserve manners)
              </span>
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-xs text-slate-400">
            P.S. If this page is up during demo time, we’re probably furiously
            hooking deploying. Refresh for ✨ magic ✨.
          </p>
        </section>
      </div>
    </main>
  );
}