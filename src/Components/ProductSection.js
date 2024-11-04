import React from "react";
import ProductCard from "./ProductCard";

function ProductSection({ selectedCategory }) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      imageUrl: "/images/product1.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      imageUrl: "/images/product2.jpg",
      category: "Clothing",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      imageUrl: "/image/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
      category: "Home",
    },
    {
      id: 4,
      name: "Product 4",
      price: 39.99,
      imageUrl: "/images/product4.jpg",
      category: "Electronics",
    },
    // Add more products as needed
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-section">
      <h2 className="heading">Products For You</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
