import React from 'react';
import Categories from '../components/CategoryComponents/Categories';
import Hero from '../components/HeroComponents/Hero';
import AboutAudioPhile from '../components/HomeComponents/AboutAudioPhile';

const Home = () => {
    return (
        <section id="home">
            <Hero></Hero>
            <Categories />
            <AboutAudioPhile />
        </section>
    )
}

export default Home;
