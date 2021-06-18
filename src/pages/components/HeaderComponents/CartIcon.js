import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartIcon;
