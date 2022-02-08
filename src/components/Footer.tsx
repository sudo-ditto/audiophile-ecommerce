import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from './UI/Logo';
import MainNavigation from './UI/Navigation/MainNavigation';
// import NavSceleton from './UI/Navigation/NavSceleton';

import styles from '../assets/styles/scss/main.module.scss';

const Footer = () => {
    return (
        <footer className={`${styles.Footer} ${styles.PageLayout}`}>
            <div className={`${styles.FooterUpper}`}>
                <Logo />
                <MainNavigation />
            </div>
            <div className={`${styles.FooterDescription}`}>
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and
                    sound specialists who are devoted to helping you get the most out of personal audio. Come and visit
                    our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div className={`${styles.FooterEnd}`}>
                <div className={`${styles.Copyright}`}>Copyright 2021. All Rights Reserved</div>
                <div className="social">
                    {/* <NavSceleton className="footer-social">
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>{' '}
                            </a>{' '}
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>{' '}
                            </a>{' '}
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{' '}
                            </a>{' '}
                        </li>
                    </NavSceleton> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
