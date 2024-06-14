import React from 'react';


const Product = ({name, description, price}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
}

export default Product;