import React, {Component} from 'react';
import './App.css';

import PageProducts from './components/products.page';
import CartComponent from './components/cart.page';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            productList: [
                {
                    id: 1,
                    name: 'Fancy shoes',
                    price: 2450,
                },
            ],
            cart: {},
        }
    }

    addProduct = (id) => {
        this.setState({
            cart: {
                ...this.state.cart,
                [id]: (this.state.cart[id] || 0) + 1,
            },
        })
    };

    removeProduct = (id) => {
        const newCart = {
        ...this.state.cart
        };

        if (newCart[id] > 0) {
            newCart[id]--;
        }

        if (newCart[id] <= 0) {
            delete newCart[id];
        }

        this.setState({
            cart: newCart,
        })
    };

    render() {
        return (
            <div className="App">
                <PageProducts
                    productList={this.state.productList}
                    onAddProduct={this.addProduct}
                    onRemoveProduct={this.removeProduct}
                />
                <CartComponent cart={this.state.cart}/>
            </div>
        );
    }
}

export default App;
