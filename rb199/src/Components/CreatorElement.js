import React, {Component} from 'react';
import './CreatorElement.css'

class CreatorElement extends Component {

    render() {
        return (
            <div className='element'>
                <img src={this.props.item.img} alt={this.props.item.name}/>
                <div><b>{this.props.item.name}</b></div>
                <div>Количество: {this.props.item.quantity}</div>
                <div>Цена: {this.props.item.price}</div>
            </div>
        )


    }

}

export default CreatorElement