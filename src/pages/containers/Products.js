import React from 'react';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductComponents/ProductCard';

const Products = () => {
    const { category } = useParams();

    return (
        <section id="products">
            <div className="products-title__container">
                <h1>{category}</h1>
            </div>
            <div className="products-wrapper page-wrapper">

                {data.map(product => {
                    if (product.category === category) {
                        return (
                            <ProductCard urlLink="/" key={product.id} image={product.image.mobile} productTitle={product.name}
                                productDescription={product.description} imageAlt={product.name}></ProductCard>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Products;
