import React, {Component} from 'react';
import ProductsGrid from './components/ProductsGrid';
import './App.css';


class App extends Component {
    render() {

        return (
            <div className="App">
                <ProductsGrid />
            </div>
        );
    }
}


export default App
