import { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
const Recipies = ({addRecipeToQueue}) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('./recipes.json')
      .then(res => res.json())
    .then(data => setRecipes(data))
  },[])
  // console.log(recipes);

  return (
    <div className="md:w-2/3 lg:ml-7">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {recipes.map(recipe => (
          <div key={recipe.recipeId} className="mb-7 card border-2 bg-base-100 w-96 ">
            <figure>
              <img className="h-[200px] w-[330px] object-cover rounded-xl"
                src={recipe.recipeImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title tex-xl">{recipe.recipeName}!</h2>
              <p>{recipe.shortDescription}</p>
              <hr />
              <ul>
                {recipe.ingredients.map((ingredient, recipeId) => (
                  <li key={recipeId}>● <span className="ml-2"></span>{ingredient}</li>
                ))}
              </ul>
              <hr />
              <div className="flex gap-4">
                <div><i className="fa-regular fa-clock mr-1"></i> {recipe.preparingTime} minutes</div>
                <div><i className="fa-solid fa-fire-flame-curved mr-1"></i>{recipe.calories} calories</div>
              </div>
              <div className="card-actions ">
                <button onClick={()=>addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-3xl">Want to Cook</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipies;