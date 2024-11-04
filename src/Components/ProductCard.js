// ProductCard.js
import React from "react";

function ProductCard({ name, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">R{price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
