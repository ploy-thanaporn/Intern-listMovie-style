import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center bg-white px-36 drop-shadow-lg">
      <div className="font-bold text-xl">
        <h2>Movie</h2>
      </div>
      <div className="menu">
        <ul className="flex gap-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
