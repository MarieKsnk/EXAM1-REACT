import {useState} from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

const ProductList = () => {

    const [products, setProducts] = useState([
        {name: 'NOM', description: 'Description du test', price: 12},
    ]);
    
    const handleAddProduct = (newProduct) => {
        setProducts(prevState => [...prevState, newProduct]);
    };

    return (
        <>
            <ProductForm addProduct={handleAddProduct} />
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