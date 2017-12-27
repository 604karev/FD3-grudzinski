import React, {Component} from 'react';
import './ProductRow.css'
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
        delete: PropTypes.func.isRequired,
        edit: PropTypes.func.isRequired,

    };


    render() {
        return (
            <div className='element' onClick={() => this.props.select(this.props.item.id)}>
                <span>{this.props.item.name}</span>
                <button onClick={() => this.props.delete(this.props.item.id)}>Удалить</button>
                <button onClick={() => this.props.edit(this.props.item.id)}>Редактировать</button>
            </div>


        )


    }
}

export default ProductRow

