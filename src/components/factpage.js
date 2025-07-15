import React, { useEffect, useState } from "react";
import "./FactContentPage.css";
import Header from "./header";
import axios from "axios";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Footer from "./footer";

const FactContentPage = () => {
  const { pageName } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "en";

  const [facts, setFacts] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/usersearch/page/${pageName}?category=${category}`
        );
        setFacts(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load facts.");
        setLoading(false);
      }
    };

    fetchFacts();
  }, [pageName, category]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? facts.length - 1 : prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setIndex((prev) => (prev === facts.length - 1 ? 0 : prev + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (facts.length === 0) return <p>No facts available.</p>;

  const currentFact = facts[index];

  // Determine language-specific fields
  const getTitle = () => {
    if (language === "te") return currentFact.titleTelugu || currentFact.title;
    if (language === "hi") return currentFact.titleHindi || currentFact.title;
    return currentFact.title;
  };

  const getLongMatter = () => {
    if (language === "te") return currentFact.longmatterTelugu || currentFact.longmatter;
    if (language === "hi") return currentFact.longmatterHindi || currentFact.longmatter;
    return currentFact.longmatter;
  };

  return (
    <>
      <Header />
      <div className="fact-page">
        <div className="fact-card">
          <button onClick={handlePrev} className="nav-button left">◀</button>

          <div className="fact-text">
            <h1 className="fact-title">{getTitle()}</h1>
            <p className="fact-desc">{getLongMatter()}</p>
          </div>

          <div className="fact-image-wrap">
            <img
              src={currentFact.imageUrl}
              alt={currentFact.title}
              className="fact-image"
            />
          </div>

          <button onClick={handleNext} className="nav-button right">▶</button>
        </div>

        <div className="related-section">
          <h2 className="related-title">Related Facts</h2>
          <div className="related-grid">
            {facts
              .filter((_, i) => i !== index)
              .map((fact, i) => (
                <div
                  key={i}
                  className="related-card"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/page/${fact.pageNumber}?category=${category}`);
                  }}
                >
                  <img
                    src={fact.imageUrl}
                    alt={fact.title}
                    className="related-img"
                  />
                  <h3 className="related-title">{getTitle()}</h3>
                  <p className="related-text">{getLongMatter()}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FactContentPage;
