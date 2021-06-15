import React from 'react';
import ProductData from '../ProductComponents/ProductData';

const Hero = () => {
    return (
        <section id="hero">
            <ProductData newProduct btn="orange" type="hero">
                <h1 id="hero-title">XX99 Mark II HeadphoneS</h1>
                <p className="product-description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </ProductData>
        </section>
    )
}

export default Hero;
