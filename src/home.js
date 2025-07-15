import React, { useEffect, useState } from "react";
import "./home.css";
import { ArrowRight } from "lucide-react";
import Header from "./components/header";
import { useNavigate } from "react-router-dom";
import mockimg from "./images/online-marketing.png";
import Footer from "./components/footer";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general"); 
  const [visibleFacts, setVisibleFacts] = useState([]); // facts currently visible
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "en";
  const user = JSON.parse(localStorage.getItem("duknowUser"));



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
          setFacts((prev) => [...prev, ...newItems]);
          setVisibleFacts((prev) => [...prev, ...newItems.slice(0, 24)]);
        } else {
          setFacts(data);
          setVisibleFacts(data.slice(0, 24));
        }
      } else {
        setFacts([]);
        setVisibleFacts([]);
      }
    } catch (err) {
      console.error("Error fetching:", err);
      setFacts([]);
      setVisibleFacts([]);
    }
    setLoading(false);
    
  };

  useEffect(() => {
    fetchFacts(category, false);
    
  }, [category]);

  const handleSelectCategory = (cat) => {
    setCategory(cat.toLowerCase());
  };

  const handleShowMore = () => {
    const nextItems = facts.slice(visibleFacts.length, visibleFacts.length + 24);
    if (nextItems.length > 0) {
      setVisibleFacts((prev) => [...prev, ...nextItems]);
    } else {
      fetchFacts(category, true); // fetch again if not enough loaded
    }
  };

  const onstarted = () => {
    if(!user) {
      alert("Please login to start the mock test.");
      navigate("/login");
      return;
    }
    else{
    navigate("/mock");
    }
  }
  return (
    <div className="container">


      <Helmet>
      <title>Duknow | Smart Mock Test & Learning Platform</title>
      <meta
        name="description"
        content="Prepare for UPSC, SSC, NEET, and JEE with Duknow’s smart mock tests, real-time analytics, and multilingual learning experience."
      />
      <meta
        name="keywords"
        content="Duknow, mock tests, UPSC, SSC, NEET, JEE, online education, competitive exams, learning app"
      />
      <meta name="author" content="Duknow Team" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Duknow | Crack Competitive Exams" />
      <meta
        property="og:description"
        content="Get ahead in UPSC, SSC, JEE, NEET and more with Duknow — India's personalized mock test platform."
      />
      <meta
        property="og:image"
        content="https://duknow.com/dukknow-preview.jpg"
      />
      <meta property="og:url" content="https://www.duknow.com/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Duknow — Mock Tests for Competitive Exams" />
      <meta
        name="twitter:description"
        content="Smart mock tests, analytics, and language support for UPSC, SSC, NEET, JEE, and more."
      />
      <meta name="twitter:image" content="https://duknow.com/dukknow-preview.jpg" />
    </Helmet>


      <Header onSelectCategory={handleSelectCategory} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>The Ultimate Practice Ground for <span style={{color:"green"}}>Success.</span></h1>
          <p>They improve your accuracy, speed, and confidence — giving you the edge to succeed in the actual exam.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => onstarted()}>Get Started</button>
            <a href="#features" className="learn-more">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </div>
  {/* <div className="mock-section" onClick={() => navigate("/mocktest")}> */}
  <div className="mock-header">
    <img src={mockimg} className="mockimg"/>
    {/* <h1>Mock Test</h1>
    <p>Assess your knowledge with curated practice tests.</p> */}
  </div>

  {/* <div className="mock-highlights">
    <div className="highlight-card">
      <h4>Multiple Subjects</h4>
      <p>Practice by category</p>
    </div>
    <div className="highlight-card">
      <h4>Timed Mode</h4>
      <p>Improve speed & accuracy</p>
    </div>
    <div className="highlight-card">
      <h4>Smart Analytics</h4>
      <p>Instant feedback & scores</p>
    </div>
  </div>

  <button
    className="mock-cta"
    onClick={(e) => {
      e.stopPropagation();
      navigate("/mocktest");
    }}
  >
    Start Your Test →
  </button>
</div> */}




          
      </section>

      {/* Facts Section */}
      <div className="facts">
        <h2>Daily Facts for {category}</h2>
        <div className="facts-grid">
          {loading ? (
            <p>Loading...</p>
          ) : visibleFacts.length > 0 ? (
            visibleFacts.map((fact, i) => (
              <div key={i} className="fact" onClick={() => navigate(`/page/${fact.pageNumber}?category=${category}`)}>
                <img
                      src={fact.imageUrl }
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
                    {(() => {
                    let title = fact.title;
                    if (language === "te") {
                      title = fact.titleTelugu || fact.title;
                    } else if (language === "hi") {
                      title = fact.titleHindi || fact.title;
                    }

                    return (
                      <h3 style={{ fontSize: "16px", paddingLeft: "10px", paddingRight: "10px" }}>
                        {title}
                      </h3>
                    );
                  })()}


             
              </div>
            ))
          ) : (
            <p>No facts found.</p>
          )}
        </div>

        {/* Show More Button */}
        {visibleFacts.length < facts.length || facts.length < 1000 ? (
          <button
            onClick={handleShowMore}
            className="btn btn-primary"
            style={{ margin: "30px 20px"}}
          >
            Show More
          </button>
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
