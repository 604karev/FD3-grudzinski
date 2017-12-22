import React, {Component} from 'react';
import './ProductsRow.css'
import PropTypes from 'prop-types';

class ProductRow extends Component {

    static propTypes = {
        item: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
            }
        ),
        selectedState: PropTypes.number,
        select: PropTypes.func.isRequired,


    };

    render() {
        return (

                <div className='element'
                     onClick={() => this.props.select(this.props.item.id)}>{this.props.item.name}</div>

        )


    }
}

export default ProductRow

