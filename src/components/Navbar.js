import React from "react";

const Navbar = ({ address }) => {
  return (
    <div className="bg-slate-700 text-white px-20 py-6 flex justify-between">
      <h2 className="text-lg font-bold">EthBirds</h2>
      <span>{address}</span>
    </div>
  );
};

export default Navbar;
