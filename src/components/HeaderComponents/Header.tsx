import CartIcon from './CartIcon';
import Hamburger from './Hamburger';
import Logo from '../UI/Logo';

import { MouseEventHandler } from 'react';

import styles from '../../assets/styles/scss/main.module.scss';
import React from 'react';

interface Props {
    clicked: MouseEventHandler<HTMLDivElement>;
}

const Header = ({ clicked }: Props) => {
    return (
        <header className={`${styles.Header} ${styles.PageLayout}`}>
            <div className={styles.HeaderLogo}>
                <Hamburger clicked={clicked} />
                <Logo />
            </div>
            <CartIcon />
        </header>
    );
};

export default Header;
