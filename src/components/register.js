import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    selectedLanguage: "",
    pageNames: [],
    favoritePages: [],
    token: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, selectedLanguage } = formData;

    if (!email || !password || !confirmPassword || !selectedLanguage) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/usersearch/user/createwithemail", {
        email: formData.email,
        password: formData.password,
        selectedLanguage: formData.selectedLanguage,
        pageNames: formData.pageNames,
        favoritePages: formData.favoritePages,
        token: formData.token
      });

      alert("Registration successful!");
      navigate("/login"); 
      console.log(response.data);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        selectedLanguage: "",
        pageNames: [],
        favoritePages: [],
        token: ""
      });
    } catch (error) {
      alert(error.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-left">
          <h1>Join Duknow</h1>
          <p>Sign up to access facts, mock tests, and personalized content.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            alt="Register"
          />
        </div>

        <div className="register-right">
          <h2>Create your Duknow account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Select Language</label>
              <div>
                <input
                  type="radio"
                  name="selectedLanguage"
                  value="english"
                  checked={formData.selectedLanguage === "english"}
                  onChange={handleChange}
                />
                <label> English </label>

                <input
                  type="radio"
                  name="selectedLanguage"
                  value="telugu"
                  checked={formData.selectedLanguage === "telugu"}
                  onChange={handleChange}
                />
                <label> Telugu </label>

                <input
                  type="radio"
                  name="selectedLanguage"
                  value="hindi"
                  checked={formData.selectedLanguage === "hindi"}
                  onChange={handleChange}
                />
                <label> Hindi </label>
              </div>
            </div>

            <button type="submit" className="button">Register</button>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
