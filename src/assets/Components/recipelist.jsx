import React from 'react';
import './recipelist.css';
import Recipebox from './recipebox';

const handleClick = () => {
  alert('Button Clicked!');
};

function RecipeList() {
  const recipes = [
    { imageSrc: "burger.jpg", title: "Big and Juicy Wagyu Beef Cheeseburger", time: 30, category: "Snack" },
    { imageSrc: "salmon.jpg", title: "Fresh Lime Roasted Salmon with Ginger Sauce", time: 30, category: "Fish" },
    { imageSrc: "pancake.jpg", title: "Strawberry Oatmeal Pancake with Honey Syrup", time: 30, category: "Breakfast" },
    { imageSrc: "salad.jpg", title: "Fresh and Healthy Mixed Mayonnaise Salad", time: 30, category: "Healthy" },
    { imageSrc: "meatballs.jpg", title: "Chicken Meatballs with Cream Cheese", time: 30, category: "Meat" },
    { imageSrc: "pancake2.jpg", title: "Fruity Pancake with Orange & Blueberry", time: 30, category: "Sweet" },
    { imageSrc: "chicken.jpg", title: "The Best Easy One Pot Chicken and Rice", time: 30, category: "Snack" },
    { imageSrc: "pasta.jpg", title: "The Creamiest Creamy Chicken and Bacon Pasta", time: 30, category: "Noodles" }
  ];
  
  return (
    <div>
    <div className='headeraboverecipe'>
      <h1 className='headerbelowcategory'>Simple and Tasty Recipes</h1>
      <p className='parabelowit'>
        Here is a list of the recipes that u can make throught the website <br />this is a catalog
      </p>
     
    </div>
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <Recipebox key={index} {...recipe} />
      ))}
    </div>
    </div>
  );
}

export default RecipeList;
