import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClockIcon, ChartPieIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { listRecipeDetails } from "../actions/recipeActions";

function ViewPage() {
  const { key } = useParams();
  const dispatch = useDispatch();

  const recipeDetails = useSelector((state) => state.recipeDetails);
  const { loading, error, recipe } = recipeDetails;

  useEffect(() => {
    dispatch(listRecipeDetails(key));
  }, [key, dispatch]);

  return (
    <div className="bg-white w-full md:w-2/3 mt-1 mx-auto">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <>
          <div>
            <img src={recipe?.results?.thumb} alt="" className="cover w-full" />
            <h2 className="text-2xl text-gray-600 font-semibold px-3 py-1">
              {recipe?.results?.title}
            </h2>
            <p className="px-3 py-1 text-lg">
              Author:{" "}
              <span className="font-semibold">
                {recipe?.results?.author?.user}
              </span>
            </p>
          </div>
          <div className="flex space-x-6 p-5  whitespace-nowrap border-b border-gray-200">
            <div className="flex items flex-col">
              <ClockIcon className="h-6" />
              <p className="text-xs">{recipe?.results?.times}</p>
            </div>
            <div className="flex items flex-col">
              <ChartPieIcon className="h-6" />
              <p className="text-xs">{recipe?.results?.servings}</p>
            </div>
            <div className="flex items flex-col">
              <ChartBarIcon className="h-6" />
              <p className="text-xs">{recipe?.results?.dificulty}</p>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <p className="text-base px-3 py-1">{recipe?.results?.desc}</p>
          </div>
          <div className="px-3 py-1">
            <h3 className="mb-2 text-xl text-gray-900 mt-3">Bahan - bahan</h3>
            <ul>
              {recipe?.results?.ingredient?.map((ingredient, index) => (
                <li key={index} className="py-1 border-b border-dashed">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 py-1">
            <h3 className="mt-3 mb-2 text-xl font-semibold">Langkah</h3>
            <ul>
              {recipe.results?.step?.map((step, index) => (
                <li key={index} className="py-2">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewPage;
