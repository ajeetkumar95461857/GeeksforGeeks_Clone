/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoMoonOutline, IoSearchOutline } from "react-icons/io5";
import { SiGoogletranslate } from "react-icons/si";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="Courses tabs">
          <a href="">Courses</a>
        </div>
        <div className="Tutorials tabs">
          <a href="">Tutorials</a>
        </div>
        <div className="Jobs tabs">
          <a href="">Jobs</a>
        </div>
        <div className="Practice tabs">
          <a href="">Practice</a>
        </div>
        <div className="Contests tabs">
          <a href="">Contests</a>
        </div>
      </div>
      <div className="middle">
        <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" />
      </div>
      <div className="right">
        <div className="right-left">
          <div className="searchIcon">
            <IoSearchOutline />
          </div>
          <div className="moonIcon">
            <IoMoonOutline />
          </div>
          <div className="googleTranslate">
            <SiGoogletranslate />
          </div>
        </div>
        <div className="right-right">A</div>
      </div>
    </div>
  );
};

export default Navbar;
