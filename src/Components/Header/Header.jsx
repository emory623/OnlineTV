import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header_logo">
                <img src="#" alt="logo" />
            </div>
            <div className="header_search">
                <form action="#">
                    <input type="text" placeholder='Поиск' />
                </form>
            </div>
        </header>
    );
};

export default Header;