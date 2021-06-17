import React, { useEffect } from 'react';
import ProductCard from '../components/ProductComponents/ProductCard';
import data from '../../assets/data/data';
import { useParams } from 'react-router';
import AboutAudioPhile from '../components/HomeComponents/AboutAudioPhile';
import Categories from '../components/CategoryComponents/Categories';
import ProductQuantity from '../components/ProductComponents/ProductQuantity';
import GoBack from '../components/UI/GoBack';
import ContentWrapper from '../components/ProductComponents/ContentWrapper';
import Gallery from '../components/ProductComponents/Gallery';
import Button from '../components/UI/Button';

const Product = () => {
    const { product } = useParams();
    const { category } = useParams();
    let selectedQty = 1;
    const productData = data.find(prod => {
        return prod.slug === product;
    });

    useEffect(() => {
        selectedQty = document.body.querySelector('.qty-value');
    }, [selectedQty.textContent]);

    return (
        <section id="product" className="page-wrapper">
            <GoBack category={category} />

            <div className="metadata">
                <ProductCard image={productData.image.mobile} productDescription={productData.description} productTitle={productData.name}>
                    <p className="product-price">$ {productData.price}</p>
                    <ProductQuantity />
                </ProductCard>
            </div>

            <ContentWrapper title="Features">
                <p>{productData.features}</p>
            </ContentWrapper>

            <ContentWrapper title="In the box" className="features">
                <div className="items__wrapper">
                    {productData.includes.map((feature, key) => {
                        return (
                            <div className="item" key={key}>
                                <span className="included-qty">{feature.quantity}x</span><p key={key}>{feature.item}</p>
                            </div>
                        )
                    })}
                </div>
            </ContentWrapper>

            <Gallery productData={productData} />

            <ContentWrapper title="You may also like">
                {productData.others.map((item, key) => {
                    return (
                        <div key={key} className="product-card">
                            <img src={item.image.mobile} alt="" />
                            <div className="product-data">
                                <h3>{item.name}</h3>
                                <Button urlLink={`/products/${category}/${item.slug}`} className="product-btn--orange">See product</Button>
                            </div>
                        </div>

                    )
                })}
            </ContentWrapper>
            <Categories />
            <AboutAudioPhile />
        </section>
    )
}

export default Product;
