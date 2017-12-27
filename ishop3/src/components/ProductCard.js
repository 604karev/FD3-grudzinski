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
    };
    state = {
        workMode: this.props.workMode,
        newImg: this.props.img,
        newId: this.props.id,
        newName: this.props.name,
        newPrice: this.props.price,
        newQuantity: this.props.quantity,
    };





    render() {
        if (this.state.workMode === 0) {
            return null
        }
        if (this.state.workMode === 1) {
            return (
                <div className=' elementCard'>
                    <img src={this.props.img} alt={this.props.name}/>
                    <div> {' Колличество: ' + this.props.quantity}</div>
                    <div> {' Цена: ' + this.props.price}</div>
                </div>

            )

        }
        if (this.state.workMode === 2) {
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
                        <input id=' formEditQuantity' name=' formEditQuantity' type="text"
                               defaultValue={this.state.newQuantity}
                               onChange={(e) => this.setState({newQuantity: e.target.value})}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditPrice">Введите цену</label>
                        <input id=' formEditPrice' name=' formEditPrice' type="text" defaultValue={this.state.newPrice}
                               onChange={(e) => this.setState({newPrice: e.target.value})}/>
                    </p>
                    <p className="formEditRow">
                        <button className="formEditCancel" onClick ={this.cancel}>Отмена</button>
                        <button className="formEditSave"
                                onClick={() => console.log(this.state.newPrice, this.state.newQuantity, this.state.newImg, this.state.newName)}> Сохранить
                        </button>
                    </p>
                </div>
            )
        }

    }
}

export default ProductCard