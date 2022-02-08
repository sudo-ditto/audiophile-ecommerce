import NavListItem from './NavListItem';
import styles from '../../../assets/styles/scss/main.module.scss';

const MainNavigation = () => {
    return (
        <nav className={styles.MainNavigation}>
            <ul>
                <NavListItem urlLink="/">
                    <a>Home</a>
                </NavListItem>
                <NavListItem urlLink="/products/headphones">
                    <a>Headphones</a>
                </NavListItem>
                <NavListItem urlLink="/products/speakers">
                    <a>Speakers</a>
                </NavListItem>
                <NavListItem urlLink="/products/earphones">
                    <a>Earphones</a>
                </NavListItem>
            </ul>
        </nav>
    );
};

export default MainNavigation;
