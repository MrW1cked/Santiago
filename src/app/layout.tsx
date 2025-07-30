import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PuzzleBackground from "./PuzzleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago Magalhães",
  description: "Olá, eu sou o Santiago Magalhães!",
};

const COLORS = [
  "#FF6F61",
  "#FFD700",
  "#88B04B",
  "#009B77",
  "#92A8D1",
  "#6B5B95",
  "#F7CAC9",
  "#FFB347",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        <div className="relative w-full flex flex-col items-center pt-8 pb-4 px-4 sm:px-8 z-10">
          <img
            src="/Title.png"
            alt="Título"
            className="w-full max-w-xs sm:max-w-md h-auto mx-auto select-none pointer-events-auto"
          />
          <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-wide text-center select-none pointer-events-auto">
            Olá, eu sou o<br />
            <span className="block mt-2">
              {"SANTIAGO MAGALHÃES!".split("").map((char, idx) => (
                <span
                  key={idx}
                  style={{
                    color: COLORS[idx % COLORS.length],
                  }}
                  className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider"
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
        </div>
        <main className="w-full max-w-screen-md mx-auto px-4 sm:px-8 pt-4 pb-8">
          {children}
        </main>
        <PuzzleBackground />
      </body>
    </html>
  );
}
