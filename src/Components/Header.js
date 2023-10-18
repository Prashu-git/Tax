import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-900 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <h1 className="text-white text-2xl font-semibold md:px-16 ml-4 md:ml-0">TaxMarg</h1>
        </div>

       {/* Mobile Menu Toggle Button (Hidden on Desktop) */}
<button
  className="md:hidden text-white text-2xl absolute right-2 top-2 "
  onClick={toggleMobileMenu}
>
  ☰
</button>


        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-4 px-10">
          <a className="text-white hover:text-black" href="/">Home</a>
          <a className="text-white hover:text-black" href="/about">About</a>
          <a className="text-white hover:text-black" href="/services">Services</a>
          <a className="text-white hover:text-black" href="/portfolio">Businesses</a>
          <a className="text-white hover:text-black" href="/blog">Registrations</a>
          <a className="text-white hover:text-black" href="/contact">Reports</a>
          <a className="text-white hover:text-black" href="/login">Industries</a>
          <a className="text-white hover:text-black" href="/signup">Contact</a>
        </nav>

        {/* Mobile Menu (Hidden on Desktop) */}
        <div
          className={`md:hidden bg-blue-900 pt-4 px-2 ${
            isMobileMenuOpen ? 'right-0' : '-right-full'
          } absolute top-0 h-full w-2/3 transition-transform duration-300`}
        >
          <button
            className="text-white text-2xl"
            onClick={toggleMobileMenu}
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-4 mt-12">
            <a className="text-white hover:text-black" href="/">Home</a>
            <a className="text-white hover:text-black" href="/about">About</a>
            <a className="text-white hover:text-black" href="/services">Services</a>
            <a className="text-white hover:text-black" href="/portfolio">Businesses</a>
            <a className="text-white hover:text-black" href="/blog">Registrations</a>
            <a className="text-white hover:text-black" href="/contact">Reports</a>
            <a className="text-white hover:text-black" href="/login">Industries</a>
            <a className="text-white hover:text-black" href="/signup">Contact</a>
          </nav>
        </div>
        {/* Search Bar (Visible on Desktop, Hidden on Mobile) */}
        <div className="hidden md:block relative right-20">
          <input
            type="text"
            className="bg-white text-black w-20 p-2 pl-4 rounded-full focus:outline-none"
            placeholder="Search"
          />
          <i className="fas fa-search absolute top-3 left-3 text-white"></i>
        </div>

        {/* Mobile menu on mobile devices */}
        <div className="md:hidden">
          {isMobileMenuOpen && (
            <div className="bg-blue-900 pt-4 px-2">
              <button
                className="text-white text-2xl"
                onClick={toggleMobileMenu}
              >
                ✕
              </button>
              <nav className="flex flex-col space-y-4">
                <a className="text-white hover:text-black" href="/">Home</a>
                <a className="text-white hover:text-black" href="/about">About</a>
                <a className="text-white hover:text-black" href="/services">Services</a>
                <a className="text-white hover:text-black" href="/portfolio">Businesses</a>
                <a className="text-white hover:text-black" href="/blog">Registrations</a>
                <a className="text-white hover:text-black" href="/contact">Reports</a>
                <a className="text-white hover:text-black" href="/login">Industries</a>
                <a className="text-white hover:text-black" href="/signup">Contact</a>
              </nav>
            </div>
          )}
        </div>
        {/* User Icon (Visible on Desktop, Hidden on Mobile) */}
        <div className="md:flex space-x-4 items-center z-10">
          <div className="text-white">
            <i className="fas fa-user-circle text-2xl"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
