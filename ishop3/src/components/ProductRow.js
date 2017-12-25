import React, {Component} from 'react';
import './ProductsRow.css'
import PropTypes from 'prop-types';
import {activeBlock} from './events'

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

    };

    select = () => {
        activeBlock.emit('eventActiveBlock', this.props.item.id);
        console.log(activeBlock)

    };


    render() {
        return (

            <div className='element'
                 onClick={() => this.select}>{this.props.item.name}</div>

        )


    }
}

export default ProductRow

