import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';


class ProductCard extends PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        workMode: PropTypes.number.isRequired,
        cancel: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
        add: PropTypes.func.isRequired,
    };




    newNameRef = null;
    newImgRef = null;
    newQuantityRef = null;
    newPriceRef = null;

    setNewNameRef = (ref) => {
        this.newNameRef = ref;
    };
    setNewImgRef = (ref) => {
        this.newImgRef = ref;
    };
    setNewQuantityRef = (ref) => {
        this.newQuantityRef = ref;
    };
    setNewPriceRef = (ref) => {
        this.newPriceRef = ref;
    };

    checkValidation = () => {

        let newName = this.newNameRef.value;
        let newImg = this.newImgRef.value;
        let newPrice = this.newPriceRef.value;
        let newQuantity = this.newQuantityRef.value;

        if (newName.split('').length === 0) {
            alert('Поле Имя не должно быть путым');
            return false

        }
        if (newImg.split('').length === 0) {
            alert('Поле изображение не должно быть путым');
            return false

        }
        if (newPrice.split('').length === 0) {
            alert('Поле цена не должно быть путым');
            return false

        }
        if (newQuantity.toString().split('').length === 0) {
            alert('Поле количество не должно быть путым');
            return false

        }
        else return true
    };




    submitFormValidation = () => {

        if (this.props.workMode === 2 && this.checkValidation()) {
            this.props.save(this.props.id, this.newNameRef.value, this.newImgRef.value, this.newPriceRef.value, this.newQuantityRef.valueAsNumber)
        }
        if (this.props.workMode === 3 && this.checkValidation()) {
            this.props.add(this.props.id, this.newNameRef.value, this.newImgRef.value, this.newPriceRef.value, this.newQuantityRef.valueAsNumber)
        }
    };


    render() {
        console.log(this.props.id);
        console.log("ProductCard render");
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
                        <input id='formEditName' name=' formEditName' type="text" defaultValue={this.props.name}
                               ref={this.setNewNameRef}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditFile">Выберите изображение</label>
                        <input id=' formEditFile' name=' formEditFile' type="text" defaultValue={this.props.img}
                               ref={this.setNewImgRef}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditQuantity">Введите колличество</label>
                        <input id=' formEditQuantity' name=' formEditQuantity' type="number"
                               defaultValue={this.props.quantity}
                               ref={this.setNewQuantityRef}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formEditPrice">Введите цену</label>
                        <input id=' formEditPrice' name=' formEditPrice' type="text" defaultValue={this.props.price}
                               ref={this.setNewPriceRef}/>
                    </p>
                    <p className="formEditRow">
                        <button className="formEditCancel"
                                onClick={this.props.cancel}
                        >Отмена
                        </button>
                        <button className="formEditSave" onClick={this.submitFormValidation}> Сохранить
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
                        <input id='formCreateName' name=' formCreateName' type="text"
                               defaultValue={this.props.name}
                               ref={this.setNewNameRef}/>
                    </p>
                    <p className='formCreateRow'>
                        <label htmlFor="formEditFile">Выберите изображение</label>
                        <input id=' formCreateFile' name=' formCreateFile' type="text"
                               defaultValue={this.props.img}
                               ref={this.setNewImgRef}/>
                    </p>
                    <p className='formEditRow'>
                        <label htmlFor="formCreateQuantity">Введите колличество</label>
                        <input id=' formCreateQuantity' name=' formCreateQuantity' type="number"
                               defaultValue={this.props.quantity}
                               ref={this.setNewQuantityRef}/>
                    </p>
                    <p className='formCreateRow'>
                        <label htmlFor="formCreatePrice">Введите цену</label>
                        <input id=' formCreatePrice' name=' formCreatePrice' type="text"
                               defaultValue={this.props.price}
                               ref={this.setNewPriceRef}/>
                    </p>
                    <p className="formCreateRow">
                        <button className="formCreateCancel"
                                onClick={this.props.cancel}
                        >Отмена
                        </button>
                        <button className="formCreateAdd"
                                onClick={this.submitFormValidation}> Сохранить
                        </button>
                    </p>
                </div>

            )
        }
    }
}

export default ProductCard