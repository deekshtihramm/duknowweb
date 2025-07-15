import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/stats/login", formData);

      // Store user data (you can use localStorage or context depending on your setup)
      localStorage.setItem("duknowUser", JSON.stringify(res.data.user));

      // Redirect to dashboard or homepage
      navigate("/");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <button className="homebtn" onClick={() => window.location.href = '/'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 -3 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Back
      </button>

      <div className="login-box">
        <div className="login-left">
          <h1>Welcome to Duknow</h1>
          <p>Learn smarter. Join the future of education with daily facts and interactive lessons.</p>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Login Illustration" />
        </div>

        <div className="login-right">
          <h2>Login to Duknow</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p>
              Don’t have an account? <a href="#" onClick={() => navigate("/register")}>Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
