import React from 'react';

const CartProduct = ({product}) => {
    return (
        <div className="cart-product__container">
            <img src={product.image} alt="" />
            <div className="product-details">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">$ {product.price}</p>
            </div>
        </div>
    )
}

export default CartProduct;
