import React, { useState, useEffect } from 'react';
import './Inventory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Inventory() {

    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [editType, setEditType] = useState('Add');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(1);

    const goToHome = () => {
        navigate('/');
        console.log("Navigate to Home");
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const res = await fetch(`/api/inventory`);
        const json = await res.json();
        setProducts(json);
        console.log('Inventory fetched', json);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const productToUpdate = products.find(prod => prod.item === productName);

        if (!productToUpdate) {
            alert("Product not found");
            return;
        }

        const updatedQuantity = editType === 'Add' ? productToUpdate.quantity + quantity : productToUpdate.quantity - quantity;

        if (updatedQuantity < 0) {
            alert("Quantity cannot be negative");
            return;
        }

        try {
            const res = await fetch(`/api/inventory/${productToUpdate._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity: updatedQuantity })
            });

            if (res.ok) {
                fetchProduct();  // Refresh the product list
                alert("Product updated successfully");
            } else {
                alert("Failed to update product");
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    return (
        <div>
            <div className='inv-container'>
                <div className='inv-header'>
                    <h1>Inventory</h1>
                    <button className="home-button" onClick={goToHome}>Home</button>
                </div>

                <div className='inv-list'>
                    <div className='inv-list-header'>
                        <h2>Inventory List</h2> 
                    </div>
                    <div className='inv-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((prod) => (
                                    <tr key={prod._id}>
                                        <td>{prod.item}</td>
                                        <td>{prod.quantity}</td>
                                        <td>${prod.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="edit-inventory">
                        <div className="edit-inventory-header">
                            <h3>Edit Inventory</h3>
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="edit_type">Edit Type:</label>
                                    <select id="edit_type" name="edit_type" value={editType} onChange={(e) => setEditType(e.target.value)}>
                                        <option value="Add">Add</option>
                                        <option value="Remove">Remove</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Product Name:</label>
                                    <input type="text" id="name" name="name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
                                </div>
                                <div className='button-sub'>
                                    <button type="submit">Confirm</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Inventory;
