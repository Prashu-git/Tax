import React from "react";

const Button = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white border border-black text-black px-6 py-2 rounded-full"
      />
      {/* <button className="bg-white text-black px-4 py-2 rounded-full ml-2">
      Search
    </button> */}
    </div>

  );
};

export default Button;
