"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Dados pessoais" },
    { label: "Em caso de Crise" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: 1,
        pointerEvents: "auto",
        background: "transparent",
      }}
    >
      {/* Conteúdo principal da página */}
      <div
        style={{
          width: "100vw",
          minHeight: 180,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0,
          pointerEvents: "auto",
        }}
      >
        <img
          src="/Title.png"
          alt="Título"
          style={{
            marginTop: 24,
            maxWidth: "90vw",
            height: "auto",
            pointerEvents: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            background: "transparent",
          }}
        />
        <h1
          style={{
            marginTop: 12,
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 1,
            textAlign: "center",
            userSelect: "none",
            pointerEvents: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            background: "none",
            WebkitBackgroundClip: "unset",
            WebkitTextFillColor: "unset",
            backgroundClip: "unset",
          }}
        >
          Olá, eu sou o<br />
          <span style={{ display: "block", marginTop: 8 }}>
            {"SANTIAGO MAGALHÃES!".split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  color: [
                    "#FF6F61",
                    "#FFD700",
                    "#88B04B",
                    "#009B77",
                    "#92A8D1",
                    "#6B5B95",
                    "#F7CAC9",
                    "#FFB347",
                  ][idx % 8],
                  fontSize: 36,
                  fontWeight: 900,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>
        <img
          src="/Santiago.jpeg"
          alt="Santiago Magalhães"
          style={{
            marginTop: 16,
            maxWidth: 340,
            width: "100%",
            borderRadius: 24,
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            pointerEvents: "auto",
          }}
        />
      </div>
      {/* Tabs */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          {tabs.map((t, idx) => (
            <button
              key={t.label}
              onClick={() => setTab(idx)}
              style={{
                padding: "10px 22px",
                borderRadius: 20,
                border: tab === idx ? "2px solid #009B77" : "2px solid #eee",
                background: tab === idx ? "#F7CAC9" : "#fff",
                color: tab === idx ? "#222" : "#888",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                boxShadow: tab === idx ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s",
              }}
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
  );
}
