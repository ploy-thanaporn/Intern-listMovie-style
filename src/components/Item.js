import React from "react";
import movies from "../data";
import { AiFillStar } from "react-icons/ai";

const Item = () => {
  const movieItem = movies.map((movie) => (
    <div
      key={movie.id}
      className="w-[360px] shadow-lg shadow-gray-200 mx-14 my-8 cursor-pointer mt-24"
    >
      <div className="flex justify-center items-center">
        <img src={movie.image} alt="" />
      </div>
      <div className="mx-20 py-4">
        <p className="text-base font-semibold">{movie.name}</p>
        <div className="flex justify-between mt-1">
          <p className="text-gray-500 text-sm">{movie.released}</p>
          <p className="flex justify-center items-center text-sm">
            <span className="mr-1">
              <AiFillStar color="yellow" fontSize="16px" />
            </span>
            {movie.rated}
          </p>
        </div>
      </div>
    </div>
  ));

  return <div className="grid grid-cols-3 gap-1">{movieItem}</div>;
};

export default Item;
