import React, {PureComponent} from 'react';
import './ProductsGrid.css'
import ProductRow from "./ProductRow";
import ProductCard from './ProductCard';
import {connect} from 'react-redux';


class ProductsGrid extends PureComponent {



    lastUsedId = this.props.store.shopData.motherboard.reduce((prev, cur) => cur.id > prev.id ? cur : prev, {id: 0}).id;

    selectingElement = (id) => {
        this.props.onChangeWorkMode(id)
    };

    deletingElement = (id, e) => {
        e.stopPropagation();
        this.props.onDeleteElement(id)

    };
    editElement = (id, e) => {
        e.stopPropagation();
        this.props.onChangeEditMode(id);
    };

    cancelEditMode = () => {
        this.props.onCancelEditingMode();
    };

    saveEditedElement = (id, name, img, price, quantity) => {
        this.props.onSaveEditedElement(id, name, img, price, quantity)
    };

    setAddingMode = () => {
        ++this.lastUsedId;
        this.props.onSetAddingMode()
    };
    addingElement = (id, name, img, price, quantity) => {
        this.props.onAddingElement(id, name, img, price, quantity)
    };

    render() {
        let rowTable = this.props.store.shopData.motherboard.map(
            (data) => {
                if ((this.props.store.selectedProductCode === data.id && this.props.store.workMode === 1) || (this.props.store.selectedProductCode === data.id && this.props.store.workMode === 2)) {
                    return (
                        <div className='rowWrapper selected' key={data.id}>
                            <ProductRow name={data.name} select={this.selectingElement}
                                        delete={this.deletingElement}
                                        edit={this.editElement} id={data.id}/>
                            <ProductCard key={data.id} id={data.id} name={data.name} quantity={data.quantity}
                                         img={data.img} price={data.price} workMode={this.props.store.workMode}
                                         cancel={this.cancelEditMode} save={this.saveEditedElement}
                                         add={this.addingElement}/>
                        </div>
                    )
                }
                else {
                    return (
                        <div className='rowWrapper' key={data.id}>
                            <ProductRow name={data.name} select={this.selectingElement} delete={this.deletingElement}
                                        edit={this.editElement} id={data.id}/>
                        </div>
                    )
                }
            }
        );
        if (this.props.store.workMode !== 3) {
            return (
                <div className='table'>
                    {rowTable}
                    <button className="formCreateAdd"
                            onClick={this.setAddingMode}> Добавить
                    </button>
                </div>
            )
        } else {
            return (
                <div className='table'>
                    {rowTable}
                    <ProductCard key={this.lastUsedId}
                                 id={this.lastUsedId}
                                 quantity={0} name={''} price={''} img={''}
                                 add={this.addingElement}
                                 workMode={this.props.store.workMode}
                                 cancel={this.cancelEditMode} save={this.saveEditedElement}/>
                    <button className="formCreateAdd"
                            onClick={this.setAddingMode}> Добавить
                    </button>
                </div>
            )
        }
    }
}


export default connect(
    (state) => ({store: state}),

    (dispatch) => ({
        onChangeWorkMode: (id) => {
            dispatch({type: 'SELECTED_PRODUCT', id: id});
            dispatch({type: 'READ_WORK_MODE'})
        },
        onChangeEditMode: (id) => {
            dispatch({type: 'SELECTED_PRODUCT', id: id});
            dispatch({type: 'EDIT_WORK_MODE'})
        },
        onDeleteElement: (id) => {
            dispatch({type: 'REMOVE_ROW', id: id})
        },
        onCancelEditingMode: () => {
            dispatch({type: 'DEFAULT_WORK_MODE'})
        },
        onSaveEditedElement: (id, name, img, price, quantity) => {
            dispatch({type: 'SAVE_EDIT_ROW', id: id, name: name, img: img, price: price, quantity: quantity});
            dispatch({type: 'DEFAULT_WORK_MODE'})
        },
        onSetAddingMode: () => {
            dispatch({type: 'ADD_WORK_MODE'})
        },
        onAddingElement: (id, name, img, price, quantity) => {
            dispatch({type: 'ADD_ROW', id: id, name: name, img: img, price: price, quantity: quantity});
            dispatch({type: 'DEFAULT_WORK_MODE'})

        }

    })
)(ProductsGrid)
