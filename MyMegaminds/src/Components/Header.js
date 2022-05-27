import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className=" header__logo" src="logo.png" alt="Megaminds logo" />
        </Link>
      </div>
      <div className="header__right">
        <Link className="header__link" to="/about">
          <div className="header__contents">About</div>
        </Link>
        <Link className="header__link" to="/blog">
          <div className="header__contents">Blog</div>
        </Link>
        <Link className="header__link" to="/careers">
          <div className="header__contents">Careers</div>
        </Link>
        <Link className="header__link" to="/faq">
          <div className="header__contents">FAQ</div>
        </Link>
        <button className="header__signup" onClick={(e) => navigate("/signup")}>
          Signup
        </button>
        <button className="header__signin" onClick={(e) => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
