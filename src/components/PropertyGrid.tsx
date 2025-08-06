import React from "react";
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
          <button className="view-all-button">
            <span>View all</span>
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
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
              <polyline fill="none" points="6 9 12 3 18 9"></polyline>
            </svg>
          </button>
        </div>
        <div className="property-grid">
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
