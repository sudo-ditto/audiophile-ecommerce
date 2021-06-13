import React from 'react';

const NavSceleton = ({ className, children }) => {
    return (
        <nav className={className ? className
            : ""}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavSceleton;
