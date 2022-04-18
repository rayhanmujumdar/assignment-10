import React, { useState } from "react";
import { Link } from "react-router-dom";
import useNav from "../../../Hooks/useNav";
import logo from "../../../image/Logo/logo.png";
import NoImage from "../../../image/Logo/No_image.svg";
import NavLink from "../../../CoustomLink/CoustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const Header = ({ classAdd }) => {
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [nav] = useNav();
  if (nav) {
    classAdd = false;
  }
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div
      className={`${
        nav
          ? "sticky top-0 w-full z-20"
          : `${classAdd && "absolute"} z-20 w-full`
      }`}
    >
      {
        loading && <Loading></Loading>
      }
      <nav
        className={`w-full flex flex-wrap items-center justify-between py-3 border-b ${
          classAdd || "bg-gray-900"
        } border-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light  duration-700 ${
          nav && "bg-gray-800 duration-700 fixed top-0"
        }`}
        style={{ background: classAdd && nav && "rgba(0,0,0,0.4)" }}
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            onClick={() => setOpen(!open)}
            className="navbar-toggler text-gray-200 py-2 px-2.5 hover:text-gray-500"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {open ? (
              <i className="fa-solid fa-x text-2xl rotate-180 duration-500"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl scale-75 duration-150 hover:scale-100"></i>
            )}
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <Link to="/">
              <img src={logo} alt="" className="w-12" />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <NavLink to="/home" className="nav-link text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="/services" className="nav-link text-white">
                  Services
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="/blog" className="nav-link text-white">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="/about" className="nav-link text-white">
                  About Me
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          <div className="flex items-center relative">
            {/* Icon */}
            {user ? (
              <div className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4">
                <button onClick={handleSignOut} className="border px-3 py-1 hover:bg-gray-700">
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
              >
                <button className="border px-3 py-1 hover:bg-gray-700">
                  Login
                </button>
              </Link>
            )}
            <div className="dropdown relative">
              <Link
                to="/profile"
                className="dropdown-toggle flex items-center hidden-arrow"
              >
                <img
                  src={user?.photoURL || NoImage}
                  className="rounded-full"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
