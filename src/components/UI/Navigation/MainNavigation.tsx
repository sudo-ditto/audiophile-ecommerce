import NavListItem from './NavListItem';

const MainNavigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <NavListItem urlLink="/">
                    <a>Home</a>
                </NavListItem>
                {/* <NavListItem urlLink="/products/headphones">
                    <a>Headphones</a>
                </NavListItem>
                <NavListItem urlLink="/products/speakers">
                    <a>Speakers</a>{' '}
                </NavListItem>
                <NavListItem urlLink="/products/earphones">
                    <a>Earphones</a>{' '}
                </NavListItem> */}
            </ul>
        </nav>
    );
};

export default MainNavigation;
