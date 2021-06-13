import React from 'react';
import NavListItem from './NavListItem';
import NavSceleton from './NavSceleton';

const MainNavigation = () => {
    return (
       <NavSceleton className="main-nav">
           <NavListItem urlLink="/">Home</NavListItem>
           <NavListItem urlLink="/products/headphones">Headphones</NavListItem>
           <NavListItem urlLink="/products/speakers">Speakers</NavListItem>
           <NavListItem urlLink="/products/earphones">Earphones</NavListItem>
       </NavSceleton>
    )
}

export default MainNavigation;
