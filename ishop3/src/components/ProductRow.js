import React, {Component} from 'react';
import './ProductRow.css'
import PropTypes from 'prop-types';
import {activeBlock, editMode, removeBlock} from './events'

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
    };
    edit = () => {
        editMode.emit('eventChangingToEditMode', 2)
    };
    remove = () => {
        removeBlock.emit('eventRemoveBlock', this.props.item.id)

    }


    render() {
        return (
            <div className='element' onClick={this.select}>
                <span>{this.props.item.name}</span>
                <button onClick={this.remove}>Удалить</button>
                <button onClick={this.edit}>Редактировать</button>
            </div>


        )


    }
}

export default ProductRow

