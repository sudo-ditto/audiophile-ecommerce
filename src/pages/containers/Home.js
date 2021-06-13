import React from 'react';
import Categories from '../components/CategoryComponents/Categories';
import Hero from '../components/HeroComponents/Hero';

const Home = () => {
    return (
        <section id="home">
            <Hero></Hero>
            <Categories></Categories>
        </section>
    )
}

export default Home;
