import React, { useEffect, useState } from "react";
import "./FactContentPage.css";
import Header from "./header";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

const FactContentPage = () => {
  const { pageName } = useParams(); // comes from /page/:pageName
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [facts, setFacts] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/usersearch/page/${pageName}?category=${category}`);
        setFacts(res.data); // ← backend returns [mainPage, ...randomPages]
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
  };

  const handleNext = () => {
    setIndex((prev) => (prev === facts.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (facts.length === 0) return <p>No facts available.</p>;

  const currentFact = facts[index];
  const relatedFacts = facts.filter((_, i) => i !== index);

  return (
    <>
      <Header />
      <div className="fact-page">
        <div className="fact-card">
          <button onClick={handlePrev} className="nav-button left">◀</button>
          <div className="fact-text">
            <h1 className="fact-title">{currentFact.title}</h1>
            <p className="fact-desc">{currentFact.content}</p>
          </div>
          <div className="fact-image-wrap">
            <img
              src={currentFact.image}
              alt={currentFact.title}
              className="fact-image"
            />
          </div>
          <button onClick={handleNext} className="nav-button right">▶</button>
        </div>

        <div className="related-section">
          <h2 className="related-title">Related Facts</h2>
          <div className="related-grid">
            {relatedFacts.map((fact, i) => (
              <div key={i} className="related-card">
                <img src={fact.image} alt={fact.title} className="related-img" />
                <h3 className="related-title">{fact.title}</h3>
                <p className="related-text">{fact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FactContentPage;
