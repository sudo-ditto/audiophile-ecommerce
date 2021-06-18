import React from 'react';

const CartPrice = ({ price, priceType, emphasize }) => {
    const classList = emphasize ? "price-amount price-amount--orange" : "price-amount";

    return (
        <div>
            <p className="price-type">{priceType}</p>
            <p className={classList}>$ {price}</p>
        </div>
    )
}

export default CartPrice;
