import React from 'react';
import { NavLink } from 'react-router-dom';

const NavListItem = ({ children, urlLink, exact }) => {
    return (
        <li>
            <NavLink to={urlLink} exact={exact}>{children} </NavLink>
        </li>
    )
}

export default NavListItem;
