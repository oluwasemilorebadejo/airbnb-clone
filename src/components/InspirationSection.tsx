import React, { useState, useEffect } from "react";
import "./InspirationSection.css";

const InspirationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("unique-stays");
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const uniqueStaysData = [
    { title: "Cabins", location: "United States" },
    { title: "Treehouses", location: "United States" },
    { title: "Tiny Houses", location: "United States" },
    { title: "Beach Houses", location: "United States" },
    { title: "Lakehouses", location: "United States" },
    { title: "Yurt Rentals", location: "United States" },
    { title: "Yurt Rentals", location: "United Kingdom" },
    { title: "Castle Rentals", location: "United States" },
    { title: "Houseboats", location: "United States" },
    { title: "Holiday Caravans", location: "United Kingdom" },
    { title: "Private Island Rentals", location: "United States" },
    { title: "Farm Houses", location: "United States" },
    { title: "Farm Cottages", location: "United Kingdom" },
    { title: "Cabin Rentals", location: "Australia" },
    { title: "Luxury Cabins", location: "United Kingdom" },
    { title: "Luxury Cabins", location: "United States" },
    { title: "Holiday Chalets", location: "United Kingdom" },
    { title: "Show more" },
  ];

  const travelTipsData = [
    { title: "Travel tips", location: "Get inspired" },
    { title: "Guest resources", location: "Help and support" },
    { title: "Travel guides", location: "Discover destinations" },
    { title: "Host resources", location: "Learn about hosting" },
    { title: "Community", location: "Connect with others" },
    { title: "Newsroom", location: "Latest updates" },
  ];

  const apartmentsData = [
    { title: "Apartments", location: "London" },
    { title: "Apartments", location: "Paris" },
    { title: "Apartments", location: "New York" },
    { title: "Apartments", location: "Tokyo" },
    { title: "Apartments", location: "Sydney" },
    { title: "Apartments", location: "Barcelona" },
  ];

  const getCurrentData = () => {
    let data;
    switch (activeTab) {
      case "travel-tips":
        data = travelTipsData;
        break;
      case "apartments":
        data = apartmentsData;
        break;
      default:
        data = uniqueStaysData;
    }

    // Limit items on mobile to show only 4 rows
    if (isMobile) {
      const itemsPerRow = isSmallMobile ? 2 : 4; // 2 columns on small mobile, 4 on tablet
      const maxItems = 4 * itemsPerRow; // 4 rows
      return data.slice(0, maxItems);
    }

    return data;
  };

  return (
    <section className="inspiration-section">
      <div className="container">
        <h2 className="inspiration-title">Inspiration for future getaways</h2>

        <div className="inspiration-tabs">
          <button
            className={`tab-button ${
              activeTab === "unique-stays" ? "active" : ""
            }`}
            onClick={() => setActiveTab("unique-stays")}
          >
            Unique stays
          </button>
          <button
            className={`tab-button ${
              activeTab === "travel-tips" ? "active" : ""
            }`}
            onClick={() => setActiveTab("travel-tips")}
          >
            Travel tips & inspiration
          </button>
          <button
            className={`tab-button ${
              activeTab === "apartments" ? "active" : ""
            }`}
            onClick={() => setActiveTab("apartments")}
          >
            Airbnb-friendly apartments
          </button>
        </div>

        <div className="inspiration-grid">
          {getCurrentData().map((item, index) => (
            <div
              key={index}
              className={`inspiration-item ${
                item.title === "Show more" ? "show-more-item" : ""
              }`}
            >
              {item.title === "Show more" ? (
                <div className="show-more-content">
                  <div className="inspiration-title-text">{item.title}</div>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    className="show-more-icon"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "12px",
                      width: "12px",
                      stroke: "currentColor",
                      strokeWidth: "3",
                      overflow: "visible",
                    }}
                  >
                    <polyline fill="none" points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              ) : (
                <>
                  <div className="inspiration-title-text">{item.title}</div>
                  {item.location && (
                    <div className="inspiration-location">{item.location}</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
