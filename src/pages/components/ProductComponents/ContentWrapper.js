import React from 'react';

const ContentWrapper = ({ title, children }) => {
    return (
        <div className="content__container">
            <h3 className="content-title">{title}</h3>
            {children}
        </div>
    )
}

export default ContentWrapper;
