import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full sticky top-0 py-2 z-10 bg-slate-200">
        <div className="w-11/12 mx-auto flex justify-between items-center py-2">
          <div className="text-xl font-semibold">
            <Link to="/home">Vishal Pandey</Link>
          </div>
          <div className="space-x-20">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${
                  isActive ? "border-black border-b-2" : "text-black"
                } py-2 hover:border-black hover:border-b-2 hover:ease-in-out hover:duration-200`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "border-black border-b-2" : "text-black"
                } py-2 hover:border-black hover:border-b-2 hover:ease-in-out hover:duration-200`
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `${
                  isActive ? "border-black border-b-2" : "text-black"
                } py-2 hover:border-black hover:border-b-2 hover:ease-in-out hover:duration-200`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive ? "border-black border-b-2" : "text-black"
                } py-2 hover:border-black hover:border-b-2 hover:ease-in-out hover:duration-200`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "border-black border-b-2" : "text-black"
                } py-2 hover:border-black hover:border-b-2 hover:ease-in-out hover:duration-200`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
