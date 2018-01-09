import React, {PureComponent} from 'react';
import './ProductRow.css'
import PropTypes from 'prop-types';


class ProductRow extends PureComponent {

    static propTypes = {
        item: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
            }
        ),
        select: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
        edit: PropTypes.func.isRequired,


    };


    render() {
        console.log("ProductRow render");
        console.log(this.props.item);

        console.log('WorkMode' +this.props.workMode);
        return (
            <div className='element' onClick={(e) => this.props.select(this.props.item.id)}>
                <span>{this.props.item.name}</span>
                <button onClick={(e) => this.props.delete(this.props.item.id, e)}>Удалить</button>
                <button onClick={(e) => this.props.edit(this.props.item.id, e)}>Редактировать</button>
            </div>
        )
    }
}

export default ProductRow

