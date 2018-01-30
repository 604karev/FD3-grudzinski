import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProductsGrid from './ProductsGrid';



class ProductsRoute extends Component {

    render() {

        return (
            <div>
                <Route path="/:category" component={ProductsGrid}/>
            </div>
        );

    }

}

export default ProductsRoute;