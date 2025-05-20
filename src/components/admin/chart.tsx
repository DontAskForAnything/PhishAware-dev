/* eslint-disable */
// @ts-nocheck
"use client";

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Chart,
} from "chart.js";
import { useEffect, useRef } from "react";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
);

export default function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    chartRef.current?.destroy();

    const data = [84, 76, 51, 63, 42];
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj"],
        datasets: [
          {
            data: data,
            borderColor: "#3C837B",
            pointBackgroundColor: "#3C837B",
            tension: 0.4,
            pointRadius: 8,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: "transparent",
        interaction: { mode: null as any },
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
        },
        layout: {
          padding: {
            left: 40,
            right: 40,
            top: 40,
            bottom: 40,
          },
        },
        scales: {
          x: { display: false, grid: { display: false } },
          y: {
            display: false,
            grid: { display: false },
            beginAtZero: false,
            min: minValue,
            max: maxValue,
          },
        },
        animation: {
          onComplete: () => {
            if (!chartRef.current) return;
            const chart = chartRef.current;
            const ctx = chart.ctx;

            const fontSize = 14;
            ctx.font = `bold ${fontSize}px sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const boxSize = 40;
            const half = boxSize / 2;

            chart.data.datasets[0].data.forEach((value, index) => {
              const meta = chart.getDatasetMeta(0);
              const point = meta.data[index];
              if (!point) return;

              const x = point.x;
              const y = point.y;

              ctx.fillStyle = "#3C837B";
              roundRect(ctx, x - half, y - half, boxSize, boxSize, 6);
              ctx.fill();

              ctx.fillStyle = "white";
              ctx.fillText(`${value}%`, x, y);
            });
          },
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-full max-w-2xl bg-transparent">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
