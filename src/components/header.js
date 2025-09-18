import React, { useState } from "react";
import "../home.css";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./languageswitch";
import brandlogo from "../images/brandlogo.png";

const Header = ({ onSelectCategory }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const storedUser = localStorage.getItem("duknowUser");
  let user = null;

  
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (err) {
    console.error("Invalid JSON in localStorage: duknowUser");
  }

  const handleClick = (e) => {
    e.preventDefault();
    const cat = e.target.dataset.cat;
    if (cat) {
      onSelectCategory(cat);
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      {/* Branding */}
      <div className="brandmerge" onClick={() => navigate("/")}>
        <img src={brandlogo} className="brand" alt="brand" />
        <div className="logo">Duknow</div>
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`} onClick={handleClick}>
        <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</a>

        <div className="dropdown">
          <a href="#features">Category &#9662;</a>
          <div className="dropdown-content">
            <div className="innerdropdown">
              {/* Mock Tests */}
              {/* <div className="line1">
                <div className="line2">
                  <h5 className="listhead">Mock Tests</h5>
                  <a data-cat="UPSC">UPSC</a>
                  <a data-cat="Police">Police SI/Constable</a>
                  <a data-cat="APPSC">APPSC</a>
                  <a data-cat="TSPSC">TSPSC</a>
                  <a data-cat="SSC">SSC</a>
                  <a data-cat="RRB">RRB</a>
                  <a data-cat="Defence">Defence (NDA/CDS)</a>
                  <a data-cat="IBPS">IBPS</a>
                  <a data-cat="RBI">RBI</a>
                  <a data-cat="Group1">Group 1</a>
                  <a data-cat="Group2">Group 2</a>
                  <a data-cat="Group3">Group 3</a>
                  <a data-cat="Group4">Group 4</a>
                  <a data-cat="JEE">JEE Mains</a>
                  <a data-cat="NEET">NEET</a>
                  <a data-cat="TET">Teaching (TET/DSC)</a>
                </div>
              </div> */}

              {/* Basic */}
              <div className="line1">
                <div className="line2">
                  <h5 className="listhead">Basic</h5>
                  <a data-cat="technology">Technology</a>
                  <a data-cat="science">Science</a>
                  <a data-cat="history">History</a>
                  <a data-cat="movies">Biography</a>
                  <a data-cat="food">Health & Food</a>
                  <a data-cat="sports">Sports</a>
                  <a data-cat="space">Space</a>
                  <a data-cat="Software">Software</a>
                </div>
              </div>

              {/* Competitive */}
              <div className="line1">
                <div className="line2">
                  <h5 className="listhead">Competitive Exams</h5>
                  <a data-cat="GK">GK</a>
                  <a data-cat="polity">Polity</a>
                  <a data-cat="computer">Computer Awareness</a>
                  <a data-cat="geography">Geography</a>
                  <a data-cat="economy">Economy</a>
                  <a data-cat="reasoning">Reasoning</a>
                  <a data-cat="aptitude">Aptitude</a>
                  <a data-cat="english">English</a>
                  <a data-cat="ethics">Ethics</a>
                  <a data-cat="environment">Environment & Ecology</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a  onClick={() => navigate("/about")}>About</a>
        <a  onClick={() => navigate("/contact")}>Contact</a>

        <LanguageSwitcher
          onLanguageChange={(lang) => {
            console.log("Selected language:", lang);
          }}
        />
      </nav>

      {/* Profile / Login */}
      {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {user && user.email ? (
          <button className="btn2 btn-primary" onClick={() => navigate("/profile")}>
            {user.email.charAt(0).toUpperCase()}
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => navigate("/login")}>
            Sign In
          </button>
        )}

       
      </div> */}
       <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

      
    </header>
  );
};

export default Header;
