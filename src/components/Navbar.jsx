import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex p-6 max-w-7xl m-auto justify-between items-center ">
       <img className="w-32" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button className="rounded px-4  py-1 bg-reddy text-white">Sign In</button>
      </nav>
    </div>
  );
};

export default Navbar;
