import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductsGrid.css'
import ProductRow from "./ProductRow";


class ProductsGrid extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.string.isRequired,
                    img: PropTypes.string.isRequired,
                    quantity: PropTypes.number.isRequired,
                }
            )
        )

    };
    state = {
        itemsState: this.props.items,
        selectedProductCode: null,

    };

    selectElement = (id) => {
        this.setState({selectedProductCode: id})
    };


    render() {
        let rowTable = this.state.itemsState.map(
            (data) => {
                if (this.state.selectedProductCode === data.id) {
                    return (
                        <div className='rowWrapper selected' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement}/>
                        </div>
                    )

                } else {
                    return (
                        <div className='rowWrapper' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement}/>
                        </div>
                    )
                }


            }
        );


        console.log(this.state.selectedProductCode);

        return (
            <div className='table'>
                {rowTable}
            </div>
        )
    }

}


export default ProductsGrid
