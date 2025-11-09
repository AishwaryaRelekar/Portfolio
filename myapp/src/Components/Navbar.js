import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.Navbar}`}>
          <div className={`${style.brand}`}>AR</div>

          <div className="right">
            <Link className={`${style.navitem}`}>Home</Link>
            <a href="#skill" className={`${style.navitem}`}>
              Skills
            </a>

            <a href="#project" className={`${style.navitem}`}>
              Project
            </a>
            <a href="#education" className={`${style.navitem}`}>
              Education
            </a>
            <a href="#contact" className={`${style.navitem}`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
