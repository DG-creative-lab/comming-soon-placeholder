"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Title = ({ text }: { text: string }) => {
  const letters = text.split("");
  return (
    <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-wider text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: 16, opacity: 0, rotate: -6 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.03 * i, type: "spring", stiffness: 240, damping: 20 }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </h1>
  );
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-animated bg-noise overflow-hidden">
      {/* glow grid overlay */}
      <div className="absolute inset-0 grid-faint" />

      {/* floating emoji bits */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-[10%] top-[20%] floaty text-4xl">🧠</div>
        <div className="absolute right-[15%] top-[35%] floaty text-4xl" style={{ animationDelay: "0.6s" }}>⚙️</div>
        <div className="absolute left-[18%] bottom-[22%] floaty text-4xl" style={{ animationDelay: "1.2s" }}>🪄</div>
        <div className="absolute right-[20%] bottom-[15%] floaty text-4xl" style={{ animationDelay: "0.9s" }}>🤖</div>
      </div>

      <section className="relative z-10 flex items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-3xl text-center space-y-8">
          <Title text={"MAS^TRA // ROUTINE"} />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-white/80"
          >
            Agent templates are training… coffee is brewing… judges are plotting. <br />
            We’re shipping something delightfully over-engineered very soon.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 180 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="rounded-full bg-black/30 px-4 py-2 text-[10px] md:text-xs text-white/80 ring-1 ring-white/15">
              v0.0.1-beta • agent bakery preheating
            </span>
            <span className="rounded-full bg-black/30 px-4 py-2 text-[10px] md:text-xs text-white/80 ring-1 ring-white/15">
              #HackathonMode
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="pt-4"
          >
            <Link
              href="https://x.com/search?q=mastra%20routine"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-[10px] md:text-xs text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              <span>Follow the crumbs</span>
              <span className="text-base">🍪</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 2.2 }}
            className="pt-8 text-[9px] md:text-xs text-white/60"
          >
            P.S. Mastra folks: we’ll stop mispronouncing it if you let this win 😉
          </motion.div>
        </div>
      </section>
    </main>
  );
}