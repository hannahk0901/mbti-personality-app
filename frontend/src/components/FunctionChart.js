import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function FunctionChart({ scores }) {
  const labels = Object.keys(scores);
  const data = {
    labels,
    datasets: [
      {
        label: "Cognitive Function Scores",
        data: Object.values(scores),
        backgroundColor: [
          "#a18276", "#d9b8c4", "#cbb6a8", "#b28f7b",
          "#a6a57a", "#bcb8b1", "#a99985", "#cab1a4"
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "#fff8f3", titleColor: "#3e3e3e", bodyColor: "#3e3e3e" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#3e3e3e" } },
      x: { ticks: { color: "#3e3e3e" } },
    },
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default FunctionChart;
