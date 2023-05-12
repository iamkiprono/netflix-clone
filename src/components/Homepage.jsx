import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <div className="text-white h-[600px]  flex flex-col items-center justify-center p-2 text-center">
        <p className="text-4xl sm:text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </p>
        <p className="my-4 text-xl ">Watch anywhere. Cancel anytime.</p>
        <p className="my-4 text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className=" my-4 text-lg flex flex-col md:flex-row items-center">
          <input
            placeholder="Email address"
            className="bg-black border rounded p-[12px] mr-2 w-[300px] sm:w-[400px]"
            type="email"
          />
          <button className="bg-reddy px-[24px] py-[12px] rounded my-4 flex  items-center">
            Get Started <FaAngleRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
