import React from 'react';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductComponents/ProductCard';

const Product = () => {
    const { product: category } = useParams();
    console.log(category);

    return (
        <section id="products">
            <div className="products-title__container">
                <h1>{category}</h1>
            </div>
            <div className="products-wrapper page-wrapper">

                {data.map(product => {
                    if (product.category === category) {
                        return (
                            <ProductCard key={product.id} image={product.image.mobile} productTitle={product.name}
                                productDescription={product.description} imageAlt={product.name}></ProductCard>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Product;
