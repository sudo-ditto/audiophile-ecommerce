import React from 'react';
import ProductCategory from './ProductCategory';
import headphones from '../../../assets/images/category-headphones/headphones.png';
import speakers from '../../../assets/images/category-speakers/speakers.png';
import earphones from '../../../assets/images/category-earphones/earphones.png';

const Categories = () => {
    return (
        <section id="categories" className="page-wrapper">
            <ProductCategory image={headphones} category="headphones" url="/products/headphones">Headphones</ProductCategory>
            <ProductCategory image={speakers} category="speakers" url="/products/headphones">Speakers</ProductCategory>
            <ProductCategory image={earphones} category="earphones" url="/products/headphones">Earphones</ProductCategory>
        </section>
    )
}

export default Categories;
