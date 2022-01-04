import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img
          src="https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag"
          alt=""
        />
      </div>

      <div className="navbar_links">
        <NavLink to="book">BOOK MY SHOW</NavLink>
        <p>Made by Rachel Gupta</p>
        <p>NCR</p>
        <button id="login_btn">
          <NavLink to="login">Login</NavLink>
        </button>
      </div>
      <div className="navbar_search">
        <input
          className="navbar_searchfield"
          type="text"
          placeholder="Search"
        />
        <img
          className="navbar_searchicon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaMTdieeKpgm6y8JHWGbwYLT8pTUvluCspvOFSWEo5Hmdako9h70OmnDec-xFlufDLSw&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
