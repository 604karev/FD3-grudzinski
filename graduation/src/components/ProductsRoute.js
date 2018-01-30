import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsCategory from "./ProductsCategory";


class ProductsRoute extends Component {

    render() {

        return (
            <div>
                <Route to="/" copmonent={ProductsCategory} />
                <Route path="/:category" component={ProductsGrid}/>
            </div>
        );

    }

}

export default ProductsRoute;