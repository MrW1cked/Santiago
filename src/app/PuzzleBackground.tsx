"use client";

import React, { useEffect, useRef, useState } from "react";

const COLORS = [
  "#FF6F61", // vermelho
  "#6B5B95", // roxo
  "#88B04B", // verde
  "#F7CAC9", // rosa
  "#92A8D1", // azul
  "#FFD700", // amarelo
  "#009B77", // verde escuro
  "#FFB347", // laranja
];

// SVG de uma peça de puzzle clássica (modelo tradicional, fornecido pelo utilizador)
const PuzzlePiece = ({ color, style }: { color: string; style: React.CSSProperties }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.111 292.11" width="80" height="80" style={{ ...style, fill: color, opacity: 0.9 }}>
    <g>
      <g>
        <path d="M228.246,292.11H129.05l10.79-24.609c1.559-3.546,2.339-7.309,2.339-11.208 c0-15.467-12.585-28.053-28.053-28.053c-15.47,0-28.052,12.586-28.052,28.053c0,3.899,0.783,7.674,2.33,11.208l10.772,24.604 H0.005V63.868h90.699c0.174-0.257,0.274-0.538,0.274-0.76c0-0.034,0-0.072-0.006-0.106c-0.854-0.726-1.529-1.307-2.43-2.19 C81.916,53.99,78.319,45.15,78.319,35.81C78.319,16.065,94.387,0,114.131,0s35.81,16.065,35.81,35.81 c0,9.352-3.594,18.191-10.124,24.896l-2.242,1.987c-0.083,0.192-0.111,0.332-0.111,0.403c0,0.257,0.1,0.521,0.263,0.761h90.519 v90.622c0.252,0.137,0.572,0.245,0.887,0.245c0.543-0.577,1.212-1.366,2.178-2.338c6.822-6.619,15.668-10.216,24.988-10.216 c19.738,0,35.807,16.071,35.807,35.81c0,19.75-16.068,35.812-35.807,35.812c-9.332,0-18.178-3.597-24.908-10.138l-1.978-2.162 c-0.366-0.057-0.841,0.041-1.167,0.206V292.11z M146.973,280.4h69.562v-80.179c0-1.395,0.371-2.772,1.074-3.956 c3.534-6.096,12.534-8.383,18.63-4.403l1.154,0.995l2.168,2.413c4.522,4.392,10.47,6.816,16.736,6.816 c13.289,0,24.096-10.813,24.096-24.096c0-13.289-10.812-24.107-24.096-24.107c-6.262,0-12.214,2.424-16.748,6.827 c-0.521,0.526-0.927,1.029-1.332,1.526c-0.744,0.933-1.738,1.881-2.562,2.436c-7.238,4.031-14.649,1.075-18.057-4.785 c-0.703-1.224-1.063-2.562-1.063-3.935V75.578h-80.173c-1.369,0-2.722-0.363-3.905-1.041c-4.134-2.39-6.699-6.77-6.699-11.43 c0-2.493,0.778-4.995,2.256-7.242l1.615-1.787l1.598-1.341c4.649-4.877,6.996-10.732,6.996-16.928 c0-13.292-10.807-24.099-24.099-24.099c-13.292,0-24.101,10.807-24.101,24.099c0,6.272,2.424,12.214,6.816,16.742 c0.526,0.515,0.978,0.889,1.424,1.241c0.995,0.8,1.978,1.833,2.533,2.656c1.341,2.408,1.887,4.532,1.887,6.653 c0,4.643-2.547,9.012-6.653,11.398c-1.206,0.704-2.57,1.072-3.951,1.072H11.716v204.816H81.27l-3.588-8.199 c-2.196-5.026-3.314-10.373-3.314-15.896c0-21.923,17.834-39.763,39.763-39.763c21.926,0,39.763,17.84,39.763,39.763 c0,5.529-1.114,10.876-3.322,15.907L146.973,280.4z"></path>
      </g>
    </g>
  </svg>
);

const PIECE_SIZE = 80;
const PIECE_COUNT = 22;
const SPEED = 0.000001; // px/ms (ainda mais devagar)

// Função utilitária para posição aleatória inicial
function getRandomPosition() {
  // Garante que a posição não fica colada às bordas
  const margin = 40;
  return {
    x: margin + Math.random() * (window.innerWidth - PIECE_SIZE - 2 * margin),
    y: margin + Math.random() * (window.innerHeight - PIECE_SIZE - 2 * margin),
  };
}

// Movimento variado: cada peça tem direção e velocidade próprias
function getRandomDirectionAndSpeed() {
  // Ângulo entre 45º e 135º (em radianos)
  const angle = (Math.PI / 4) + Math.random() * (Math.PI / 2);
  // Velocidade entre 0.001 e 0.006 px/ms
  const speed = 0.00001 + Math.random() * 0.001;
  return { dx: Math.cos(angle), dy: -Math.sin(angle), speed };
}

export default function PuzzleBackground() {
  const [pieces, setPieces] = useState(() =>
    Array.from({ length: PIECE_COUNT }).map((_, i) => {
      const pos = typeof window !== "undefined" ? getRandomPosition() : { x: 0, y: 0 };
      const dir = getRandomDirectionAndSpeed();
      return {
        x: pos.x,
        y: pos.y,
        dx: dir.dx,
        dy: dir.dy,
        speed: dir.speed,
        color: COLORS[i % COLORS.length],
        id: i,
      };
    })
  );
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    function animate(now: number) {
      const delta = Math.min(now - lastTimeRef.current, 40);
      lastTimeRef.current = now;
      setPieces((prev) => {
        return prev.map((p) => {
          let newX = p.x + p.dx * p.speed * delta * 60;
          let newY = p.y + p.dy * p.speed * delta * 60;
          // Se sair do topo, volta ao fundo
          if (newY < -PIECE_SIZE) {
            newY = window.innerHeight;
            // Nova direção e velocidade ao reaparecer
            const dir = getRandomDirectionAndSpeed();
            return { ...p, x: Math.random() * (window.innerWidth - PIECE_SIZE), y: newY, dx: dir.dx, dy: dir.dy, speed: dir.speed };
          }
          // Se sair dos lados, volta do outro lado
          if (newX < -PIECE_SIZE) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = -PIECE_SIZE;
          return { ...p, x: newX, y: newY };
        });
      });
      requestRef.current = requestAnimationFrame(animate);
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  useEffect(() => {
    function handleResize() {
      setPieces((prev) => prev.map((p) => ({
        ...p,
        x: Math.min(p.x, window.innerWidth - PIECE_SIZE),
        y: Math.min(p.y, window.innerHeight - PIECE_SIZE),
      })));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            left: piece.x,
            top: piece.y,
            width: PIECE_SIZE,
            height: PIECE_SIZE,
            transition: "none",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <PuzzlePiece color={piece.color} style={{}} />
        </div>
      ))}
    </div>
  );
}
