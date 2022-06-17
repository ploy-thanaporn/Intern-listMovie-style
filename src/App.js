import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleOnsubmit = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <Navbar onSubmit={handleOnsubmit} />

      {/* <div className="mt-16 flex justify-center items-center">
        <img
          src="https://www.bloggang.com/data/p/pitchayut8/picture/1652201899.jpg"
          alt=""
          className=""
        />
        <img
          src="https://i.pinimg.com/originals/7a/7c/89/7a7c89ea39c4b059abc4b55f82484e0d.jpg"
          alt=""
          className="h-[410px]"
        />
      </div> */}
      <div className="w-full h-screen">
        <Item searchText={searchText} />
      </div>
    </div>
  );
}

export default App;
