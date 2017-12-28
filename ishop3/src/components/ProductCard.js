import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';


class ProductCard extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        workMode: PropTypes.number.isRequired,
        cancel: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
    };
    state = {
        // workMode: this.props.workMode,
        newImg: this.props.img,
        newId: this.props.id,
        newName: this.props.name,
        newPrice: this.props.price,
        newQuantity: this.props.quantity,
    };


    render() {
        console.log(this.props.workMode);
        if (this.props.workMode === 0) {
            return null
        }
        if (this.props.workMode === 1) {
            return (
                <div className=' elementCard'>
                    <img src={this.props.img} alt={this.props.name}/>
                    <div> {' Колличество: ' + this.props.quantity}</div>
                    <div> {' Цена: ' + this.props.price}</div>
                </div>
            )
        }
        if (this.props.workMode === 2) {
            return (
                <div className='formEdit'>
                    <p className='formEditRow'>
                        <label htmlFor="formEditName">Введите название продукта</label>
                        <input id='formEditName' name=' formEditName' type="text" defaultValue={this.state.newName}
                               onChange={(e) => this.setState({newName: e.target.value})}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditFile">Выберите изображение</label>
                        <input id=' formEditFile' name=' formEditFile' type="text" defaultValue={this.state.newImg}
                               onChange={(e) => this.setState({newImg: e.target.value})}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditQuantity">Введите колличество</label>
                        <input id=' formEditQuantity' name=' formEditQuantity' type="number"
                               defaultValue={this.state.newQuantity}
                               onChange={(e) => this.setState({newQuantity: e.target.valueAsNumber})}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditPrice">Введите цену</label>
                        <input id=' formEditPrice' name=' formEditPrice' type="text" defaultValue={this.state.newPrice}
                               onChange={(e) => this.setState({newPrice: e.target.value})}/>
                    </p>
                    <p className="formEditRow">
                        <button className="formEditCancel"
                                onClick={this.props.cancel}
                        >Отмена
                        </button>
                        <button className="formEditSave"
                                onClick={() => this.props.save(this.state.newId, this.state.newName, this.state.newImg, this.state.newPrice, this.state.newQuantity)}> Сохранить
                        </button>
                    </p>
                </div>
            )
        }
        if (this.props.workMode === 3) {
            return (
                <div className='formCreate'>
                    <p className='formCreateRow'>
                        <label htmlFor="formCreateName">Введите название продукта</label>
                        <input id='formCreateName' name=' formCreateName' type="text" defaultValue={this.state.newName}
                               onChange={(e) => this.setState({newName: e.target.value})}/>
                    </p>
                    <p className='formCreateRow'>
                        <label htmlFor="formEditFile">Выберите изображение</label>
                        <input id=' formCreateFile' name=' formCreateFile' type="text" defaultValue={this.state.newImg}
                               onChange={(e) => this.setState({newImg: e.target.value})}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formCreateQuantity">Введите колличество</label>
                        <input id=' formCreateQuantity' name=' formCreateQuantity' type="number"
                               defaultValue={this.state.newQuantity}
                               onChange={(e) => this.setState({newQuantity: e.target.valueAsNumber})}/>
                    </p>
                    <p className='formCreateRow'>
                        <label htmlFor="formCreatePrice">Введите цену</label>
                        <input id=' formCreatePrice' name=' formCreatePrice' type="text"
                               defaultValue={this.state.newPrice}
                               onChange={(e) => this.setState({newPrice: e.target.value})}/>
                    </p>
                    <p className="formCreateRow">
                        <button className="formCreateCancel"
                                onClick={this.props.cancel}
                        >Отмена
                        </button>
                        <button className="formCreateAdd"
                                onClick={() => this.props.add(this.state.newName, this.state.newImg, this.state.newPrice, this.state.newQuantity)}> Сохранить
                        </button>
                    </p>
                </div>
            )
        }
    }
}

export default ProductCard