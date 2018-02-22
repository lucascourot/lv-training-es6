import React, {Component} from 'react';
import './App.css';

import PageProducts from './components/products.page';
import CartComponent from './components/cart.page';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PageProducts />
                <CartComponent />
            </div>
        );
    }
}

export default App;
