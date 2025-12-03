import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">MBTI Project</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/test">Take the Test</Link>
        <Link to="/functions">Cognitive Functions</Link>
        {username ? (
          <>
            <span>👋 {username}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
