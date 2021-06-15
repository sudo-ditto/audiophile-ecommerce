import React, { useEffect } from 'react';
import ProductCard from '../components/ProductComponents/ProductCard';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import AboutAudioPhile from '../components/HomeComponents/AboutAudioPhile';
import Categories from '../components/CategoryComponents/Categories';
import Button from '../components/UI/Button';
import ProductQuantity from '../components/ProductComponents/ProductQuantity';
import GoBack from '../components/UI/GoBack';
import ContentWrapper from '../components/ProductComponents/ContentWrapper';
import Gallery from '../components/ProductComponents/Gallery';

const Product = () => {
    const { product } = useParams();
    const { category } = useParams();

    const productData = data.find(prod => {
        return prod.slug === product;
    }
    );
    return (
        <section id="product" className="page-wrapper">
            <GoBack category={category} />

            <div className="metadata">
                <ProductCard image={productData.image.mobile} productDescription={productData.description} productTitle={productData.name}></ProductCard>
                <p className="product-price">$ {productData.price}</p>
                <ProductQuantity />
            </div>

            <ContentWrapper title="Features">
                <p>{productData.features}</p>
            </ContentWrapper>

            <ContentWrapper title="In the box">
                {productData.includes.map((feature, key) => {
                    return (
                        <div className="item">
                            <span className="included-qty">{feature.quantity}x</span><p key={key}>{feature.item}</p>
                        </div>

                    )
                })}
            </ContentWrapper>

            <Gallery productData={productData} />

            <div className="suggested-products">
                <h3>You may also like</h3>
                {productData.others.map((item, key) => {
                    return (
                        <div key={key} className="product-card">
                            <img src={item.image.mobile} alt="" />
                            <div className="product-data">
                                <h3>{item.name}</h3>
                                <Button urlLink="/" className="product-btn--orange">See product</Button>
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
