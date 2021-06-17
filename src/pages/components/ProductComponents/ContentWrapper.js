import React from 'react';

const ContentWrapper = ({ title, children, className }) => {
    const classList = className ? `content__container ${className}` : "content__container";
    return (
        <div className={classList}>
            <h3 className="content-title">{title}</h3>
            {children}
        </div>
    )
}

export default ContentWrapper;
