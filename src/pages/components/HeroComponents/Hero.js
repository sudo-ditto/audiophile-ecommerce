import React from 'react';
import ProductData from '../ProductComponents/ProductData';
import Button from '../UI/Button';

const Hero = () => {
    return (
        <section id="hero">
            <div className="data">
                <ProductData newProduct btn="orange" type="hero">
                    <h1 id="hero-title">XX99 Mark II HeadphoneS</h1>
                    <p className="product-description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                </ProductData>
                <Button urlLink="/products/headphones/xx99-mark-two-headphones" className="btn product-btn--orange">See product</Button>
            </div>
        </section>
    )
}

export default Hero;
