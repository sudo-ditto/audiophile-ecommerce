import React from 'react'

const Gallery = ({productData}) => {
    return (
        <div className="gallery">
        {Object.keys(productData.gallery).map((image, key) => {
            return (
                <img key={key} src={
                    productData.gallery[image].mobile
                } alt="" />
            )
        })}
    </div>
    )
}

export default Gallery
