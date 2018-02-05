import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import FontAwesome from 'react-fontawesome';


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
    newDescriptionRef = null;

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
    setNewDescriptionRef = (ref) => {
        this.newDescriptionRef = ref
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
            this.props.save(this.props.id, this.newNameRef.value, this.newImgRef.value, this.newPriceRef.value, this.newQuantityRef.valueAsNumber, this.newDescriptionRef.value)
        }
        if (this.props.workMode === 3 && this.checkValidation()) {
            this.props.add(this.props.id, this.newNameRef.value, this.newImgRef.value, this.newPriceRef.value, this.newQuantityRef.valueAsNumber, this.props.category, this.newDescriptionRef.value)
        }
    };


    render() {
        console.log("ProductCard render");
        if (this.props.workMode === 0) {
            return null
        }
        if (this.props.workMode === 1) {
            return (
                <div className=' elementCard row'>
                    <div className='col-sm-4 '>
                        <div className='imageBorder'>
                            <img src={this.props.img} alt={this.props.name}/>
                        </div>

                    </div>

                    <div className='col-sm-8'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='elementCardQuantity'><b>Колличество: </b>{this.props.quantity}</div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='elementCardPrice'><b>Цена: </b>{this.props.price}</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='elementCardDescription'><b>Описание: </b><br/>{this.props.description}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
        if (this.props.workMode === 2) {
            return (
                <div className='formEdit col-md-8'>
                    <div className='formEditRow'>
                        <div className='formEditName'>
                            <input className='col-md-6' id='formEditName' name=' formEditName' type="text"
                                   defaultValue={this.props.name}
                                   ref={this.setNewNameRef}/>
                        </div>
                        <span className="formEditSave" onClick={this.submitFormValidation}>
                            <FontAwesome
                                name="save"
                                style={{fontSize: '24px', color: '#0063ec', padding: '0 10px', cursor: 'pointer'}}/>
                        </span>
                        <span className="formEditCancel" onClick={this.props.cancel}><FontAwesome
                            name="ban"
                            style={{fontSize: '24px', color: '#0063ec', padding: '0 10px', cursor: 'pointer'}}/>
                        </span>

                    </div>
                    <div className='row formEditInformation'>
                        <div className='col-sm-4'>
                            <div className='imageBorder'>
                                <img className='formEditImage' src={this.props.img} alt={this.props.img}/>
                            </div>
                            <label htmlFor="formEditImage">
                                <FontAwesome
                                    name="link"
                                    style={{
                                        fontSize: '21px',
                                        color: '#f0f3f7',
                                        padding: '7px 10px',
                                        cursor: 'pointer',

                                    }}/>
                            </label>
                            <input id='formEditImage' name=' formEditImage' type="text"
                                   defaultValue={this.props.img}
                                   ref={this.setNewImgRef}/>


                        </div>
                        <div className='col-sm-8'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <label htmlFor="formEditQuantity"><b>Колличество:</b></label>
                                    <input id='formEditQuantity' name=' formEditQuantity' type="number"
                                           defaultValue={this.props.quantity}
                                           ref={this.setNewQuantityRef}/>
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor="formEditPrice"><b>Цена:</b></label>
                                    <input id='formEditPrice' name=' formEditPrice' type="text"
                                           defaultValue={this.props.price}
                                           ref={this.setNewPriceRef}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <label htmlFor="formEditDescription"><b>Описание:</b></label>
                                    <textarea name="formEditDescription" id="formEditDescription" cols="30"
                                              rows="7" defaultValue={this.props.description}
                                              ref={this.setNewDescriptionRef}>
                                </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.props.workMode === 3) {
            return (

                <div className='formEdit col-md-8'>
                    <div className='formEditRow'>
                        <div className='formEditName'>
                            <input className='col-md-6' id='formEditName' name=' formEditName' type="text" placeholder="Введите имя"
                                   defaultValue={this.props.name}
                                   ref={this.setNewNameRef}/>
                        </div>
                        <span className="formEditSave" onClick={this.submitFormValidation}>
                            <FontAwesome
                                name="save"
                                style={{fontSize: '24px', color: '#0063ec', padding: '0 10px', cursor: 'pointer'}}/>
                        </span>
                        <span className="formEditCancel" onClick={this.props.cancel}><FontAwesome
                            name="ban"
                            style={{fontSize: '24px', color: '#0063ec', padding: '0 10px', cursor: 'pointer'}}/>
                        </span>

                    </div>
                    <div className='row formEditInformation'>
                        <div className='col-sm-4'>
                            <div className='imageBorder'>
                                <FontAwesome
                                    name="image "
                                    style={{fontSize: '85px', color: '#f0f3f7', padding: '50px'}}/>

                            </div>
                            <label htmlFor="formEditImage">
                                <FontAwesome
                                    name="link"
                                    style={{
                                        fontSize: '21px',
                                        color: '#f0f3f7',
                                        padding: '7px 10px',
                                        cursor: 'pointer',

                                    }}/>
                            </label>
                            <input id='formEditImage' name=' formEditImage' type="text" placeholder="Вставьте ссылку"
                                   defaultValue={this.props.img}
                                   ref={this.setNewImgRef}/>


                        </div>
                        <div className='col-sm-8'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <label htmlFor="formEditQuantity"><b>Колличество:</b></label>
                                    <input id='formEditQuantity' name=' formEditQuantity' type="number" placeholder="Количество"
                                           defaultValue={this.props.quantity}
                                           ref={this.setNewQuantityRef}/>
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor="formEditPrice"><b>Цена:</b></label>
                                    <input id='formEditPrice' name=' formEditPrice' type="text" placeholder="Цена"
                                           defaultValue={this.props.price}
                                           ref={this.setNewPriceRef}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <label htmlFor="formCreateDescription"><b>Описание:</b></label>
                                    <textarea name="formCreateDescription" id="formCreateDescription" cols="30" placeholder="Опишите продукт"
                                              rows="5" defaultValue={this.props.description}
                                              ref={this.setNewDescriptionRef}>
                                </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default ProductCard