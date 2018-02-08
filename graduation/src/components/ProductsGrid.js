import React, {PureComponent} from 'react';
import './ProductsGrid.css'
import ProductRow from "./ProductRow";
import ProductCard from './ProductCard';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import {default as isoFetch} from 'isomorphic-fetch';


class ProductsGrid extends PureComponent {
    constructor(props) {
        super(props);
        this.loadData();
    }

    lastUsedId = this.props.store.shopData.reduce((prev, cur) => cur.id > prev.id ? cur : prev, {id: 0}).id;

    selectingElement = (id, e) => {
        e.stopPropagation();
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

    saveEditedElement = (id, name, img, price, quantity, description) => {
        this.props.onSaveEditedElement(id, name, img, price, quantity, description)
    };

    setAddingMode = () => {
        ++this.lastUsedId;
        this.props.onSetAddingMode()
    };
    addingElement = (id, name, img, price, quantity, category, description) => {
        this.props.onAddingElement(id, name, img, price, quantity, category, description)
    };
    fetchSuccess = (data) => {
        this.props.onLoadData(data)
    };


    loadData = () => {
        isoFetch("/data.json", {
            method: 'get',
            headers: {
                "Accept": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then((data) => {
                try {
                    this.fetchSuccess(data);
                }
                catch (error) {
                    console.log(error.message);
                }
            })
            .catch((error) => {
                this.fetchError(error.userMessage || error.message);
            })
        ;

    };
    detectTheEnd = (e) => {
        if (e.propertyName === "height") {
            if (e.target.querySelector('.elementCard')) {
                e.target.querySelector('.elementCard').style.display = 'flex'
            }

        }

    };

    render() {
        let row = document.querySelectorAll('.rowWrapper');
        if (row) {
            row.forEach(
                (data) => {
                    data.addEventListener("transitionend", this.detectTheEnd, false);
                }
            )
        }


        let categoryData = [...this.props.store.shopData].filter(
            (data) => {

                return data.category === this.props.match.params.category
            }
        );

        let rowTable = categoryData.map(
            (data) => {
                if ((this.props.store.selectedProductCode === data.id && this.props.store.workMode === 1)) {
                    return (


                        <div className='rowWrapper col-md-8 selected' key={data.id}>
                            <ProductRow name={data.name} select={this.selectingElement}
                                        delete={this.deletingElement}
                                        edit={this.editElement} id={data.id}
                                        workMode={this.props.store.workMode}
                            />

                            <ProductCard key={data.id} id={data.id} name={data.name} quantity={data.quantity}
                                         img={data.img} price={data.price} workMode={this.props.store.workMode}
                                         cancel={this.cancelEditMode} save={this.saveEditedElement}
                                         add={this.addingElement} description={data.description}/>
                        </div>


                    )
                }
                if (this.props.store.selectedProductCode === data.id && this.props.store.workMode === 2) {
                    return (
                        <ProductCard key={data.id} id={data.id} name={data.name} quantity={data.quantity}
                                     img={data.img} price={data.price} workMode={this.props.store.workMode}
                                     cancel={this.cancelEditMode} save={this.saveEditedElement}
                                     add={this.addingElement} description={data.description}/>
                    )

                }
                else {
                    return (
                        <div className='rowWrapper col-md-8' key={data.id}>
                            <ProductRow name={data.name} select={this.selectingElement}
                                        delete={this.deletingElement}
                                        edit={this.editElement} id={data.id}
                                        workMode={this.props.store.workMode}
                            />
                        </div>


                    )
                }
            }
        );
        if (this.props.store.workMode === 1 || this.props.store.workMode === 0) {
            return (
                <div className='container'>
                    <div className='row'>
                        {rowTable}
                    </div>
                    <div className="row">
                        <button className="formCreateAdd offset-md-2"
                                onClick={this.setAddingMode}><FontAwesome
                            name="plus"
                            style={{
                                fontSize: '20px',
                                color: '#ffffff',
                                position: 'absolute',
                                top: '18px',
                                left: '35px',
                                cursor: 'pointer'
                            }}
                        /> <span className='add'>Добавить</span>
                        </button>
                    </div>
                </div>
            )
        } else if (this.props.store.workMode === 2) {
            return (
                <div className='container'>
                    <div className='row'>
                        {rowTable}
                    </div>
                    <div className="row">
                        <button className="formCreateAdd offset-md-2"><FontAwesome
                            name="plus"
                            style={{
                                fontSize: '20px',
                                color: '#ffffff',
                                position: 'absolute',
                                top: '18px',
                                left: '35px',
                                cursor: 'pointer'
                            }}
                        /> <span className='add'>Добавить</span>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <div className='row'>
                        {rowTable}

                    </div>
                    <div className="row">
                        <ProductCard key={this.lastUsedId}
                                     id={this.lastUsedId}
                                     category={this.props.match.params.category}
                                     quantity={0} name={''} price={''} img={''} description={''}
                                     add={this.addingElement}
                                     workMode={this.props.store.workMode}
                                     cancel={this.cancelEditMode} save={this.saveEditedElement}/>

                    </div>
                </div>
            )
        }
    }
}


export default connect(
    (state) => ({store: state}),

    (dispatch) => ({
        onLoadData: (data) => {
            dispatch({type: 'LOAD_DATA', data: data})
        },
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
        onSaveEditedElement: (id, name, img, price, quantity, description) => {
            dispatch({
                type: 'SAVE_EDIT_ROW',
                id: id,
                name: name,
                img: img,
                price: price,
                quantity: quantity,
                description: description
            });
            dispatch({type: 'DEFAULT_WORK_MODE'})
        },
        onSetAddingMode: () => {
            dispatch({type: 'ADD_WORK_MODE'})
        },
        onAddingElement: (id, name, img, price, quantity, category, description) => {
            dispatch({
                type: 'ADD_ROW',
                id: id,
                name: name,
                img: img,
                price: price,
                quantity: quantity,
                category: category,
                description: description

            });
            dispatch({type: 'DEFAULT_WORK_MODE'})

        }

    })
)(ProductsGrid)
