import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./Navbar/NavLinks";
import Button from "./Navbar/Button";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Function to handle menu icon click
  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-blue-900" style={{ position: "sticky", top: "0", zIndex: 999 }}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <h1 className="md:cursor-pointer text-xl font-bold text-white">TexMarg</h1>
          <div className="text-3xl md:hidden text-white" onClick={handleMenuClick}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className={`md:flex hidden uppercase items-center gap-8 font-[Poppins] text-white`}>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/industries" className="py-7 px-3 inline-block">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
            Compliance
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className={`md:block hidden text-white`}>
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
           md:hidden bg-blue-900 fixed w-full top-20 overflow-y-auto bottom-0 py-14 pl-4 
           duration-500 ${open ? "left-0" : "left-[-100%]"}
           text-white
           `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/industries" className="py-7 px-3 inline-block text-white">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
            Compliance
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
