import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FunctionChart from "../components/FunctionChart";

const groupFunctions = {
  1: ['Fi', 'Te', 'Ne', 'Si'],
  2: ['Fe', 'Ti', 'Ni', 'Se'],
  3: ['Fi', 'Ni', 'Te', 'Se'],
  4: ['Ti', 'Ne', 'Si', 'Fe']
};

const groupToTypes = {
  1: { 'Fi,Ne,Si,Te': 'INFP', 'Ne,Fi,Te,Si': 'ENFP', 'Si,Te,Fi,Ne': 'ISTJ', 'Te,Si,Ne,Fi': 'ESTJ' },
  2: { 'Fe,Ni,Ti,Se': 'INFJ', 'Fe,Ni,Se,Ti': 'ENFJ', 'Ti,Se,Ni,Fe': 'ISTP', 'Se,Ti,Fe,Ni': 'ESTP' },
  3: { 'Fi,Ni,Te,Se': 'ISFP', 'Ni,Te,Fi,Se': 'INTJ', 'Te,Ni,Se,Fi': 'ENTJ', 'Se,Fi,Te,Ni': 'ESFP' },
  4: { 'Ti,Ne,Si,Fe': 'INTP', 'Ne,Ti,Fe,Si': 'ENTP', 'Si,Fe,Ti,Ne': 'ISFJ', 'Fe,Si,Ne,Ti': 'ESFJ' }
};

const dominantToType = {
  Fi: 'INFP', Fe: 'ENFJ', Ti: 'INTP', Te: 'ENTJ',
  Ni: 'INFJ', Ne: 'ENFP', Si: 'ISFJ', Se: 'ESFP'
};

function determineGroup(top2) {
  const [f1, f2] = top2;
  const groupMatches = {
    1: ['Fi', 'Te', 'Ne', 'Si'],
    2: ['Fe', 'Ti', 'Ni', 'Se'],
    3: ['Fi', 'Te', 'Ni', 'Se'],
    4: ['Ti', 'Ne', 'Si', 'Fe']
  };

  for (let group in groupMatches) {
    const funcs = groupMatches[group];
    if (funcs.includes(f1) && funcs.includes(f2)) {
      return parseInt(group);
    }
  }
  return null;
}

function ResultPage() {
  const [finalResult, setFinalResult] = useState(null);
  const [scores1, setScores1] = useState({});
  const [scores2, setScores2] = useState({});
  const [combinedScores, setCombinedScores] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const s1 = JSON.parse(localStorage.getItem("part1Scores")) || {};
    const s2 = JSON.parse(localStorage.getItem("part2Scores")) || {};

    const combined = {};
    const funcs = ['Fi', 'Fe', 'Ti', 'Te', 'Ni', 'Ne', 'Si', 'Se'];
    funcs.forEach(f => {
      combined[f] = (s1[f] || 0) + (s2[f] || 0);
    });

    setScores1(s1);
    setScores2(s2);
    setCombinedScores(combined);

    const sortedFuncs = Object.entries(combined)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    const top2 = sortedFuncs.slice(0, 2);
    const group = determineGroup(top2);

    if (!group) {
      setFinalResult({ error: "Could not determine group. Please retake test." });
      return;
    }

    const relevantFuncs = groupFunctions[group];
    const sortedGroupFuncs = [...relevantFuncs].sort((a, b) => combined[b] - combined[a]);
    const key = sortedGroupFuncs.join(',');

    let mbti = groupToTypes[group][key];
    let fallback = false;
    let fallbackMsg = "";

    if (!mbti) {
      const dom = sortedGroupFuncs[0];
      const aux = sortedGroupFuncs[1];
      for (const [stack, type] of Object.entries(groupToTypes[group])) {
        const [sDom, sAux] = stack.split(',');
        if (sDom === dom && sAux === aux) {
          mbti = type;
          fallback = true;
          fallbackMsg = `No exact match, but top two functions (${dom} & ${aux}) suggest:`;
          break;
        }
      }
    }

    if (!mbti) {
      const dom = sortedGroupFuncs[0];
      mbti = dominantToType[dom] || "Unknown Type";
      fallback = true;
      fallbackMsg = `No close match found. Based on dominant function (${dom}), your best fit might be:`;
    }

    setFinalResult({
      part1: s1,
      part2: s2,
      scores: combined,
      top2,
      group,
      mbti,
      fallback,
      fallbackMsg,
      stack: sortedGroupFuncs
    });
  }, []);

  if (!finalResult) return <p>Loading...</p>;
  if (finalResult.error) return <p>{finalResult.error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your MBTI Result: {finalResult.mbti}</h1>
      {finalResult.fallback && <p><em>{finalResult.fallbackMsg}</em></p>}

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <a href={`/types/${finalResult.mbti}`} style={{ marginRight: "1rem" }}>
          Learn More About {finalResult.mbti}
        </a>
        <a href={`/stacks/group${finalResult.group}`} style={{ marginRight: "1rem" }}>
          See Your Function Stack Group
        </a>
        <a href="/functions">Explore All Cognitive Functions</a>
      </div>

      <h2>🧠 Final Cognitive Function Stack</h2>
      <p>{finalResult.stack.join(" → ")}</p>

      <h3>Top 2 Functions: {finalResult.top2.join(" & ")}</h3>
      <h3>Group: {finalResult.group}</h3>

      <hr />

      <h2>📊 Part 1 Scores – Foundation Assessment</h2>
      <p>This section reflects your baseline cognitive function tendencies.</p>
      <FunctionChart scores={scores1} title="Part 1 Cognitive Function Scores" />
      <ul>
        {Object.entries(scores1)
          .sort((a, b) => b[1] - a[1])
          .map(([func, score]) => (
            <li key={func}>{func}: {score}</li>
          ))}
      </ul>

      <h2>📈 Part 2 Scores – Group Refinement</h2>
      <p>This section refines your placement within a function group based on your top traits.</p>
      <FunctionChart scores={scores2} title="Part 2 Cognitive Function Scores" />
      <ul>
        {Object.entries(scores2)
          .sort((a, b) => b[1] - a[1])
          .map(([func, score]) => (
            <li key={func}>{func}: {score}</li>
          ))}
      </ul>

      <h2>✅ Combined Scores – Used to Determine Final MBTI</h2>
      <FunctionChart scores={combinedScores} title="Combined Cognitive Function Scores" />
      <ul>
        {Object.entries(combinedScores)
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
