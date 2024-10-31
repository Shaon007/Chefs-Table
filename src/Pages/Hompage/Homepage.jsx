import { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Recipies from "../../components/Recipies";
import Sidebar from "../../components/Sidebar";

const Homepage = () => {
  const [recipeQueue, setRecipeQueue] = useState([])
  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(prevRecipe => prevRecipe.recipeId === recipe.recipeId)
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
      console.log(recipe);
    }
    else {
      alert("Already Selected")
    }
  }
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-6  w-11/12 mx-auto">
        <Recipies addRecipeToQueue={addRecipeToQueue}></Recipies>
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </div>
    </div>
  );
};

export default Homepage;