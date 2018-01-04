import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './ProductsGrid.css'
import ProductRow from "./ProductRow";

import ProductCard from './ProductCard';


class ProductsGrid extends PureComponent {
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


    selectElement = (id) => {
        this.setState({
            selectedProductCode: id,
            workMode: 1
        })
    };

    deleteBlock = (id, e) => {
        e.stopPropagation();
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

    cancelEditMode = () => {
        this.setState({
            workMode: 1
        })
    };
    saveEditedElement = (id, name, img, price, quantity) => {
        this.setState({
            itemsState: this.state.itemsState.map(
                (data) => {
                    if (data.id === id) {
                        data.name = name;
                        data.quantity = quantity;
                        data.img = img;
                        data.price = price;
                    }
                    return data;
                }
            ),
            workMode: 1
        })
    };
    setAddingState = () => {
        this.setState({
            workMode: 3
        })

    };
    addingElements =(name, img, price, quantity)=>{
        this.setState({
            itemState: this.state.itemsState.push(
                {
                    id: this.state.itemsState.length + 1,
                    name: name,
                    img: img,
                    price: price,
                    quantity: quantity
                }
            ),
            workMode: 1
        })
    };


    render() {
        let rowTable = this.state.itemsState.map(
            (data) => {
                if (this.state.selectedProductCode === data.id) {
                    return (
                        <div className='rowWrapper selected' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement} delete={this.deleteBlock}
                                        edit={this.editElement} workMode={this.state.workMode}/>
                            <ProductCard key={data.id} id={data.id} name={data.name} quantity={data.quantity}
                                         img={data.img} price={data.price} workMode={this.state.workMode}
                                         cancel={this.cancelEditMode} save={this.saveEditedElement}/>
                        </div>
                    )
                }
                else {
                    return (
                        <div className='rowWrapper' key={data.id}>
                            <ProductRow item={data} selectedState={this.state.selectedProductCode}
                                        select={this.selectElement} delete={this.deleteBlock}
                                        edit={this.editElement} workMode={this.state.workMode}/>
                        </div>
                    )
                }
            }
        );
        if (this.state.workMode !== 3) {
            return (
                <div className='table'>
                    {rowTable}
                    <button className="formCreateAdd"
                            onClick={this.setAddingState}> Добавить
                    </button>

                </div>
            )
        } else {
            return (
                <div className='table'>
                    {rowTable}
                    <ProductCard key={this.state.itemsState.length + 1} id={this.state.itemsState.length + 1} quantity={0} name={''} price={''} img={''}
                                 add={this.addingElements}
                                 workMode={this.state.workMode}
                                 cancel={this.cancelEditMode} save={this.saveEditedElement}/>
                    <button className="formCreateAdd"
                            onClick={this.setAddingState}> Добавить
                    </button>

                </div>

            )
        }
    }

}


export default ProductsGrid
