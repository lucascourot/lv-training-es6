import React from 'react';
import {connect} from "react-redux";

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

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(CartPage);
