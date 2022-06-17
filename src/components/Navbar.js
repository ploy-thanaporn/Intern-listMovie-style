import React, { useState } from "react";
import { MdMovie } from "react-icons/md";
import Search from "./Search";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const handleOnsubmit = (text) => {
    props.onSubmit(text);
  };

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="p-5 bg-zinc-900 text-white md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        {/* logo */}
        <span className="flex justify-center items-center font-bold text-xl md:mx-16">
          <MdMovie fontSize="24px" className="mr-2" /> Movie
        </span>

        {/* icon menu */}
        <span
          className="text-xl cursor-pointer mx-2 md:hidden block"
          onClick={handleClick}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </span>
      </div>

      {/* menu */}
      <ul
        className={
          !nav
            ? "top-[80px] opacity-100 md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-zinc-900 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px]"
            : "  "
        }
      >
        <li className="mx-4 my-6 md:my-0 text-md hover:text-orange-400">
          Home
        </li>
        <li className="mx-4 my-6 md:my-0 text-md hover:text-orange-400">
          About
        </li>
        <li className="mx-4 my-6 md:my-0 text-md hover:text-orange-400">
          Contact
        </li>
        <Search onSubmit={handleOnsubmit} />
      </ul>
    </nav>
  );
};

export default Navbar;
