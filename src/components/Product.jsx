import React from 'react';
import './Product.css';


const Product = ({name, description, price}) => {
    return (
        <div className='product'>
            <h3>Caractéristiques du produit</h3>
            <p className='name'>{name}</p>
            <p className='description'>{description}</p>
            <p className='price'>{price}€</p>
        </div>
    );
}

export default Product;