import React, { useRef } from "react";
import PropertyCard from "./PropertyCard";
import "./PropertyGrid.css";

interface Property {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  details: string;
  isGuestFavorite?: boolean;
}

interface PropertyGridProps {
  title: string;
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ title, properties }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 12; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth * 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 12; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="property-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {title}
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              style={{
                display: "inline-block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "currentColor",
                strokeWidth: "2",
                overflow: "visible",
                marginLeft: "8px",
              }}
            >
              <polyline fill="none" points="6 4 12 10 6 16"></polyline>
            </svg>
          </h2>
          <div className="navigation-buttons">
            <button
              className="nav-button"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                style={{
                  display: "block",
                  fill: "none",
                  height: "16px",
                  width: "16px",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  overflow: "visible",
                }}
              >
                <polyline fill="none" points="12 4 6 10 12 16"></polyline>
              </svg>
            </button>
            <button
              className="nav-button"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                style={{
                  display: "block",
                  fill: "none",
                  height: "16px",
                  width: "16px",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  overflow: "visible",
                }}
              >
                <polyline fill="none" points="6 4 12 10 6 16"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className="property-grid" ref={scrollContainerRef}>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.image}
              title={property.title}
              price={property.price}
              rating={property.rating}
              details={property.details}
              isGuestFavorite={property.isGuestFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
