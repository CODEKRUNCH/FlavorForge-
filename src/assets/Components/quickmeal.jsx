import React, { useState } from "react";
import './quickmeal.css';

function QuickMeal() {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState(""); 
  const [description, setDescription] = useState("");
  const [suggestedDishes, setSuggestedDishes] = useState([]); // Stores dishes from API
  const [selectedDish, setSelectedDish] = useState(""); // Stores user's chosen dish
  const [dishSteps, setDishSteps] = useState(""); // Stores cooking steps
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestedDishes([]);
    setSelectedDish("");
    setDishSteps("");

    try {
      const response = await fetch("http://localhost:5000/get_recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients, mealType, description }),
      });

      const data = await response.json();
      setSuggestedDishes(data.dishes || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  const handleDishSelection = async (dish) => {
    setSelectedDish(dish);
    setLoading(true);
    setDishSteps(""); // Clear previous steps
  
    try {
      const response = await fetch("http://localhost:5000/get_steps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dish }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setDishSteps(data.steps || "Steps not available.");
      } else {
        setDishSteps("Failed to fetch steps. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching steps:", error);
      setDishSteps("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quick-meal-page">
      <h2>🔥 Quick Meal Recipes</h2>
      <p>Here are some quick recipes for a fast and tasty meal!</p>

      <div className="quickmeal-container">
        <h2>Quick Meal Finder</h2>
        <form onSubmit={handleSubmit} className="quickmeal-form">
          <label>Enter Ingredients:</label>
          <input
            type="text"
            placeholder="E.g., eggs, cheese, bread"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />

          <label>Select Meal Type:</label>
          <select value={mealType} onChange={(e) => setMealType(e.target.value)} required>
            <option value="">-- Select Meal Type --</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>

          <label>Meal Description (Optional):</label>
          <textarea
            placeholder="Describe your meal (optional)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Finding Recipes..." : "Find Quick Meal"}
          </button>
        </form>

        {/* Display suggested dishes */}
        {suggestedDishes.length > 0 && (
          <div className="dish-selection">
            <label>Select a Dish:</label>
            <select onChange={(e) => handleDishSelection(e.target.value)}>
              <option value="">-- Choose a Dish --</option>
              {suggestedDishes.map((dish, index) => (
                <option key={index} value={dish.name}>{dish.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Display dish steps */}
      {/* Display dish steps in a clean, numbered list */}
{selectedDish && dishSteps && (
  <div className="dish-details">
    <h3>Cooking Steps for {selectedDish}:</h3>
    <div className="steps-container">
      <ul className="steps-list">
        {dishSteps.split("\n").map((step, index) => (
          <li key={index} className="step-item">{step.replace(/\*\*/g, "")}</li>
        ))}
      </ul>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default QuickMeal;
