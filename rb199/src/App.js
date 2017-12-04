import React, {Component} from 'react';
import CreatorTable from './Components/СreatorTable';
import washer from './img/Washer.jpg';
import vacuum from './img/vacuum.jpg';
import iron from './img/iron.jpg';
import './App.css';

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
                <CreatorTable items={shopData}
                />
            </div>
        );
    }
}

export default App;
