import React from 'react';
import { Link } from 'react-router-dom';

const GoBack = ({ category }) => {
    const linkUrl = `/products/${category}`;

    return (
        <div className="go-back">
            <Link to={linkUrl}>Go Back</Link>
        </div>
    )
}

export default GoBack;
