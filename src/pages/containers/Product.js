import React, { useEffect } from 'react';
import ProductCard from '../components/ProductComponents/ProductCard';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import AboutAudioPhile from '../components/HomeComponents/AboutAudioPhile';
import Categories from '../components/CategoryComponents/Categories';

const Product = () => {
    const { product } = useParams();

    const productData = data.find(prod => {
        return prod.slug === product;
    }
    );

    return (
        <section id="product">
            <ProductCard image={productData.image} productDescription={productData.description}></ProductCard>

            <Categories />
            <AboutAudioPhile />
        </section>
    )
}

export default Product;
