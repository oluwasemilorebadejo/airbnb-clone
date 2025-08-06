import React from "react";
import "./SearchSection.css";

const SearchSection: React.FC = () => {
  return (
    <div className="search-section">
      <div className="container">
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
            <svg
              viewBox="0 0 32 32"
              style={{
                display: "block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "currentColor",
                strokeWidth: "4",
                overflow: "visible",
              }}
            >
              <path fill="none" d="m13 13 4 4-4 4M21 12l-4 4 4 4"></path>
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
