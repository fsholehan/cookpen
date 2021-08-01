import { ClockIcon, ChartPieIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Recipe({ title, time, difficulty, portion, link, thumbnail }) {
  return (
    <div className="bg-white w-80 md:w-60">
      <img src={thumbnail} alt="" />
      <Link to={`/view/${link}`}>
        <h1 className="truncate p-5 text-lg font-semibold text-gray-800">
          {title}
        </h1>
      </Link>
      <div className="flex space-x-6 p-5  whitespace-nowrap">
        <div className="flex items flex-col">
          <ClockIcon className="h-6" />
          <p className="text-xs">{time}</p>
        </div>
        <div className="flex items flex-col">
          <ChartPieIcon className="h-6" />
          <p className="text-xs">{portion}</p>
        </div>
        <div className="flex items flex-col">
          <ChartBarIcon className="h-6" />
          <p className="text-xs">{difficulty}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
