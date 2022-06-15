import React, { useEffect, useState } from "react";
import movies from "../data";
import { AiFillStar } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import "./Item.css";

const Item = () => {
  const [currentItems, setCurrentItems] = useState([]);

  const movieItem = currentItems.map((movie) => (
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
      <div className="grid grid-cols-3 gap-1">{movieItem}</div>
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
