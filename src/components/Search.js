import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const searchText = (event) => {
    setSearch(event.target.value);

    props.onSubmit(event.target.value);
  };

  return (
    <div className="flex flex-row bg-slate-50 rounded-md w-[40%] items-center border-solid border-2 border-slate-100 pr-12">
      <button>
        <AiOutlineSearch color="gray" />
      </button>

      {
        <input
          type="text"
          placeholder="search"
          className="w-full bg-inherit pl-1 focus:outline-none text-gray-500 search-box"
          value={search}
          onChange={searchText}
        />
      }
    </div>
  );
};
// {    ? <Item /> : ""}
export default Search;
