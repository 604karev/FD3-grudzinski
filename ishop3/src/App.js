import React, {Component} from 'react';
import ProductsGrid from './components/ProductsGrid'


import './App.css';

const washer = require('./img/Washer.jpg');
const vacuum = require('./img/vacuum.jpg');
const iron = require('./img/iron.jpg');

const shopData = [
    {
        id: 1,
        name: 'Стиральная машина',
        price: '344 р.',
        img: washer,
        quantity: 334,
    },
    {
        id: 2,
        name: 'Пылесос',
        price: '104 р.',
        img: vacuum,
        quantity: 100,
    },
    {
        id: 3,
        name: 'Утюг',
        price: '54 р.',
        img: iron,
        quantity: 558,
    }
];

class App extends Component {


    render() {
        return (
            <div className="App">
                <ProductsGrid items={shopData}
                />
            </div>
        );
    }
}

export default App;
