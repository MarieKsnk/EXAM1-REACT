import {useState, useEffect} from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

const ProductList = () => {

    const [products, setProducts] = useState([
        {name: 'NOM', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 12},
    ]);


    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
      }, []);
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
      }, [products]);

    
    const handleAddProduct = (newProduct) => {
        setProducts((prevState) => [...prevState, newProduct]);
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