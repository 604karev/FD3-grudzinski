import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class ProductsCategory extends Component {

    render() {


        return (
            <div>
                <NavLink to="/motherboard" className="PageLink" activeClassName="ActivePageLink">Материнские платы</NavLink>
                <NavLink to="/videoCards" className="PageLink" activeClassName="ActivePageLink">Видеокарты</NavLink>
                <NavLink to="/processors" className="PageLink" activeClassName="ActivePageLink">Процессоры</NavLink>

            </div>

        );
    }
}

export default ProductsCategory