import React, { useState } from "react";
import { loginUser } from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

const handleLogin = async () => {
  try {
    const data = await loginUser(username, password);
    console.log("🔍 Backend response:", data); // Add this

    if (data.error) {
      setMessage("❌ " + data.error);
    } else {
      console.log("✅ Saving to localStorage:", data); // Add this
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("username", data.username);
      setMessage("✅ Logged in successfully!");
      setTimeout(() => {
        window.location.href = "/";
    }, 5000); // 2 second delay
    }
  } catch (error) {
    console.error("⚠️ Login error:", error);
    setMessage("⚠️ Login failed.");
  }
};


  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
