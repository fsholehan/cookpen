import HeaderIcon from "./HeaderIcon";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";
import { BookmarkIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between md:px-12 md:py-3 px-3 py-2 shadow-sm bg-white z-100">
      <div className="flex space-x-6 items-center">
        <div>
          <Link to="/">
            <img
              src="/logo-cookpen.png"
              alt=""
              width={150}
              height={80}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex space-x-3">
          <button className="bg-yellow-500 px-3 py-1 rounded-full text-sm text-white font-semibold cursor-pointer">
            Masuk
          </button>
          <button className="border-2 border-yellow-400 px-3 py-1 rounded-full text-sm text-yellow-500 font-semibold cursor-pointer">
            Daftar
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <HeaderIcon Icon={HomeIcon} title="Beranda" active />
        <Link to="/cari">
          <HeaderIcon Icon={SearchIcon} title="Cari" />
        </Link>
        <HeaderIcon Icon={BookmarkIcon} title="Bookmark" />
      </div>
    </div>
  );
}

export default Header;
