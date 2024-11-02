
const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe,  totalTime, totalCalories }) => {
  return (
    // Want to cook section
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Want To Cook: {recipeQueue.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr >
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories Color</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (

              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipeName}</td>
                <td>{recipe.preparingTime}</td>
                <td>{recipe.calories}</td>
                <td><button onClick={() => {
                  handleRemove(recipe.recipeId, recipe.preparingTime,
                    recipe.calories)

                }
                }  className="btn bg-green-400 rounded-3xl">Preparing</button></td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
      {/* Preparing Section */}
      <div className="overflow-x-auto mt-8">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Currently Cooking: {preparedRecipe.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr >
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories </th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (

              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipeName}</td>
                <td>{recipe.preparingTime}</td>
                <td>{recipe.calories}</td>
                <td>
                </td>

              </tr>


            ))}
            <tr className="border-none">
              <td> </td>
              <td> </td>
              <td>Total Time={totalTime} </td>
              <td>Total Calories={totalCalories}</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;