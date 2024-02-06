import React, { useState } from "react";
import close from '../assets/close.png';
import menu from '../assets/menu.png';
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src={
            menuOpen
              ? "close.png"
              :"menu.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
      </div>
    </nav>
  );
};