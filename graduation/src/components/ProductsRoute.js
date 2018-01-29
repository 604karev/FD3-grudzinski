import React from 'react';
import { Route } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';



class ProductsRoute extends React.Component {

    render() {

        return (
            <div>
                <Route path='/videoCards' component={ProductsGrid} />
                <Route path='/processors' component={ProductsGrid} />
                <Route path='/motherboard' component={ProductsGrid} />
            </div>
        );

    }

}

export default ProductsRoute;