import Image from 'next/image';
import React, { MouseEvent } from 'react';
import CartImage from '../../assets/images/cart/empty-cart.png';

import styles from '../../assets/styles/scss/main.module.scss';

const CartIcon = () => {
    // const dispatch = useDispatch();

    const toggleModalHandler = (e: MouseEvent) => {
        document.body.classList.add('scrollable');
        // dispatch(cartActions.toggleCart());
    };

    return (
        <div className={styles.CartIcon} onClick={toggleModalHandler}>
            <Image src={CartImage} alt="Cart Icon" width={23} height={22} />
        </div>
    );
};

export default CartIcon;
