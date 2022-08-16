import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            
            <div className={classes.header__search}>
                <form action="#">
                    <input type="text" placeholder='Поиск' />
                </form>
            </div>
            <div className={classes.header__logo}>
                <img src="../Icons/Logotype.svg" alt="logo" />
            </div>
        </header>
    );
};

export default Header;