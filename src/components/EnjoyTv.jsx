import React from "react";

const EnjoyTv = () => {
  return (
    <div>
      <div className=" flex items-center justify-center sm:flex-row gap-10 flex-col  px-5 py-20 ">
        <div className="w-[340px] text-center">
          <p className="text-5xl font-bold my-4">Enjoy on your TV</p>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div>
          <img
          className="w-96"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EnjoyTv;
