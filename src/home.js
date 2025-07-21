import React, { useEffect, useState } from "react";
import "./home.css";
import { ArrowRight } from "lucide-react";
import Header from "./components/header";
import { useNavigate } from "react-router-dom";
import mockimg from "./images/online-marketing.png";
import Footer from "./components/footer";

const Home = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("GK"); 
  const [visibleFacts, setVisibleFacts] = useState([]);
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "en";
  const [moreLoading, setMoreLoading] = useState(false);


  // Fetch facts from API
  const fetchFacts = async (selectedCategory, append = false) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/usersearch/web/${selectedCategory}/limited`);
      const data = await res.json();
      console.log("Fetched data:", data);
      if (Array.isArray(data)) {
        if (append) {
          const newItems = data.filter(
            (fact) => !facts.some((existing) => existing._id === fact._id)
          );
          const updated = [...facts, ...newItems];
          setFacts(updated);
          setVisibleFacts((prev) => [...prev, ...newItems.slice(0, 24)]);
          sessionStorage.setItem("facts", JSON.stringify(updated));
        } else {
          setFacts(data);
          setVisibleFacts(data.slice(0, 24));
          sessionStorage.setItem("facts", JSON.stringify(data));
        }
      }
    } catch (err) {
      console.error("Error fetching:", err);
    }
    setLoading(false);
  };

  // Load from cache + fetch fresh
  useEffect(() => {
    const cached = sessionStorage.getItem("facts");
    if (cached) {
      const parsed = JSON.parse(cached);
      setFacts(parsed);
      setVisibleFacts(parsed.slice(0, 24));
    }
    fetchFacts(category, false);
  }, [category]);

  const handleSelectCategory = (cat) => {
    setCategory(cat.toLowerCase());
  };

 const handleShowMore = async () => {
  const nextItems = facts.slice(visibleFacts.length, visibleFacts.length + 24);
  if (nextItems.length > 0) {
    setVisibleFacts((prev) => [...prev, ...nextItems]);
  } else {
    setMoreLoading(true); // show loading spinner
    await fetchFacts(category, true);
    setMoreLoading(false); // hide spinner after fetch
  }
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
            <button className="btn btn-primary" onClick={() => navigate("/install")}>Get Started</button>
            <a href="#features" className="learn-more">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mock-header">
          <img src={mockimg} className="mockimg" />
        </div>
      </section>

      {/* Facts Section */}
      <div className="facts">
        <h2>Daily Facts for {category}</h2>
        <div className="facts-grid">
          {visibleFacts.length > 0 ? (
            visibleFacts.map((fact, i) => (
              <div key={i} className="fact" onClick={() => navigate(`/page/${fact.pageNumber}?category=${category}`)}>
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
            <div style={{ margin: "30px 20px" }}>
              <span className="loader"></span> {/* CSS spinner */}
            </div>
          ) : (
            <p>No facts found.</p>
          )}
        </div>

        {/* Show More Button */}
       {visibleFacts.length < facts.length || facts.length < 1000 ? (
          moreLoading ? (
            <div style={{ margin: "30px 20px" }}>
              <span className="loader"></span> {/* CSS spinner */}
            </div>
          ) : (
            <button
              onClick={handleShowMore}
              className="btn btn-primary"
              style={{ margin: "30px 20px" }}
            >
              Show More
            </button>
          )
        ) : null}

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
