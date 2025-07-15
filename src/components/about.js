import React from "react";
import "./about.css";
import Footer from "./footer";

const About = () => {
  return (
    <>
    <h1 className="about-title">🎓 About Duknow</h1>

      <div className="about-container">

      <p className="about-text">
        <strong>Duknow</strong> is a user-friendly learning and assessment platform designed for learners of all ages. Whether you're a student, exam aspirant, or just someone eager to learn, Duknow helps you expand your knowledge every day.
      </p>

      <p className="about-text">
        Learn daily <strong>general facts</strong> and explore topics of your interest. Choose categories you love and improve your knowledge at your own pace.
      </p>

      <p className="about-text">
        Preparing for exams like <strong>UPSC, SSC, GATE, NEET, JEE</strong>, and more? You can take <strong>mock tests</strong> for each exam right on the platform. After completing a test, you'll get instant results and detailed reports to track your performance and improve further.
      </p>

      <p className="about-text">
        You can learn in your preferred language. Our platform supports multiple languages so everyone can feel comfortable while learning.
      </p>

      <p className="about-text">
        Anyone can use Duknow — students, professionals, or parents helping their kids. The content is accurate, verified, and updated regularly to ensure the best learning experience.
      </p>

      <h2 className="features-title">✨ Key Features:</h2>
      <ul className="features-list">
        <li>Daily facts and topic-based knowledge</li>
        <li>Mock tests for competitive exams</li>
        <li>Instant results and performance reports</li>
        <li>Learn in your favorite language</li>
        <li>Simple and intuitive interface</li>
        <li>Content suitable for all age groups</li>
      </ul>

      <p className="about-tagline">📚 Duknow — Learn Smarter, Prepare Better!</p>
    </div>
      <Footer />
    </>
  );
};

export default About;
