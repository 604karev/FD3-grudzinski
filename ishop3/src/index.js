import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const washer = require('./img/Washer.jpg');
const vacuum = require('./img/vacuum.jpg');
const iron = require('./img/iron.jpg');
const initialState = {
    shopData: [
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
        }],
    workMode: 0,
    selectedProductCode: null,
};

function internetShop(state = initialState, action) {
    if (action.type === 'ADD_ROW') {
        return {
            ...state
        }


    } else if (action.type === 'CHANGE_WORK_MODE') {
        return {
            ...state, ...state.workMode = 1, ...state.selectedProductCode = action.id
        };
    }
    return state
}

const store = createStore(internetShop, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

