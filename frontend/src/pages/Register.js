import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const data = await registerUser(username, email, password);
    if (data.error) {
      setMessage(data.error);
    } else {
      setMessage("Registration successful! You can now log in.");
      setTimeout(() => navigate("/login"), 1500);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleRegister}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
}
