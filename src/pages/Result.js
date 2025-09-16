import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scores = location.state?.scores;

  if (!scores) {
    return <p>No results found. Please complete the test first.</p>;
  }

  // Sort functions from highest to lowest
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topTwo = sorted.slice(0, 2);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧠 Your Cognitive Function Scores</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sorted.map(([func, score]) => (
          <li key={func} style={{ marginBottom: '10px' }}>
            <strong>{func}</strong>: {score}/20
          </li>
        ))}
      </ul>

      <h3>🔍 Your Top 2 Functions</h3>
      <p>
        {topTwo[0][0]} ({topTwo[0][1]}) and {topTwo[1][0]} ({topTwo[1][1]})
      </p>

      <button
        style={{ marginTop: '20px' }}
        onClick={() => navigate('/test2', { state: { topTwo } })}
      >
        Continue to Part 2 →
      </button>
    </div>
  );
};

export default Result;
