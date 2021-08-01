import { useDispatch, useSelector } from "react-redux";
import { listByCategory } from "../actions/categoryActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";

function CategoriesPage() {
  const { key } = useParams();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryListBy);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listByCategory(key));
  }, [dispatch, key]);

  return (
    <main className="mt-9 px-3 md:px-6 mb-3 pb-12 md:pb-0">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {categories.results?.map((category, index) => (
            <Recipe
              key={index}
              title={category.title}
              thumbnail={category.thumb}
              portion={category.portion}
              time={category.times}
              difficulty={category.dificulty}
              link={category.key}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default CategoriesPage;
