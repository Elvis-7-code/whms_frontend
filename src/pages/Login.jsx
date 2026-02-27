import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthConnect";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    
    try {
      const res = await api.post("/auth/login", { email, password });
      
      // Save token using AuthContext
      login(res.data.access_token);
      
      // Redirect to dashboard
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto", padding: "2rem", backgroundColor: "#FAFAF5", borderRadius: "8px", border: "2px solid #6D4C41" }}>
      <h2>Farm Management Login</h2>
      {error && <p style={{ color: "red", padding: "0.5rem", backgroundColor: "#ffe6e6", borderRadius: "4px" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br/>
          <input 
            type="email"
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Password</label><br/>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            marginTop: "1rem", 
            backgroundColor: "#2E7D32", 
            color: "white", 
            padding: "0.5rem 1rem", 
            border: "none", 
            borderRadius: "4px",
            width: "100%",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}