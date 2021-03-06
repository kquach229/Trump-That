import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/home">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/19/15/cartoon-2026571__340.png"
            className="navbar__image"
            alt="trumpCartoon"
          />
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/home" className="navbar__link">
          Home
        </Link>
        <Link to="/trumpthinks" className="navbar__link">
          TrumpThinks
        </Link>
        <Link to="/trumpnews" className="navbar__link">
          TrumpNews
        </Link>
        <Link to="/donate" className="navbar__link">
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
