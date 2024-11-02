import { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Recipies from "../../components/Recipies";
import Sidebar from "../../components/Sidebar";

const Homepage = () => {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)
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
  const handleRemove = (id, time, calorie) => {
    console.log(Number(time), typeof (Number(time)));
    setTotalTime(totalTime + Number(time))
    console.log(totalTime);
    setTotalCalories(totalCalories + calorie)
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipeId === id)

    const updatedQueue = recipeQueue.filter(recipe => recipe.recipeId !== id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])

  }

  // const calTimeCalories = (time, calorie) => {
  //   setTotalTime(totalTime + time)
  //   setTotalCalories(totalCalories + calorie)
  // }

  return (
    <div>
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-6  w-11/12 mx-auto">
        <Recipies addRecipeToQueue={addRecipeToQueue}></Recipies>
        <Sidebar
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          totalTime={totalTime}
          totalCalories={totalCalories}
          preparedRecipe={preparedRecipe}>
          {/* calTimeCalories ={calTimeCalories} */}


        </Sidebar>
      </div>
    </div>
  );
};

export default Homepage;