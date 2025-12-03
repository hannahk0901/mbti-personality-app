import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FunctionChart from "../components/FunctionChart";

function ResultPage() {
  const [finalResult, setFinalResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const part1Scores = JSON.parse(localStorage.getItem("part1Scores")) || {};
    const part2Scores = JSON.parse(localStorage.getItem("part2Scores")) || {};

    // Send data to Django backend
    fetch("http://127.0.0.1:8000/api/calculate_mbti/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ part1Scores, part2Scores }),
    })
      .then((res) => res.json())
      .then((data) => setFinalResult(data))
      .catch((err) => console.error("Error fetching MBTI result:", err));
  }, []);

  if (!finalResult) return <p>Loading results...</p>;
  if (finalResult.error) return <p>{finalResult.error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your MBTI Result: {finalResult.mbti}</h1>
      {finalResult.fallback && <p><em>{finalResult.fallback}</em></p>}

      <h3>Group: {finalResult.group}</h3>
      <h3>Top 2 Functions: {finalResult.top2.join(" & ")}</h3>
      <h4>Function Stack: {finalResult.sortedGroup.join(" → ")}</h4>
      <h2>📈 Visual Representation</h2>
      <FunctionChart scores={finalResult.combinedScores} />

      <h2>Combined Scores:</h2>
      <ul>
        {Object.entries(finalResult.combinedScores)
          .sort((a, b) => b[1] - a[1])
          .map(([func, score]) => (
            <li key={func}>{func}: {score}</li>
          ))}
      </ul>

      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default ResultPage;
