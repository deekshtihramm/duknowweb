import React, { useEffect, useState } from "react";
import "./home.css";
import { ArrowRight } from "lucide-react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useNavigate } from "react-router-dom";
import mockimg from "./images/online-marketing.png";

const Home = () => {
  const [facts, setFacts] = useState([]);
  const [visibleFacts, setVisibleFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1); // track pages
  const [moreLoading, setMoreLoading] = useState(false);
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "en";
  const LIMIT = 54; // number of facts per request

  const fetchFacts = async (selectedCategory, pageNum = 1, append = false) => {
    append ? setMoreLoading(true) : setLoading(true);
    try {
      const res = await fetch(
        `https://web.backend.duknow.in/api/realpages/web/${selectedCategory}/limited?page=${pageNum}&limit=${LIMIT}`
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        const updatedFacts = append ? [...facts, ...data] : data;
        setFacts(updatedFacts);
        setVisibleFacts((prev) => (append ? [...prev, ...data] : data));
        sessionStorage.setItem("facts", JSON.stringify(updatedFacts));
      }
    } catch (err) {
      console.error("Error fetching:", err);
    }
    append ? setMoreLoading(false) : setLoading(false);
  };

  useEffect(() => {
    // reset facts and page on category change
    setFacts([]);
    setVisibleFacts([]);
    setPage(1);
    fetchFacts(category, 1, false);
  }, [category]);

  const handleSelectCategory = (cat) => {
    setCategory(cat.toLowerCase());
  };

  const handleShowMore = () => {
    const nextPage = page + 1;
    fetchFacts(category, nextPage, true);
    setPage(nextPage);
  };

  return (
    <div className="container">
      <Header onSelectCategory={handleSelectCategory} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            The Ultimate Practice Ground for <span style={{ color: "green" }}>Success.</span>
          </h1>
          <p>
            They improve your accuracy, speed, and confidence — giving you the edge to succeed in the actual exam.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/install")}>
              Get Started
            </button>
            <a href="#features" className="learn-more">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="mock-header">
          <img src={mockimg} className="mockimg" alt="mock" />
        </div>
      </section>

      {/* Facts Section */}
      <div className="facts">
        <h2>Daily Facts for {category}</h2>
        <div className="facts-grid">
          {visibleFacts.length > 0 ? (
            visibleFacts.map((fact) => (
              <div
                key={fact._id}
                className="fact"
                onClick={() => navigate(`/page/${fact.pageNumber}?category=${category}`)}
              >
                <img
                  src={fact.imageUrl}
                  alt={fact.title}
                  style={{
                    width: "50%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "8px",
                    marginBottom: "5px",
                    paddingLeft: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", paddingLeft: "10px", paddingRight: "10px" }}>
                  {language === "te"
                    ? fact.titleTelugu || fact.title
                    : language === "hi"
                    ? fact.titleHindi || fact.title
                    : fact.title}
                </h3>
              </div>
            ))
          ) : loading ? (
           <center><div style={{ margin: "30px 20px" }}>
            <span className="loader"></span>
          </div>
          </center>
          ) : (
            <p>No facts found.</p>
          )}
        </div>

        {/* Show More Button */}
        {moreLoading ? (
          <div style={{ margin: "30px 20px" }}>
            <span className="loader"></span>
          </div>
        ) : (
          <button
            onClick={handleShowMore}
            className="btn btn-primary"
            style={{ margin: "30px 20px" }}
          >
            Show More
          </button>
        )}
      </div>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="features-title">Powerful Features of Duknow</h2>
        <div className="features-grid">
          <div className="card">
            <h3>🧠 Smart Mock Test Engine</h3>
            <p>Create & manage mock tests with timer, scoring, and detailed explanations.</p>
          </div>
          <div className="card">
            <h3>📊 Real-Time Analytics</h3>
            <p>Track views, downloads, test attempts, and engagement instantly.</p>
          </div>
          <div className="card">
            <h3>🌐 Multi-language Support</h3>
            <p>Support for English, Telugu, and other regional languages.</p>
          </div>
          <div className="card">
            <h3>📷 Rich Question Content</h3>
            <p>Attach images, videos, and formatted explanations to your questions.</p>
          </div>
          <div className="card">
            <h3>📱 Mobile Friendly</h3>
            <p>Responsive UI designed to work seamlessly on all devices.</p>
          </div>
          <div className="card">
            <h3>🔔 Smart Notifications</h3>
            <p>Get instant alerts for downloads, submissions, or shared link expiries.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
