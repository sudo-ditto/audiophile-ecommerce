import React, { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from '../../assets/styles/scss/main.module.scss';

const CartIcon = () => {
    // const dispatch = useDispatch();

    const toggleModalHandler = (e: MouseEvent) => {
        document.body.classList.add('scrollable');
        // dispatch(cartActions.toggleCart());
    };

    return (
        <div className={styles.CartIcon} onClick={toggleModalHandler}>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    );
};

export default CartIcon;
