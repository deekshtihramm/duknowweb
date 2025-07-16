import React, { useEffect, useState } from "react";
import "./FactContentPage.css";
import Header from "./header";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Footer from "./footer";

const FactContentPage = () => {
  const { pageName } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const navigate = useNavigate();
  const language = localStorage.getItem("language") || "en";

  const [facts, setFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Language helpers
  const getTitle = (fact) => {
    if (language === "te") return fact.titleTelugu || fact.title;
    if (language === "hi") return fact.titleHindi || fact.title;
    return fact.title;
  };

  const getLongMatter = (fact) => {
    if (language === "te") return fact.longmatterTelugu || fact.longmatter;
    if (language === "hi") return fact.longmatterHindi || fact.longmatter;
    return fact.longmatter;
  };

  // Fetch & filter facts based on category and set index based on pageNumber
  useEffect(() => {
    try {
      const rawData = sessionStorage.getItem("facts");
      if (!rawData) {
        setError("No facts found.");
        setLoading(false);
        return;
      }

      const parsedFacts = JSON.parse(rawData);

      const filtered = parsedFacts.filter((fact) =>
        category
          ? fact.category?.toLowerCase() === category.toLowerCase()
          : true
      );

      const index = filtered.findIndex(
        (fact) => fact.pageNumber?.toString() === pageName
      );

      if (index === -1) {
        setError("Fact not found.");
        setLoading(false);
        return;
      }

      setFacts(filtered);
      setCurrentIndex(index);
      setLoading(false);
    } catch (err) {
      console.error("Error loading facts:", err);
      setError("Error loading facts.");
      setLoading(false);
    }
  }, [pageName, category]);

  // Navigation
  const goToFact = (index) => {
    const fact = facts[index];
    setCurrentIndex(index);
    navigate(`/page/${fact.pageNumber}?category=${category}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? facts.length - 1 : currentIndex - 1;
    goToFact(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === facts.length - 1 ? 0 : currentIndex + 1;
    goToFact(newIndex);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!facts.length) return <p>No facts available.</p>;

  const currentFact = facts[currentIndex];

  
const handleShare = async (pageNumber) => {
  const shareUrl = `${window.location.origin}/page/${pageNumber}?category=${category}`;
  const imageUrl = currentFact.imageUrl;
  const title = getTitle(currentFact);

  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: `${title}\nCheck out this fact from Duknow!\nImage: ${imageUrl}`,
        url: shareUrl,
      });
    } catch (err) {
      console.error("Share cancelled or failed:", err);
    }
  } else {
    try {
      const textToCopy = `${title}\n${imageUrl}\n${shareUrl}`;
      await navigator.clipboard.writeText(textToCopy);
      alert("Title, image link, and page URL copied to clipboard!");
    } catch (err) {
      console.error("Clipboard write failed:", err);
      alert("Failed to copy link.");
    }
  }
};




  return (
    <>
      <Header />
      <div className="fact-page">
        <div className="fact-card">
          <button onClick={handlePrev} className="nav-button left">◀</button>

          <div className="fact-image-wrap">
            <img
              src={currentFact.imageUrl}
              alt={currentFact.title}
              className="fact-image"
            />
          </div>

          <div className="fact-text">
            <h1 className="fact-title">{getTitle(currentFact)}</h1>
            <button
              className="share-button"
              onClick={() => handleShare(currentFact.pageNumber)}
            >
              🔗 Share
            </button>

            <p className="fact-desc">{getLongMatter(currentFact)}</p>
          </div>

          <button onClick={handleNext} className="nav-button right">▶</button>
        </div>

        <div className="related-section">
          <h2 className="related-title">Related Facts</h2>
          <div className="related-grid">
            {facts.map((fact, i) =>
              i === currentIndex ? null : (
                <div
                  key={i}
                  className="related-card"
                  onClick={() => goToFact(i)}
                >
                  <img
                    src={fact.imageUrl}
                    alt={fact.title}
                    className="related-img"
                  />
                  <h3 className="related-title">{getTitle(fact)}</h3>
                  <p className="related-text">
                    {getLongMatter(fact).slice(0, 100)}...
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FactContentPage;
