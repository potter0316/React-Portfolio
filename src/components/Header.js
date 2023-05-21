import React from "react";

import '../styles/style.css';

import Navigation from "./Navigation";

function Header() {
     return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/potter0316?tab=repositories"
          >
            <span>Michael Potter</span>
          </a>
        </div>
      </nav>
      <Navigation>
    
      </Navigation>
    </div>
  );
}

export default Header;
