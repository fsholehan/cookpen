import { SearchIcon } from "@heroicons/react/solid";
import { BookmarkIcon, HomeIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function FootNav() {
  return (
    <div className="w-full">
      <section className="block fixed inset-x-0 bottom-0 z-10 bg-white border-t border-gray-300 md:hidden">
        <div className="flex justify-between">
          <Link to="/" className="w-full flex flex-col items-center p-2 ">
            <HomeIcon className="h-7 text-center" />
            <span className="block text-xs">Beranda</span>
          </Link>
          <Link to="/cari" className="w-full flex flex-col items-center p-2">
            <SearchIcon className="h-7 text-center" />
            <span className="block text-xs">Cari</span>
          </Link>
          <div className="w-full flex flex-col items-center p-2">
            <BookmarkIcon className="h-7 text-center" />
            <span className="block text-xs">Bookmark</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FootNav;
