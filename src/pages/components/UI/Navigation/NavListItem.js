import React from 'react';
import { NavLink } from 'react-router-dom';

const NavListItem = ({ children, urlLink }) => {
    return (
        <li>
            <NavLink to={urlLink}>{children}</NavLink>
        </li>
    )
}

export default NavListItem;
