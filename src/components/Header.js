import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" rel="noreferrer" target="_blank" href="https://github.com/potter0316?tab=repositories">
                        <span className="content is-large">Michael Potter</span>
                    </a>
                </div>
            </nav>
            <Navigation></Navigation>
        </div>
    );
}

export default Header;