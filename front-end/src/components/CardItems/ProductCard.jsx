import './ProductCard.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function ProductCard({ product }) {

    const handleClick = async(id) => {
        const res = await fetch(`/api/cart/${id}`, {
            method: 'POST'
        });
        const json = await res.json();
        console.log(json);
    }

    return (
        <div className="container">
            <div className="product-card">
                <div className="product-info">
                    <h4>{product.item}</h4>
                    <img
                        src={product.picture}
                        alt="profile"
                        className="profile-picture"
                    />
                    <p>{product.about}</p>
                    <p><strong>Price:</strong> RM {product.price}</p>
                    <p><strong>In Stock: </strong>{product.quantity>0 ? product.quantity : <i>Sold out</i>}</p>
                    <button className="btn btn-warning" style={product.quantity>0 ? {} : {backgroundColor: '#ff0000'}} onClick={product.quantity>0 ? () => handleClick(product._id) : null}>Add to Cart</button>
                </div>
            </div>
        </div>
        
    );
}

export default ProductCard;