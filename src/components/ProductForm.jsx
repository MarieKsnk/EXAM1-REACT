import {useState} from 'react'; 
import './ProductForm.css';

function ProductForm({addProduct}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {name,description,price,};
        addProduct(newProduct);
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleAddProduct} className='form-style'>
            <h2>Créer un nouveau produit</h2>
            <div className='form-input'>
                <label>Nom</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-input'>
                <label>Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='form-input'>
                <label>Prix</label>
                <input value={price} type="number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='button-container'>
                <button type="submit">Ajouter</button>
            </div>
        </form>
    );
}

export default ProductForm;
