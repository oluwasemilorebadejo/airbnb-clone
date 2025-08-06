import React from "react";
import { FiSearch } from "react-icons/fi";
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
            <FiSearch size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
