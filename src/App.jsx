import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  return (
    <div className='App'>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
