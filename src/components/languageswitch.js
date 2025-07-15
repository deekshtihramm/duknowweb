import React, { useState, useEffect } from "react";
import "./language.css";


const LanguageSwitcher = ({ onLanguageChange }) => {
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    // Check if language was previously selected
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setSelectedLang(savedLang);
      onLanguageChange?.(savedLang); // optional callback
    }
  }, [onLanguageChange]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    localStorage.setItem("language", lang); // save to localStorage
    onLanguageChange?.(lang); // notify parent
    window.location.reload(); // 
  };

  return (
    <div className="p-4 rounded shadow-md bg-white text-center">
      <select
        value={selectedLang}
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="en">English</option>
        <option value="te">Telugu</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
