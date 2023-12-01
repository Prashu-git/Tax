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
    <nav className="bg-sky-600 " style={{ position: "sticky", top: "0", zIndex: 999 }}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <h1 className="md:cursor-pointer text-2xl font-bold text-white" style={{ fontFamily: "Times New Roman" }}>TaxMarg</h1>
          <div className="text-xl md:hidden text-white" onClick={handleMenuClick}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className={`md:flex hidden front-xl items-center gap-6 font-[Poppins] text-white`}>
          <li>
            <Link to="/" className="py-7 px-3 inline-block" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              Home
            </Link>

          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/industries" className="py-7 px-3 inline-block" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              Industries
            </Link>
          </li>
          <NavLinks />


          <li>
            <Link to="/contact" className="py-7 px-3 inline-block" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              Contact
            </Link>
          </li>
          {/* <Demo/> */}
        </ul>
        <div className={`md:block hidden text-white`}>
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
           md:hidden bg-sky-600 fixed w-full top-20 overflow-y-auto bottom-0 py-14 pl-4 
           duration-500 ${open ? "left-0" : "left-[-100%]"}
           text-white 
           `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block text-white" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/industries" className="py-7 px-3 inline-block text-white" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              Industries
            </Link>
          </li>
          <NavLinks />

          <li>
            <Link to="/contact" className="py-7 px-3 inline-block text-white" style={{ fontFamily: "Times New Roman", textTransform: "uppercase" }}>
              Contact
            </Link>
          </li>



        </ul>
      </div>
    </nav>
  );
};

export default Header;
