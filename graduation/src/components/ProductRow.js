import React, {PureComponent} from 'react';
import './ProductRow.css'
import PropTypes from 'prop-types';



class ProductRow extends PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        select: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
        edit: PropTypes.func.isRequired,
    };


    render() {
        console.log("ProductRow render");
        return (
            <div className='element' onClick={(e) => this.props.select(this.props.id)}>
                <span>{this.props.name}</span>
                <button onClick={(e) => this.props.delete(this.props.id, e)}>Удалить</button>
                <button onClick={(e) => this.props.edit(this.props.id, e)}>Редактировать</button>
            </div>
        )
    }
}

export default ProductRow

