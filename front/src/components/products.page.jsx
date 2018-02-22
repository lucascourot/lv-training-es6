import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {addItemToCart, removeItemFromCart} from "../actions/cart.actions";


const ProductsPage = ({ productList, onAddProduct, onRemoveProduct }) => (
    <div>
        <h1>Products list</h1>
        <ul>
            {productList.map(product => (
                <li key={product.id}>
                    {product.name} ({product.price}€)
                    <button onClick={() => onAddProduct(product.id)}>+</button>
                    <button onClick={() => onRemoveProduct(product.id)}>-</button>
                </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    productList: state.products,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    onAddProduct: addItemToCart,
    onRemoveProduct: removeItemFromCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
