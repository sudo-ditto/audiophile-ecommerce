import React from 'react';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductComponents/ProductCard';
import Button from '../components/UI/Button';
import Categories from '../components/CategoryComponents/Categories';
import About from '../components/HomeComponents/AboutAudioPhile';

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
                                productDescription={product.description} imageAlt={product.name}>
                                <Button className="btn product-btn--orange" urlLink={`/products/${category}/${product.slug}`}>See product</Button>
                            </ProductCard>
                        )
                    }
                })}
            </div>
            <Categories />
            <About />
        </section>
    )
}

export default Products;
