import React from 'react';

const ModalOverlay = ({ children }) => {
    return (
        <div className="modal-overlay page-wrapper">
            {children}
        </div>
    )
}

export default ModalOverlay;
