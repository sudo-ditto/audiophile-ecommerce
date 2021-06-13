import React from 'react';
import NavListItem from './NavListItem';
import NavSceleton from './NavSceleton';

const MainNavigation = () => {
    return (
       <NavSceleton className="main-nav">
           <NavListItem urlLink="/" exact={true}>Home</NavListItem>
           <NavListItem urlLink="/products/headphones" exact={false}>Headphones</NavListItem>
           <NavListItem urlLink="/products/speakers" exact={false}>Speakers</NavListItem>
           <NavListItem urlLink="/products/earphones" exact={false}>Earphones</NavListItem>
       </NavSceleton>
    )
}

export default MainNavigation;
