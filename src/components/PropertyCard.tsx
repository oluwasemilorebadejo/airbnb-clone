import React from "react";
import "./PropertyCard.css";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  isGuestFavorite?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  price,
  rating,
  isGuestFavorite = false,
}) => {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={image} alt={title} className="property-image" />
        <button className="favorite-button">
          <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "24px",
              width: "24px",
              stroke: "currentColor",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-4.58.68-7 2.1C13.58 4.68 10.8 4 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z"></path>
          </svg>
        </button>
        {isGuestFavorite && (
          <div className="guest-favorite-badge">Guest favorite</div>
        )}
      </div>
      <div className="property-info">
        <div className="property-header">
          <h3 className="property-title">{title}</h3>
          <div className="property-rating">
            <svg
              viewBox="0 0 32 32"
              style={{
                display: "block",
                height: "12px",
                width: "12px",
                fill: "currentColor",
              }}
            >
              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
            </svg>
            <span>{rating}</span>
          </div>
        </div>
        <p className="property-price">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
