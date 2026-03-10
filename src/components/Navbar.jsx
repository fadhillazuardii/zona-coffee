import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";

// Tambahkan setIsCartOpen di dalam props
const Navbar = ({ cartCount = 0, setIsCartOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-zona-coffe.svg"
            alt="Zona Coffee Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Zona Coffee
          </h1>
        </div>

        {/* Desktop Menu Section */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7 items-center text-lg font-medium text-white/90">
            <a href="#">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Home
              </li>
            </a>
            <a href="#menu">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Menu
              </li>
            </a>
            <a href="#about">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                About
              </li>
            </a>
            <a href="#testimonial">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Testimonial
              </li>
            </a>
          </ul>
          <a href="#contact">
            <button className="bg-amber-800 text-white hover:bg-amber-700 px-5 py-2 rounded-full transition-all text-sm font-semibold">
              Contact
            </button>
          </a>
        </nav>

        {/* Action Buttons (Cart & Mobile Menu) */}
        <div className="flex items-center gap-4">
          {/* Shopping Cart Icon */}
          <div
            // Trigger Sidebar saat diklik
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer text-white hover:text-amber-400 transition-all p-2 bg-white/10 rounded-full group"
          >
            <ShoppingCart
              size={22}
              className="group-hover:scale-110 duration-300"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-amber-950 animate-bounce-short">
                {cartCount}
              </span>
            )}
          </div>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <div className="md:hidden flex items-center">
            {open ? (
              <X
                onClick={() => setOpen(false)}
                className="text-white w-7 h-7 cursor-pointer hover:text-amber-400 transition-colors"
              />
            ) : (
              <Menu
                onClick={() => setOpen(true)}
                className="text-white w-7 h-7 cursor-pointer hover:text-amber-400 transition-colors"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
