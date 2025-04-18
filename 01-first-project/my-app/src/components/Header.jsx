import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.logo}>
                <img src='https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-spa-logo-png-image_4721219.png'  alt='logo' width='50'/>
            </h1>
        </header>
    )
}
export default Header;
