import React from 'react';
import CartIcon from '../components/HeaderComponents/CartIcon';
import Hamburger from '../components/HeaderComponents/Hamburger';
import Logo from '../components/UI/Logo';

const Header = ({ clicked }) => {
    return (
        <header className="page-wrapper">
            <div className="menu-logo">
                <Hamburger clicked={clicked} />
                <Logo />
            </div>
            <div className="cart">
                <CartIcon />
            </div>
        </header>
    )
}

export default Header;
