import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function FunctionChart({ scores, title = "Cognitive Function Scores" }) {
  const labels = Object.keys(scores);
  const data = {
    labels,
    datasets: [
      {
        label: "Score",
        data: Object.values(scores),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        font: { size: 20 },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...Object.values(scores)) + 2,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
