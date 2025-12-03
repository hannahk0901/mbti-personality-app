import React from "react";
import "./Home.css";

export default function Home() {
  const username = localStorage.getItem("username");

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Welcome {username ? `${username}!` : "to Your MBTI Journey 🌿"}</h1>
        <p>Discover your personality through reflection, curiosity, and insight.</p>
        <button
          className="start-btn"
          onClick={() => (window.location.href = "/test1")}
        >
          Start the Test
        </button>
      </div>
    </div>
  );
}
