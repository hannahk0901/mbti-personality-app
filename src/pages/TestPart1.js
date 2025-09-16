import React, { useState } from 'react';
import part1Questions from '../data/questionsPart1';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: "Strongly Agree", value: 4 },
  { label: "Agree", value: 3 },
  { label: "Disagree", value: 2 },
  { label: "Strongly Disagree", value: 1 }
];

export default function TestPart1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    Fi: 0, Fe: 0, Ti: 0, Te: 0,
    Ni: 0, Ne: 0, Si: 0, Se: 0
  });
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const func = part1Questions[currentQuestionIndex].function;

    setScores(prev => {
      const updated = { ...prev, [func]: prev[func] + value };

      // If it's the last question, store and navigate
      if (currentQuestionIndex + 1 === part1Questions.length) {
        localStorage.setItem("part1Scores", JSON.stringify(updated));
        navigate('/result', { state: { scores: updated } });
      }

      return updated;
    });

    setAnswers(prev => [...prev, { questionId: currentQuestionIndex + 1, value }]);

    if (currentQuestionIndex + 1 < part1Questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const question = part1Questions[currentQuestionIndex];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Question {currentQuestionIndex + 1} of {part1Questions.length}</h2>
      <p>{question.text}</p>
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(opt.value)}
          style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
