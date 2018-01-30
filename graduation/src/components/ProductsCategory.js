import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class ProductsCategory extends Component {

    render() {
        return (
            <div>
                <NavLink to="/" className="PageLink" activeClassName="ActivePageLink">Категории</NavLink>

                <NavLink to="/motherboard" className="PageLink" activeClassName="ActivePageLink">Материнские
                    платы</NavLink>
                <NavLink to="/processors"  className="PageLink" activeClassName="ActivePageLink">Процессоры</NavLink>
                <NavLink to="/videoCard" className="PageLink" activeClassName="ActivePageLink">Видеокарты</NavLink>
            </div>

        );
    }
}

export default ProductsCategory