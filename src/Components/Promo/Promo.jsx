import React from 'react';
import PromoMenu from './PromoComponents/PromoMenu/PromoMenu';
import PromoContent from './PromoComponents/PromoContent/PromoContent';
import PromoAdvert from './PromoComponents/PromoAdvert/PromoAdvert'

const Promo = () => {
    return (
        <main>
            <PromoMenu/>
            <PromoContent/>
            <PromoAdvert/>
        </main>
    );
};

export default Promo;