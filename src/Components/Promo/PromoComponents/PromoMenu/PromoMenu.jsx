import React from 'react';

const PromoMenu = () => {
    return (
        <div className="promo__menu">
            <nav className="promo__menu-list">
                <ul>
                    <li><a className="promo__menu-item promo__menu-item_active" href="#">Фильмы</a></li>
                    <li><a className="promo__menu-item" href="#">Сериалы</a></li>
                    <li><a className="promo__menu-item" href="#">Мультфильмы</a></li>
                    <li><a className="promo__menu-item" href="#">Клипы</a></li>
                    <li><a className="promo__menu-item" href="#">Трейлеры</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default PromoMenu;