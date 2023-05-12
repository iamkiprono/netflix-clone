import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import EnjoyTv from "./components/EnjoyTv";
import DownloadShows from "./components/DownloadShows";

const App = () => {
  return (
    <div className="bg-black text-white">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://mebincdn.themebin.com/1664271579476.jpg')",
        }}
        className="bg-center bg-cover "
      >
        <Navbar />
        <Homepage />
        <div className="h-3 bg-[#232323]"></div>
      </div>
      <EnjoyTv />
      <div className="h-3 bg-[#232323]"></div>
      <DownloadShows />
      <div className="h-3 bg-[#232323]"></div>
    </div>
  );
};

export default App;
