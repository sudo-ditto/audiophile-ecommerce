import React from 'react';
import Button from '../UI/Button';

const ProductDescription = ({ children, description, newProduct }) => {
    return (
        <div className="product-description__wp">
            {
                newProduct ? (
                    <p className="new-product">New product</p>
                ) : ""
            }
            {/* Heading */}
            {children}
            <p>{description}</p>
            <Button urlLink="/" className="product-btn">See product</Button>
        </div>
    )
}

export default ProductDescription;
