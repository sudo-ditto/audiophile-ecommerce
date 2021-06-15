import React, { useEffect } from 'react';
import ProductCard from '../components/ProductComponents/ProductCard';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import AboutAudioPhile from '../components/HomeComponents/AboutAudioPhile';
import Categories from '../components/CategoryComponents/Categories';
import Button from '../components/UI/Button';
import ProductQuantity from '../components/ProductComponents/ProductQuantity';

const Product = () => {
    const { product } = useParams();
    const { category } = useParams();

    const productData = data.find(prod => {
        return prod.slug === product;
    }
    );
    return (
        <section id="product">
            <div className="metadata">
                <ProductCard image={productData.image} productDescription={productData.description} productTitle={productData.name}></ProductCard>
                <p>$ {productData.price}</p>
                <ProductQuantity />
                <button className="btn product-btn--orange">Add to cart</button>
            </div>
            <div className="features" style={{ "whiteSpace": "pre-wrap" }}>
                <h3>Features</h3>
                <p>
                    {productData.features}
                </p>
            </div>
            <div className="included">
                <h3>In the box</h3>
                {productData.includes.map((feature, key) => {
                    return (
                        <p key={key}><span>{feature.quantity}X</span> {feature.item}</p>

                    )
                })}
            </div>
            <div className="gallery">
                {Object.keys(productData.gallery).map((image, key) => {
                    return (
                        <img key={key} src={
                            productData.gallery[image].mobile
                        } alt="" />
                    )
                })}
            </div>
            <div className="suggested-products">
                <h3>You may also like</h3>
                {productData.others.map((item, key) => {
                        return (
                            <div  key={key}className="product-card">
                                <img src={item.image.mobile} alt="" />
                                <div className="product-data">
                                <h3>{item.name}</h3>
                                <Button  urlLink="/" className="product-btn--orange">See product</Button>
                                </div>
                            </div>
                            
                            )
                })}
            </div>
            <Categories />
            <AboutAudioPhile />
        </section>
    )
}

export default Product;
