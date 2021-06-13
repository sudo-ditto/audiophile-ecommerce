import React from 'react';
import ProductData from './ProductData';

const ProductCard = ({image, imageAlt, productTitle, productDescription, isNew}) => {
    return (
        <div className="product-card">
            <div className="product-image__container">
                <img src={image} alt={imageAlt} />
            </div>
            <ProductData type="product" btn="orange" newProduct={isNew}>
                <h2 className="product-name">{productTitle}</h2>
                <p className="product-description">{productDescription}</p>
            </ProductData>
        </div>
    )
}

export default ProductCard;
