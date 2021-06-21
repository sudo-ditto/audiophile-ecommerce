import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, className,  urlLink, clicked }) => {
    const classList = `btn ${className ? className : ""}`;

    
    return (
        <Link className={classList} to={urlLink} onClick={clicked}>
            {children}
        </Link>
    )
}

export default Button;
