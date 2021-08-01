import { listRecipeByKeyword } from "../actions/recipeActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";

function SearchResultPage() {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  const recipeListByKeyword = useSelector((state) => state.recipeListByKeyword);
  const { loading, error, recipes } = recipeListByKeyword;

  useEffect(() => {
    dispatch(listRecipeByKeyword(keyword));
  }, [keyword, dispatch]);

  return (
    <main className="mt-9 px-3 md:px-6 mb-3 pb-12 md:pb-0">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {recipes?.results?.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.title}
              thumbnail={recipe.thumb}
              portion={recipe.serving}
              time={recipe.times}
              difficulty={recipe.difficulty}
              link={recipe.key}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default SearchResultPage;
