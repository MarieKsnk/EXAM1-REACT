import {useState} from 'react'; 

function ProductForm({addProduct}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            description,
            price,
        };
        addProduct(newProduct);
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleAddProduct}>
            <h1>Creer un nouveau produit</h1>
            <div>
                <label>Nom</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <label>Prix</label>
                <input value={price} type="number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default ProductForm;
