import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Hamburger = () => {
    return (
        <div className="hamburger-icon">
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default Hamburger;
