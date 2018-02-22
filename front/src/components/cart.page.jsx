import React from 'react';

const CartPage = ({ cart }) => (
    <div>
        <h1>Cart</h1>
        <ul>
            {Object.entries(cart).map(([id, quantity]) => (
                <li key={id}>{id}: {quantity}</li>
            ))}
        </ul>
    </div>
);

export default CartPage;
