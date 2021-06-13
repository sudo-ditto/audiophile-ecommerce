import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, className,  urlLink }) => {
    const classList = `btn ${className ? className : ""}`
    return (
        <Link className={classList} to={urlLink}>
            {children}
        </Link>
    )
}

export default Button;
