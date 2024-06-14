import react from 'react';
import Product from './Product';
import React, { useState } from 'react';

const ProductList = () => {

    const [products, setProducts] = useState([
        {name: 'TEST', description: 'test', price: 12},
    ]);

    return (
        <>
            {products.map((product, idx) => (
                <Product 
                    key={idx}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </>
    );
}

export default ProductList;