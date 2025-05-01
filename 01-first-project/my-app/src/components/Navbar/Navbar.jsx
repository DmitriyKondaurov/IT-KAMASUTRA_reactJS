import React from "react";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.app_nav}>
            <div className={`${style.item} ${style.active}`}>
                <a href="/01-first-project/my-app/public">Profile</a>
            </div>
            <div className={style.item}>
                <a href="/01-first-project/my-app/public">Messages</a>
            </div>
            <div className={style.item}>
                <a href="/01-first-project/my-app/public">Feed</a>
            </div>
            <div className={style.item}>
                <a href="/01-first-project/my-app/public">Music</a>
            </div>
            <div className={style.item}>
                <a href="/01-first-project/my-app/public">Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;