import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <header>
      <h1 id="nav-title">GitHub</h1>
      <nav>
        <ul>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/comparison" className="link">
            My Comparison
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
