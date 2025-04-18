import React from "react";
import './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className="app-nav">
            <div className="item">
                <a href="/">Profile</a>
            </div>
            <div className="item">
                <a href="/">Messages</a>
            </div>
            <div className="item">
                <a href="/">Feed</a>
            </div>
            <div className="item">
                <a href="/">Music</a>
            </div>
            <div className="item">
                <a href="/">Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;