import React from 'react';

const ProductData = ({ children, newProduct, type, btn, urlLink }) => {

    const classList = `product-data__wp ${type === "hero" ? "product-data__wp--hero" : type === "home" ? "product-data__wp--home" : "product-data__wp--product"}`

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
            {/* <Button urlLink="/products" className={btnClassList}>See product</Button> */}
        </div>
    )
}

export default ProductData;
