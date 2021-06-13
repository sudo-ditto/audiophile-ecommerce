import React from 'react';
import Logo from '../components/UI/Logo';
import MainNavigation from '../components/UI/Navigation/MainNavigation';

const Footer = () => {
    return (
        <footer className="page-wrapper">
            <div className="footer-nav">
                <Logo />
                <MainNavigation />
            </div>
            <div className="footer-description">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className="footer-end">
                <div className="copyright"></div>
                <div className="social"></div>
            </div>
        </footer>
    )
}

export default Footer;
