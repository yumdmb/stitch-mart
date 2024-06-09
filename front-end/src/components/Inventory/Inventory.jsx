import React from 'react';
import './Inventory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Inventory() {

    let navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
        console.log("Navigate to Home");
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
                                    <th>Item Name</th>
                                    <th>Specifications</th>
                                    <th>Quantity</th>
                                    <th>Price/Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Embroidery Hoop</td>
                                    <td>6inch</td>
                                    <td>10</td>
                                    <td>$6.00</td>
                                </tr>
                                <tr>
                                    <td>Embroidery Hoop</td>
                                    <td>10inch</td>
                                    <td>9</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>White Fabric</td>
                                    <td>20x20inch</td>
                                    <td>10</td>
                                    <td>$6.00</td>
                                </tr>
                                <tr>
                                    <td>White Thread</td>
                                    <td>1m</td>
                                    <td>50</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td>Red Thread</td>
                                    <td>1m</td>
                                    <td>50</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td>Green Thread</td>
                                    <td>1m</td>
                                    <td>45</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td>Green Thread</td>
                                    <td>1m</td>
                                    <td>47</td>
                                    <td>$2.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="edit-inventory">
                        <div className="edit-inventory-header">
                            <h3>Edit Inventory</h3>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="edit_type">Edit Type:</label>
                                    <select id="edit_type" name="edit_type">
                                        <option value="Add">Add</option>
                                        <option value="Remove">Remove</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Item Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="specifications">Specifications:</label>
                                    <input type="text" id="specifications" name="specifications" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input type="number" id="quantity" name="quantity" min="1" required />
                                </div>
                                <button type="confirm">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='supplier-list'>
                    <div className='supplier-list-header'>
                        <h2>Supplier List</h2> 
                    </div>
                    <div className='inv-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Supplier Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Contact No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kayangan Supplies Sdn Bhd</td>
                                    <td>33, jalan 1, 02145 Pasir Salak, Johor</td>
                                    <td>kayangan@gmail.com</td>
                                    <td>0377708656</td>
                                </tr>
                                <tr>
                                    <td>Abu Embroidery Supplies</td>
                                    <td>No. 1, Jalan 14C, 56810 Setapak, Pulau Pinang</td>
                                    <td>abuembroi@gmail.com</td>
                                    <td>0129004422</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="add-supplier">
                        <div className="add-supplier-header">
                            <h4>Add Supplier</h4>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="supplierName">Supplier Name:</label>
                                    <input type="text" id="supplierName" name="supplierName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" id="address" name="address" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactno">Contact No:</label>
                                    <input type="tel" id="contactno" name="contactno" required />
                                </div>
                            </div>
                            
                            <button type="addsupplier">Add Supplier</button>
                        </form>
                    </div>

                </div>
                
            </div>
        </div>
    );

}

export default Inventory;