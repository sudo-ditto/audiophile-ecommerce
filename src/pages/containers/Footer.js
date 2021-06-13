import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../components/UI/Logo';
import MainNavigation from '../components/UI/Navigation/MainNavigation';
import NavSceleton from '../components/UI/Navigation/NavSceleton';

const Footer = () => {
    return (
        <footer className="page-wrapper">
            <div className="footer-upper">
                <Logo />
                <MainNavigation />
            </div>
            <div className="footer-description">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className="footer-end">
                <div className="copyright">Copyright 2021. All Rights Reserved</div>
                <div className="social">
                    <NavSceleton className="footer-social">
                        <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon> </a> </li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> </a> </li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a> </li>
                    </NavSceleton>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
