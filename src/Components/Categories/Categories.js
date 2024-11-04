import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import ProductSection from "../ProductSection";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Electronics",
      itemCount: 10,
      image: "/image/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    },
    { id: 2, title: "Clothing", itemCount: 20, image: "/images/clothing.jpg" },
    { id: 3, title: "Home", itemCount: 15, image: "/images/home.jpg" },
    // Add more categories as needed
  ];

  const handleCategoryClick = (title) => {
    setSelectedCategory(title);
  };

  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.title === selectedCategory)
    : categories;

  return (
    <div className="categories">
      <h2 className="section-title">Categories</h2>
      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.title)}
          >
            <CategoryCard
              title={category.title}
              itemCount={category.itemCount}
              image={category.image}
            />
          </div>
        ))}
      </div>
      {selectedCategory && (
        <button onClick={() => setSelectedCategory(null)}>
          Show All Categories
        </button>
      )}
      {/* Render ProductSection with the selected category */}
      <ProductSection selectedCategory={selectedCategory} />
    </div>
  );
}

export default Categories;
