import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Recipe from "./Recipe";
import { listRecipes } from "../actions/recipeActions";

function ListRecipes() {
  const dispatch = useDispatch();

  const recipeList = useSelector((state) => state.recipeList);
  const { loading, error, recipes } = recipeList;

  useEffect(() => {
    dispatch(listRecipes());
  }, [dispatch]);

  return (
    <main className="mt-9 px-0 md:px-6 mb-3">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {recipes.results?.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.title}
              thumbnail={recipe.thumb}
              portion={recipe.portion}
              time={recipe.times}
              difficulty={recipe.dificulty}
              link={recipe.key}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default ListRecipes;
