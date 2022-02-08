import Logo from './UI/Logo';
import MainNavigation from './UI/Navigation/MainNavigation';
import styles from '../assets/styles/scss/main.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const FacebookSquare = faFacebookSquare as IconProp,
    Twitter = faTwitter as IconProp,
    Instagram = faInstagram as IconProp;

const Footer = () => {
    return (
        <footer className={`${styles.Footer} ${styles.PageLayout}`}>
            <div className={`${styles.FooterUpper}`}>
                <Logo />
                <MainNavigation />
            </div>
            <div className={`${styles.FooterDescription}`}>
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music
                    lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come
                    and visit our demo facility - we&apos;re open 7 days a week.
                </p>
            </div>
            <div className={`${styles.FooterEnd}`}>
                <div className={`${styles.Copyright}`}>Copyright 2021. All Rights Reserved</div>
                <div className={`${styles.SocialMedia__container}`}>
                    <nav className={`${styles.SocialMedia__nav}`}>
                        <ul>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size="xs" icon={FacebookSquare}></FontAwesomeIcon>{' '}
                                </a>{' '}
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={Twitter}></FontAwesomeIcon>{' '}
                                </a>{' '}
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={Instagram}></FontAwesomeIcon>{' '}
                                </a>{' '}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
