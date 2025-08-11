// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mastra x Routine — Coming Soon",
  description: "A tiny tease before the agent party.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
        {/* use pressStart.className only where you want the arcade font */}
      </body>
    </html>
  );
}