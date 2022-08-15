import React from 'react';

const PromoContent = () => {
    return (
        <div className="promo__content">
            <div className="promo__bg">
                <div className="promo__genre">ЖАНР</div>
                <div className="promo__title">ФИЛЬМ</div>
                <div className="promo__descr">ОПИСАНИЕ</div>
                <div className="promo__ratings">
                    <span>IMDb: 8.0</span>
                    <span>Кинопоиск: 7.7</span>
                </div>
            </div>
            <div className="promo__interactive">
                <div>
                    <div className="promo__interactive-title">НЕДАВНО ПРОСМОТРЕННЫЕ ФИЛЬМЫ</div>
                    <ul className="promo__interactive-list">
                        <li className="promo__interactive-item">Твин Пикс
                            <div className="delete"></div>
                        </li>
                        <li className="promo__interactive-item">Ной
                            <div className="delete"></div>
                        </li>
                        <li className="promo__interactive-item">Выживут только любовники
                            <div className="delete"></div>
                        </li>
                        <li className="promo__interactive-item">Брат
                            <div className="delete"></div>
                        </li>
                        <li className="promo__interactive-item">Фарго
                            <div className="delete"></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="promo__interactive-title">ПОСЛЕДНИЙ ПРОСМОТР</div>
                    <img src="#" alt="fargment_img" />
                    <button>Продолжить</button>
                </div>
            </div>
        </div>
    );
};

export default PromoContent;