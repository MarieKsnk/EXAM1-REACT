import React from 'react';

const Product = ({name, description, price}) => {
    return (
        <>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </>
    );
}

export default Product;