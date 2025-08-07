import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchSection.css";

const SearchSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="search-section">
      <div className="container">
        {isMobile ? (
          <div className="search-bar mobile-search">
            <div className="mobile-search-input">
              <FiSearch size={16} className="mobile-search-icon" />
              <input
                type="text"
                placeholder="Start your search"
                className="mobile-search-field"
              />
            </div>
          </div>
        ) : (
          <div className="search-bar">
            <div className="search-item">
              <label>Where</label>
              <input type="text" placeholder="Search destinations" />
            </div>
            <div className="search-divider"></div>
            <div className="search-item">
              <label>Check in</label>
              <input type="text" placeholder="Add dates" />
            </div>
            <div className="search-divider"></div>
            <div className="search-item">
              <label>Check out</label>
              <input type="text" placeholder="Add dates" />
            </div>
            <div className="search-divider"></div>
            <div className="search-item">
              <label>Who</label>
              <input type="text" placeholder="Add guests" />
            </div>
            <button className="search-button">
              <FiSearch size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
