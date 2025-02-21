import React from "react";
import Herocarousel from "../Components/herocarousel";
import Categories from "../Components/Categories";
import Recipelist from "../Components/recipelist";

function Home() {
  return (
    <div className="home-page">
      <Herocarousel />
      <Categories />
      <Recipelist />
    </div>
  );
}

export default Home;
