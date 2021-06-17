import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ children, image, imgAlt, category }) => {
    const url = `/products/${category}`
    return (
        <div className="category__wrapper">
            <div className="category-image__wrapper">
                <img src={image} alt={imgAlt} className="category-image" />
            </div>
            <h3 className="category-title">{children}</h3>
            <Link to={url}>Shop <span className="category-arrow">&gt;</span></Link>
        </div>
    )
}

export default ProductCategory;
