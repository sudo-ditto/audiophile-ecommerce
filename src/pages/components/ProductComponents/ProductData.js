import React from 'react';
import Button from '../UI/Button';

const ProductData = ({ children, newProduct, type, btn }) => {

    const classList = `product-data__wp ${type === "hero" ? "product-data__wp--hero" : type === "home" ? "product-description__wp--home" : "product-description__wp--product"}`

    const btnClassList = `product-btn--${btn}`;
    return (
        <div className={classList}>
            {/* Check if product is new */}
            {
                newProduct ? (
                    <p className="overline">New product</p>
                ) : ""
            }
            {/* Heading and para*/}
            {children ? children : ""}
            <Button urlLink="/" className={btnClassList}>See product</Button>
        </div>
    )
}

export default ProductData;
