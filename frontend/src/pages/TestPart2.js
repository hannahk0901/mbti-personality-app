import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsPart2 from '../data/questionsPart2';

const options = [
  { label: "Strongly Agree", value: 4 },
  { label: "Agree", value: 3 },
  { label: "Disagree", value: 2 },
  { label: "Strongly Disagree", value: 1 }
];

function getTopTwoFunctions(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return [sorted[0][0], sorted[1][0]];
}

function determineGroup(topFuncs) {
  const combo = topFuncs.sort().join('-');
  const groupCombos = {
    'Fi-Ne': 'group1',
    'Ne-Si': 'group1',
    'Fi-Si': 'group1',
    'Fi-Te': 'group1',

    'Fe-Ni': 'group2',
    'Fe-Ti': 'group2',
    'Ni-Se': 'group2',

    'Fi-Ni': 'group3',
    'Fi-Se': 'group3',
    'Te-Se': 'group3',

    'Ti-Ne': 'group4',
    'Ne-Si': 'group4',
    'Ti-Fe': 'group4'
  };

  return groupCombos[combo] || 'group1'; // default fallback
}

export default function TestPart2() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [scores, setScores] = useState({
    Fi: 0, Fe: 0, Ti: 0, Te: 0,
    Ni: 0, Ne: 0, Si: 0, Se: 0
  });

  useEffect(() => {
    const part1Scores = JSON.parse(localStorage.getItem('part1Scores'));
    if (!part1Scores) {
      alert("Missing Part 1 results.");
      navigate('/');
      return;
    }

    const topTwo = getTopTwoFunctions(part1Scores);
    const group = determineGroup(topTwo);

    setQuestionList(questionsPart2[group]);
    setScores({Fi: 0, Fe: 0, Ti: 0, Te: 0, Ni: 0, Ne: 0, Si: 0, Se: 0}); 
  }, [navigate]);

  const handleAnswer = (value, funcA, funcB) => {
    setScores(prev => ({
      ...prev,
      [funcA]: prev[funcA] + value,
      [funcB]: prev[funcB] + (5 - value) // reverse score for B
    }));

    if (currentQuestionIndex + 1 < questionList.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      localStorage.setItem("part2Scores", JSON.stringify(scores));
      navigate("/results");
    }
  };

  if (questionList.length === 0) return <div>Loading questions...</div>;

  const currentQ = questionList[currentQuestionIndex];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Part 2 - Question {currentQuestionIndex + 1} of {questionList.length}</h2>
      <p>{currentQ.text}</p>
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(opt.value, currentQ.funcA, currentQ.funcB)}
          style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
