import React from "react";

function Navigation() {
    return (
        <div className="tabs is-centered">
            <ul>
                <li className="is-active">
                    <a>About Me</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
                <li>
                    <a>Portfolio</a>
                </li>
                <li>
                    <a>Resume</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;