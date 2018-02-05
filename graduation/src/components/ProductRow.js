import React, {PureComponent} from 'react';
import './ProductRow.css'
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';


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
                <span className='elementName'>{this.props.name}</span>
                <span className='elementEdit' onClick={(e) => this.props.edit(this.props.id, e)}>
                    <FontAwesome
                        name="pencil"
                        style={{fontSize: '24px', color: '#0063ec', padding: '0 10px', cursor:'pointer'}}/></span>

                <span className='elementRemove' onClick={(e) => this.props.delete(this.props.id, e)}>
                    <FontAwesome
                        name="trash"
                        style={{fontSize: '24px', color: '#0063ec', padding: '0 10px', cursor:'pointer'}}
                    /></span>

            </div>
        )
    }
}

export default ProductRow

