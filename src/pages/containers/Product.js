import React, { useEffect } from 'react';
import ProductCard from '../components/ProductComponents/ProductCard';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import AboutAudioPhile from '../components/HomeComponents/AboutAudioPhile';
import Categories from '../components/CategoryComponents/Categories';
import Button from '../components/UI/Button';
import ProductQuantity from '../components/ProductComponents/ProductQuantity';

const Product = () => {
    const { product } = useParams();

    const productData = data.find(prod => {
        return prod.slug === product;
    }
    );

    return (
        <section id="product">
            <div className="metadata">
                <ProductCard image={productData.image} productDescription={productData.description} productTitle={productData.name}></ProductCard>
                <p>$ {productData.price}</p>
                <ProductQuantity />
                <button className="btn product-btn--orange">Add to cart</button>
            </div>
            <div className="features" style={{ "white-space": "pre-wrap" }}>
                <h3>Features</h3>
                <p>
                    {productData.features}
                </p>
            </div>
            <div className="included">
                <h3>In the box</h3>
                {productData.includes.map((feature, key) => {
                    return (
                        <p><span>{feature.quantity}X</span> {feature.item}</p>

                    )
                })}
            </div>
            <Categories />
            <AboutAudioPhile />
        </section>
    )
}

export default Product;
