import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Navbar from './components/Navbar';
import Functions from './pages/Functions.js';
import TestPart1 from './pages/TestPart1';
import TestPart2 from './pages/TestPart2';
import Result from './pages/Result';
import ResultPage from './pages/ResultPage';
// MBTI type pages
import INFP from "./pages/types/INFP";
import ENFP from "./pages/types/ENFP";
import ISTJ from "./pages/types/ISTJ";
import ESTJ from "./pages/types/ESTJ";
import INFJ from "./pages/types/INFJ";
import ENFJ from "./pages/types/ENFJ";
import ISTP from "./pages/types/ISTP";
import ESTP from "./pages/types/ESTP";
import ISFP from "./pages/types/ISFP";
import INTJ from "./pages/types/INTJ";
import ENTJ from "./pages/types/ENTJ";
import ESFP from "./pages/types/ESFP";
import INTP from "./pages/types/INTP";
import ENTP from "./pages/types/ENTP";
import ISFJ from "./pages/types/ISFJ";
import ESFJ from "./pages/types/ESFJ";

// Stack group pages
import Group1Stack from "./pages/stacks/Group1Stack";
import Group2Stack from "./pages/stacks/Group2Stack";
import Group3Stack from "./pages/stacks/Group3Stack";
import Group4Stack from "./pages/stacks/Group4Stack";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test1" element={<TestPart1 />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/test2" element={<TestPart2 />} />

        {/* MBTI type routes */}
        <Route path="/types/INFP" element={<INFP />} />
        <Route path="/types/ENFP" element={<ENFP />} />
        <Route path="/types/ISTJ" element={<ISTJ />} />
        <Route path="/types/ESTJ" element={<ESTJ />} />
        <Route path="/types/INFJ" element={<INFJ />} />
        <Route path="/types/ENFJ" element={<ENFJ />} />
        <Route path="/types/ISTP" element={<ISTP />} />
        <Route path="/types/ESTP" element={<ESTP />} />
        <Route path="/types/ISFP" element={<ISFP />} />
        <Route path="/types/INTJ" element={<INTJ />} />
        <Route path="/types/ENTJ" element={<ENTJ />} />
        <Route path="/types/ESFP" element={<ESFP />} />
        <Route path="/types/INTP" element={<INTP />} />
        <Route path="/types/ENTP" element={<ENTP />} />
        <Route path="/types/ISFJ" element={<ISFJ />} />
        <Route path="/types/ESFJ" element={<ESFJ />} />

        {/* Cognitive stack group pages */}
        <Route path="/stacks/group1" element={<Group1Stack />} />
        <Route path="/stacks/group2" element={<Group2Stack />} />
        <Route path="/stacks/group3" element={<Group3Stack />} />
        <Route path="/stacks/group4" element={<Group4Stack />} />
      </Routes>
    </Router>
  );
}

export default App;


