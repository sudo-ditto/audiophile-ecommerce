import React from 'react';
import ProductData from '../ProductComponents/ProductData';
import Button from '../UI/Button';

const Hero = () => {
    return (
        <section id="hero">
            <ProductData newProduct btn="orange" type="hero">
                <h3>XX99 Mark II HeadphoneS</h3>
                <p className="product-description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </ProductData>
        </section>
    )
}

export default Hero;
