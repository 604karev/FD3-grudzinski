import React, {Component} from 'react';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import ProductsCategory from "./components/ProductsCategory";
import {createStore} from 'redux';
import DataLoader from './components/DataLoader'

DataLoader();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <ProductsCategory/>
                </Provider>
            </BrowserRouter>
        );
    }
}


export default App
