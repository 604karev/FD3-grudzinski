import React, {Component} from 'react';
import ProductsRoute from './components/ProductsRoute'

import './App.css';
import ProductsCategory from "./components/ProductsCategory";


class App extends Component {
    render() {
        return (
            <div className="App">
                <ProductsCategory/>
                <ProductsRoute/>
            </div>
        );
    }
}


export default App
