import React from 'react';
import { NavItem } from 'react-router-dom';

const NavListItem = ({ children, urlLink }) => {
    return (
        <li>
            <NavItem to={urlLink}>{children}</NavItem>
        </li>
    )
}

export default NavListItem;
