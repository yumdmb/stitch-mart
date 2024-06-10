import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductDisplay.css'; // Import CSS file for styling
import embroideryItems from './embroideryDummy'; // Import sample data
import { useSelector } from 'react-redux'

function ProductsDisplay() {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const {currentUser, loading, error } = useSelector(state => state.user);


    const fetchProduct = async() =>{
        const res = await fetch(`/api/inventory`);
        const json = await res.json();
        setProducts(json);
        console.log(products);
    };
    const fetchCart = async() =>{
        const res = await fetch(`/api/cart/show`);
        const json = await res.json();
        setCarts(json);
        console.log(carts);
    };
    const fetchTotalPrice = async() =>{
        const res = await fetch(`/api/cart/totalPrice`);
        const json = await res.json();
        setTotalPrice(json.totalPrice);
        console.log(totalPrice);
    }

    useEffect(() => {
        fetchProduct();
        fetchCart();
        fetchTotalPrice();
    },[carts]);

    const addItem = async(id) => {
        const res = await fetch(`/api/cart/editAdd/${id}`,{
            method: 'PUT'
        });
        const json = await res.json();
        console.log(json);
    }

    const minusItem = async(id) => {
        const res = await fetch(`/api/cart/editMinus/${id}`,{
            method: 'PUT'
        });
        const json = await res.json();
        console.log(json);
    }

    const checkout = async() => {
        const res = await fetch(`/api/cart/checkout/${currentUser.email}`,{
            method: 'POST'
        });
        const json = await res.json();
        console.log(json);
    }

    return (
        <div className="products-container">
            <div className="product-cards">
                {products.map(product => (
                    <ProductCard  key={product.id} product={product} />
                ))}
            </div>

            <hr className='divider'></hr>
            
            <div className="cart">
                <h1>
                    <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                <strong>      {currentUser.username}'s cart!   </strong>
                    <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </h1>
            </div>
            <div className='cart-container'>
                    {carts && carts.length > 0 ? (
                        carts.map(cart => { //.reverse() to apply the latest one on top
                            return (
                                <div key={cart._id} className='messages'>
                                    <h4><strong>{cart.item}</strong></h4>
                                    <h5><strong>Quantity: </strong>{cart.quantity}</h5>
                                    <h5><strong>Total Price: RM </strong>{cart.totalPrice}</h5>
                                    <button className="btn btn-primary" onClick={() => addItem(cart.itemId)}>+</button>
                                    <button className="btn btn-danger" onClick={() => minusItem(cart.itemId)}>-</button>
                                </div>
                            );
                        })
                    ) : (
                        <div className='empty-cart'>
                            <h1>
                                Your cart is empty, dear {currentUser.username}.        
                            </h1>
                        </div>
                    )}

                    {carts && carts.length > 0 ? (
                        <div className='total-price'>
                            <h2 className='text'><strong>Total Price: </strong>RM {totalPrice}</h2>
                            <button className="btn btn-primary" onClick={checkout}> Checkout </button>
                        </div>
                    ) : (
                        <>
                        </>
                    )}
            </div>
        </div>
    );
}

export default ProductsDisplay;