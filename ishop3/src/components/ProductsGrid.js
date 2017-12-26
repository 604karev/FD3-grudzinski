import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductsGrid.css'
import ProductRow from "./ProductRow";
import {activeBlock, removeBlock} from './events';
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

    };


    componentDidMount = () => {
        activeBlock.addListener('eventActiveBlock', this.selectElement);
        removeBlock.addListener('eventRemoveBlock', this.deleteBlock);
    };

    componentWillUnmount = () => {
        activeBlock.removeListener('eventActiveBlock', this.selectElement);
        removeBlock.removeListener('eventRemoveBlock', this.deleteBlock);
    };

    selectElement = (id) => {
        this.setState({selectedProductCode: id})
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


    render() {
        let rowTable = this.state.itemsState.map(
            (data) => {
                if (this.state.selectedProductCode === data.id) {
                    return (
                        <div className='rowWrapper selected' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement}/>
                            <ProductCard key={data.id} id={data.id} name={data.name} quantity={data.quantity}
                                         img={data.img} price={data.price} workMode={1}/>
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
