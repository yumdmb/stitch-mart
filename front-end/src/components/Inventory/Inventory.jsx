import React, {useState, useEffect} from 'react';
import './Inventory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Inventory() {

    let navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [editType, setEditType] = useState('Add');
    const [name, setName] = useState(null);
    const [quantity, setQuantity] = useState(0);

    const goToHome = () => {
        navigate('/');
        console.log("Navigate to Home");
      };

    useEffect(() => {
        fetchProduct();
    },[])

    const fetchProduct = async() =>{
        const res = await fetch(`/api/inventory`);
        const json = await res.json();
        setProduct(json);
        console.log('Inventory fetched');
        console.log(product);
    };

    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        // for (const key in formData) {
        //     if (key === 'size' || key === 'quantity') {
        //         data.append(key, Number(formData[key]));
        //     } else {
        //         data.append(key, formData[key]);
        //     }
        // }

        try {
            const response = await fetch('/api/inventory/edit', {
                method: 'PATCH',
                body: JSON.stringify({ name, quantity: parseInt(quantity) }),
            });
            console.log(name);
            console.log(quantity);
            const result = await response.json();
            console.log(result)
            if (response.ok) {
                alert('Inventory updated!');
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            alert('Error updating inventory.');
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
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                                    {product && product.map((prod) =>
                                        {
                                           return <tbody key = {prod._id}>
                                                 <tr>
                                                    <td>{prod._id}</td>
                                                    <td>{prod.item}</td>
                                                    <td>{prod.quantity}</td>
                                                    <td>RM {prod.price}</td>
                                                </tr>
                                            </tbody>
                                        }
                                    )}
                                    
                                
                        </table>
                    </div>
                </div>

                
            </div>
        </div>
    );

}

export default Inventory;