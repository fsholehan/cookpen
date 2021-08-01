import { useState } from "react";
import { useHistory } from "react-router-dom";

function InputSearch() {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");

  const getKeyword = (e) => {
    e.preventDefault();

    history.push(`/cari/${keyword}`);
  };

  return (
    <div className="mt-6 bg-white border rounded-md w-2/3 focus-within:ring ring-yellow-400  ring-opacity-40">
      <form className="flex flex-wrap justify-between" onSubmit={getKeyword}>
        <input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          name="q"
          placeholder="Cari resep"
          required="required"
          className="flex-1 px-4 h-10 lg:h-12 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
        />
        <button
          type="submit"
          className="flex justify-center items-center w-full lg:w-12 lg:h-12 p-2 lg:p-0 m-1 text-white transition-colors duration-200 transform rounded-md bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:bg-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default InputSearch;
