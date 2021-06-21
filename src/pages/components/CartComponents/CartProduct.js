import React from 'react';

const CartProduct = ({ product }) => {
    return (
        <div className="cart-product__container">
            <img src={product.image} alt="" className="cart-item-image" />
            <div className="product-details">
                <h4 className="product-name">{product.model}</h4>
                <p className="product-price">$ {product.price}</p>
            </div>
            <div className="product-quantity">
                <span>-</span>
                <div className="qty-value">{product.quantity}</div>
                <span>+</span>
            </div>
        </div>
    )
}

export default CartProduct;
