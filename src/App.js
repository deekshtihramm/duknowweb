import React from "react";
import "./App.css";
import playstoreBadge from "./images/playstorebadge.png";
import appPreview from "./images/brandlogo.png";
import Footer from "./components/footer";
import Header from "./components/header";

const InstallDuknow = () => {
  return (
    <div className="install-page">
      <Header />

      {/* Hero Section */}
      <section className="install-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Get Duknow on Play Store</h1>
            <p>
              Prepare for UPSC, SSC, NEET, JEE and more with our smart mock tests,
              personalized insights, and multilingual content.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.goryzer.duknow&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={playstoreBadge} alt="Download from Play Store" className="play-btn" />
            </a>
          </div>
          <div className="hero-image">
            <img src={appPreview} alt="Duknow App Preview" />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
     <section className="about-section">
  <div className="about-container">
    <h2 className="aabout-title"> About Duknow</h2>

    <p className="about-intro">
      <strong>Duknow</strong> is a smart learning and assessment platform designed for aspirants, educators, and institutions preparing for competitive exams like <strong>UPSC, SSC, JEE, NEET, and more</strong>.
    </p>

    <div className="about-columns">
      <div className="about-column">
        <h3>👩‍🏫 For Students</h3>
        <ul>
          <li>Mock tests tailored to your level</li>
          <li>Real-time performance analytics</li>
          <li>Multilingual content (English, Telugu, Hindi)</li>
        </ul>
      </div>

      <div className="about-column">
        <h3>🏫 For Educators</h3>
        <ul>
          <li>Create and manage subject-specific mock exams</li>
          <li>Track student progress and insights</li>
          <li>Engage learners through interactive tests</li>
        </ul>
      </div>
    </div>

    <p className="about-footer">
      Whether you're a student aiming to crack a top exam or an educator building a smarter classroom,
      <strong> Duknow is your trusted partner in digital learning.</strong>
    </p>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default InstallDuknow;
