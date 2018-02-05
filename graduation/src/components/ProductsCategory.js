import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import './ProductsCategory.css';
import ProductsGrid from './ProductsGrid';


class ProductsCategory extends Component {

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className="row">
                        <div className=" nav">
                            <NavLink to="/motherboard" className="pageLink btn " activeClassName="active">Материнские
                                платы</NavLink>
                            <NavLink to="/processors" className="pageLink btn "
                                     activeClassName=" active">Процессоры</NavLink>
                            <NavLink to="/videoCard" className="pageLink btn "
                                     activeClassName="active">Видеокарты</NavLink>

                        </div>
                    </div>
                </div>
                <Route path="/:category" component={ProductsGrid}/>
            </div>

        );
    }
}

export default ProductsCategory