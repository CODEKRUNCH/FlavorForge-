import React, { useState } from "react";
import "./Categories.css";

const allCategories = [
  [
    { name: "Breakfast", icon: "onigiri.png" },
    { name: "Vegan", icon: "vegan.png" },
    { name: "Meat", icon: "meat.png" },
    { name: "Dessert", icon: "dessert.png" },
    { name: "Lunch", icon: "lunch.png" },
    { name: "Chocolate", icon: "choco.png" }
  ],
  [
    { name: "Pizza", icon: "pizza.png" },
    { name: "Pasta", icon: "pasta.png" },
    { name: "Salad", icon: "salad.png" },
    { name: "Soup", icon: "soup.png" },
    { name: "Sushi", icon: "sushi.png" },
    { name: "Drinks", icon: "drinks.png" }
  ]
];

const Categories = () => {
  const [page, setPage] = useState(0);

  const nextCategories = () => {
    setPage((prevPage) => (prevPage + 1) % allCategories.length);
  };
  const handlecategoryclick=(category)=>{
    console.log("Clicked on ${category.name}");
  };

  return (
    <div className="categories-container">
      <h2 className="categories-title">Categories</h2>
      <div className="categories-grid">
        {allCategories[page].map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.icon} alt={category.name} className="category-icon" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
      <br />
      <div className="buttons-container">
        <button className="view-all">View All Categories</button>
        <button className="next-button" onClick={nextCategories}>&rarr;</button>
      </div>
    </div>
  );
};

export default Categories;