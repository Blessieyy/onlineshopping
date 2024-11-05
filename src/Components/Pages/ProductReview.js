// src/ProductCard.js
import React, { useState } from 'react';
import '../Styles/ProductReview.css';

const ProductCard = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="productr-card">
            <div className="image-gallery">
                <img
                    src="https://via.placeholder.com/150"
                    alt="AirPods Max"
                    className="main-image"
                />
                <div className="thumbnail-container">
                    <img src="https://via.placeholder.com/50" alt="Thumbnail 1" />
                    <img src="https://via.placeholder.com/50" alt="Thumbnail 2" />
                    <img src="https://via.placeholder.com/50" alt="Thumbnail 3" />
                    <img src="https://via.placeholder.com/50" alt="Thumbnail 4" />
                    <img src="https://via.placeholder.com/50" alt="Thumbnail 5" />
                </div>
            </div>

            <div className="product-details">
                <h1>AirPods Max</h1>
                <p>Active noise cancellation for immersive sound.</p>
                <div className="rating">⭐⭐⭐⭐⭐</div>
                <div className="price">
                    <span>$549.00</span> or $99.99/month
                </div>

                <div className="color-options">
                    <p>Choose a Color</p>
                    <div className="color-selector">
                        <span className="color red"></span>
                        <span className="color green"></span>
                        <span className="color black"></span>
                        <span className="color blue"></span>
                        <span className="color silver"></span>
                    </div>
                </div>

                <div className="stock-info">
                    <p>Only <span>3</span> left!</p>
                    <div className="quantity-selector">
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>
                </div>

                <div className="buttons">
                    <button className="buy-now">Buy Now</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="delivery-info">
                    <p>📦 Free Delivery</p>
                    <p>🔄 Free Return Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
