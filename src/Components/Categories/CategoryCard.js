// CategoryCard.js
import React from "react";

function CategoryCard({ image, title, itemCount }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      <div className="category-info">
        <h3 className="category-title">{title}</h3>
        <p className="category-items">{itemCount} Item Available</p>
      </div>
    </div>
  );
}

export default CategoryCard;
