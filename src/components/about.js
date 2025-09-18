import React from "react";
import "./about.css";
import Footer from "./footer";
import Header from "./header";

const About = () => {
  return (
    <>
      <Header />
      <h1 className="about-title">🎓 About Duknow</h1>

      <div className="about-container">
        <p className="about-text">
          <strong>Duknow</strong> is a modern learning platform built to make
          knowledge simple, engaging, and accessible for everyone. Whether you
          are a student, a professional, or a lifelong learner, Duknow empowers
          you to grow your knowledge base every day.
        </p>

        <p className="about-text">
          With Duknow, you can explore <strong>daily facts</strong>, dive into
          interesting topics, and expand your understanding across a wide range
          of categories — all in one place.
        </p>

        <p className="about-text">
          Our platform supports <strong>multiple languages</strong>, ensuring
          that learning feels natural and comfortable for everyone. You can
          choose your preferred language and enjoy a personalized experience.
        </p>

        <p className="about-text">
          Designed with simplicity and accessibility in mind, Duknow is easy to
          use for learners of all age groups. The content is curated,
          up-to-date, and accurate — so you can trust what you learn.
        </p>

        <h2 className="features-title">✨ Key Highlights:</h2>
        <ul className="features-list">
          <li>Daily facts to boost your knowledge</li>
          <li>Topic-based learning across multiple categories</li>
          <li>Multi-language support for comfortable learning</li>
          <li>Clean, intuitive, and user-friendly interface</li>
          <li>Accurate and regularly updated content</li>
          <li>Accessible for learners of all age groups</li>
        </ul>

        <p className="about-tagline">📚 Duknow — Learn Smart, Grow Every Day!</p>
      </div>

      <Footer />
    </>
  );
};

export default About;
