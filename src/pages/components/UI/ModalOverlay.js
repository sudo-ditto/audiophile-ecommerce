import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../reducers/cartReducer';

const ModalOverlay = ({ children }) => {
    const modal = useRef();
    const dispatch = useDispatch();

    const toggleModalHandler = (e) => {
        if(e.target !== e.currentTarget) {
            return;
        }
        dispatch(cartActions.toggleCart());
    }

    return (
        <div ref={modal} onClick={toggleModalHandler} className="modal-overlay page-wrapper">
            {children}
        </div>
    )
}

export default ModalOverlay;
