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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e6f0fa] text-neutral-900`}
      >
        <div className="relative w-full flex flex-col items-center justify-center pt-8 pb-4 px-4 sm:px-8 z-10">
          <img
            src="/Title.png"
            alt="Título"
            className="w-full max-w-xs sm:max-w-md h-auto mx-auto select-none pointer-events-auto"
          />
          <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-wide text-center select-none pointer-events-auto">
            <span className="block text-base sm:text-2xl mb-2">Olá, eu sou o</span>
            <span className="block mt-2 w-full max-w-full text-balance">
              <span className="flex flex-wrap justify-center w-full whitespace-pre-line break-words">
                {/* SANTIAGO */}
                {"SANTIAGO".split("").map((char, idx) => (
                  <span
                    key={"s-" + idx}
                    style={{ color: COLORS[idx % COLORS.length] }}
                    className="inline-block text-2xl xs:text-3xl sm:text-5xl font-extrabold uppercase tracking-wider leading-tight sm:leading-tight"
                  >
                    {char}
                  </span>
                ))}
                {/* Espaço entre as palavras, permite quebra */}
                <wbr />
                <span className="inline-block w-2" />
                {/* MAGALHÃES! */}
                {"MAGALHÃES!".split("").map((char, idx) => (
                  <span
                    key={"m-" + idx}
                    style={{ color: COLORS[(idx + 7) % COLORS.length] }}
                    className="inline-block text-2xl xs:text-3xl sm:text-5xl font-extrabold uppercase tracking-wider leading-tight sm:leading-tight"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <img
            src="/Santiago.jpeg"
            alt="Santiago Magalhães"
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover mx-auto mt-4 mb-4 border-4 border-white shadow-lg select-none pointer-events-auto"
          />
        </div>
        <main className="w-full max-w-screen-md mx-auto px-4 sm:px-8 pt-4 pb-8 flex flex-col items-center justify-center">
          {children}
        </main>
        <PuzzleBackground />
      </body>
    </html>
  );
}
