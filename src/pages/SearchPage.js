import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../actions/categoryActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function SearchPage() {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <div className="px-6 overflow-x-hidden mb-14 md:mb-0">
      <FormInput />
      <h3 className="my-3 text-gray-500 text-xl font-semibold md:px-6">
        Kategori
      </h3>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? <h3>{error.message}</h3> : (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-3 md:px-6 whitespace-nowrap">
          {categories?.results?.map((category, index) => (
            <Link to={`/categories/${category.key}`}>
              <div
                className="bg-gray-50 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md cursor-pointer"
                key={index}
              >
                {category.category}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
