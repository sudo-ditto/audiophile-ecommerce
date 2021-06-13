import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ children, image, imgAlt, category }) => {
    return (
        <div className="category__wrapper">
            <img src={image} alt={imgAlt} className="category-image" />
            <h3 className="category-title">{children}</h3>
            <Link>Shop <span className="category-arrow">&gt;</span></Link>
        </div>
    )
}

export default ProductCategory;
