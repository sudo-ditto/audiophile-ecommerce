import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../reducers/cartReducer';

const ModalOverlay = ({ children }) => {
    const modal = useRef();
    const dispatch = useDispatch();
    const cartIsOpen = useSelector(state => state.cart.cartOpen);

    const toggleModalHandler = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }

        document.body.classList.remove('scrollable');
        dispatch(cartActions.toggleCart());
    }

    return (
        <div ref={modal} onClick={toggleModalHandler} className="modal-overlay page-wrapper">
            {children}
        </div>
    )
}

export default ModalOverlay;
