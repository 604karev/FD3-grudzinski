import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductsGrid.css'
import ProductRow from "./ProductRow";

import ProductCard from './ProductCard';


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
        workMode: 0

    };


    selectElement = (id, e) => {
        
        this.setState({
            selectedProductCode: id,
            workMode: 1
        })
    };

    deleteBlock = (id) => {
        this.setState({
            itemsState: this.state.itemsState.filter(
                (data) => {
                    return data.id !== id

                }
            )
        })

    };

    editElement = (id, e) => {
        e.stopPropagation();
        this.setState({
            selectedProductCode: id,
            workMode: 2
        });

    };


    render() {
        let rowTable = this.state.itemsState.map(
            (data) => {
                if (this.state.selectedProductCode === data.id) {
                    return (
                        <div className='rowWrapper selected' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement} delete={this.deleteBlock} edit={this.editElement}/>
                            <ProductCard key={data.id} id={data.id} name={data.name} quantity={data.quantity}
                                         img={data.img} price={data.price} workMode={this.state.workMode}/>
                        </div>
                    )

                } else {
                    return (
                        <div className='rowWrapper' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement} delete={this.deleteBlock} edit={this.editElement}/>
                        </div>
                    )
                }
            }
        );


        // console.log(this.state.workMode);

        return (
            <div className='table'>
                {rowTable}
            </div>
        )
    }

}


export default ProductsGrid
