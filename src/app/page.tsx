"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Dados pessoais" },
    { label: "Em caso de Crise" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start relative z-1 bg-transparent pointer-events-auto">
      {/* Conteúdo principal da página */}
      <div className="w-full max-w-screen-md mx-auto px-4 sm:px-8 pt-4 pb-8 flex flex-col items-center justify-center">
        {/* Tabs */}
        <div className="flex flex-col items-center w-full mt-8">
          <div className="flex gap-4 mb-6 justify-center w-full">
            {tabs.map((t, idx) => (
              <button
                key={t.label}
                onClick={() => setTab(idx)}
                className={`px-6 py-2 rounded-full border-2 font-bold text-lg cursor-pointer transition-all duration-200 shadow-sm ${
                  tab === idx
                    ? "border-[#009B77] bg-[#F7CAC9] text-[#222] shadow-md"
                    : "border-[#eee] bg-white text-[#888]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: 18,
              minHeight: 180,
              minWidth: 280,
              maxWidth: 420,
              width: "90vw",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              padding: 24,
              fontSize: 18,
              color: "#222",
              textAlign: "center",
            }}
          >
            {tab === 0 && (
              <div>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
                  Contactos:
                </div>
                <div style={{ marginBottom: 6 }}>
                  Mãe:{" "}
                  <a
                    href="tel:914019208"
                    style={{
                      color: "#009B77",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    914019208
                  </a>
                </div>
                <div style={{ marginBottom: 6 }}>
                  Pai:{" "}
                  <a
                    href="tel:916905208"
                    style={{
                      color: "#009B77",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    916905208
                  </a>
                </div>
                <div style={{ marginBottom: 6 }}>
                  Madrinha:{" "}
                  <a
                    href="tel:916048005"
                    style={{
                      color: "#009B77",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    916048005
                  </a>
                </div>
              </div>
            )}
            {tab === 1 && (
              <div>
                Se estiver sozinho e em crise, fala-me sobre dinossauros, isso vai ajudar-me a acalmar-me!<br />
                <b>Eu adoro Dinossauros!</b>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
