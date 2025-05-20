/* eslint-disable */
// @ts-nocheck
"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  Plugin,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Custom plugin to add shadow to the whole pie chart
const shadowPlugin: Plugin<"pie"> = {
  beforeDatasetDraw(chart, args, options) {
    const { ctx } = chart;
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
  },
  afterDatasetDraw(chart, args, options) {
    chart.ctx.restore();
  },
};

const PhishingStatsChart = () => {
  const data: ChartData<"pie"> = {
    labels: ["Phishing", "Vishing", "Smishing", "Deepfakes"],
    datasets: [
      {
        data: [27, 13, 37, 32],
        backgroundColor: [
          "rgba(255, 192, 203, 0.8)", // Pink for Phishing
          "rgba(144, 238, 144, 0.8)", // Light green for Vishing
          "rgba(255, 165, 0, 0.8)", // Orange for Smishing
          "rgba(255, 218, 185, 0.8)", // Peach for Deepfakes
        ],
        borderColor: [
          "rgba(255, 192, 203, 1)",
          "rgba(144, 238, 144, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(255, 218, 185, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // No legend
      },
      tooltip: {
        enabled: false, // Disable hover tooltip
      },
      datalabels: {
        color: "#000",
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label} - ${value}%`;
        },
        font: {
          weight: "bold",
          size: 14,
        },
        // Removed text shadow here
      },
      title: {
        display: true,
        text: "Phishing Attack Distribution",
        font: {
          size: 16,
        },
      },
    },
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PhishingStatsChart;
