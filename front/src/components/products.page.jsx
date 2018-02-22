import React from 'react';

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

export default ProductsPage;
