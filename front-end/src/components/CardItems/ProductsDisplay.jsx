import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';
import './ProductDisplay.css'; // Import CSS file for styling
import embroideryItems from './embroideryDummy'; // Import sample data

const sampleProducts = [
    {
        id: 1,
        name: "Floral Embroidery Hoop",
        description: "A beautiful handcrafted embroidery hoop featuring vibrant floral designs.",
        price: 25,
        imageURL: "./embroidery1.jpeg"
    },
    {
        id: 2,
        name: "Butterfly Embroidery Set",
        description: "An inspiring set for butterfly lovers, perfect for beginners and experts alike.",
        price: 34,
        imageURL: "./embroidery2.jpeg"
    },
    {
        id: 3,
        name: "Ocean Waves Embroidery Kit",
        description: "Capture the calming essence of the ocean with this detailed embroidery kit.",
        price: 29,
        imageURL: "./embroidery3.jpeg"
    },
    {
        id: 4,
        name: "Mountain Landscape Embroidery",
        description: "An intricate embroidery piece that showcases a stunning mountain landscape.",
        price: 45,
        imageURL: "./embroidery4.jpeg"
    },
    {
        id: 5,
        name: "Abstract Art Embroidery",
        description: "Modern abstract art meets traditional embroidery in this unique piece.",
        price: 39,
        imageURL: "./embroidery5.jpeg"
    }
];

function ProductsDisplay() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setProducts(sampleProducts);
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