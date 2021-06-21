import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../reducers/cartReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
    const dispatch = useDispatch();

    const toggleModalHandler = (e) => {
        document.body.classList.add('scrollable');
        dispatch(cartActions.toggleCart());
    }

    return (
        <div className="cart-icon" onClick={toggleModalHandler}>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartIcon;
