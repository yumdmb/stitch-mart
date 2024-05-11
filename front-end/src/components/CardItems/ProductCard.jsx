import './ProductCard.css'; // Import CSS file for styling

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.imageURL} alt={product.name} />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;