import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';
import './ProductDisplay.css'; // Import CSS file for styling
import embroideryItems from './embroideryDummy'; // Import sample data

function ProductsDisplay() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setProducts(embroideryItems);
    }, []);

    return (
        <div className="products-container">
            <HeaderAfterLogin />
            <div className="product-cards">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsDisplay;