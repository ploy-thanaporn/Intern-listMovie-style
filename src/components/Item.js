import React, { useEffect, useState } from "react";
import movies from "../data";
import { AiFillStar } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import "./Item.css";

const Item = (props) => {
  const [currentItems, setCurrentItems] = useState([]);

  const movieItem = currentItems
    .filter((movie) =>
      movie.name.toLowerCase().includes(props.searchText.toLowerCase())
    )
    .map((movie) => (
      <div
        key={movie.id}
        className="w-[200px] mx-[140px] my-8 cursor-pointer mt-24 hover:scale-105 duration-500"
      >
        <div className="flex justify-center items-center">
          <img
            src={movie.image}
            alt={movie.name}
            className="movie-img rounded-t-md"
          />
        </div>

        <div className="py-3 bg-zinc-900 w-full rounded-b-md">
          <div className="mx-2">
            <p className="text-base font-semibold text-zinc-400">
              {movie.name}
            </p>
            <div className="flex justify-between mt-1">
              <p className="text-zinc-500 text-sm">{movie.released}</p>
              <p className="flex justify-center items-center text-sm text-zinc-400">
                <span className="mr-1">
                  <AiFillStar color="yellow" fontSize="16px" />
                </span>
                {movie.rated}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (movie) => {
    const newOffset = (movie.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* <p className="text-white">{props.searchText}</p> */}
      <div className="grid grid-flow-row justify-center md:grid-cols-3">
        {movieItem}
      </div>
      <ReactPaginate
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      ;
    </div>
  );
};

export default Item;
