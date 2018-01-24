const washer = require('../img/Washer.jpg');
const vacuum = require('../img/vacuum.jpg');
const iron = require('../img/iron.jpg');
const shopData = [
    {
        id: 1,
        name: 'Стиральная машина',
        price: '344 р.',
        img: washer,
        quantity: 334,
    },
    {
        id: 2,
        name: 'Пылесос',
        price: '104 р.',
        img: vacuum,
        quantity: 100,
    },
    {
        id: 3,
        name: 'Утюг',
        price: '54 р.',
        img: iron,
        quantity: 558,
    }];

export default function internetShop(state = shopData, action) {
    if (action.type === 'ADD_ROW') {
        return [
            ...state, {
                id: action.id,
                name: action.name,
                img: action.img,
                price: action.price,
                quantity: action.quantity
            }
        ];
    } else if (action.type === 'REMOVE_ROW') {
        return [
            ...state.filter(
                (data) => {
                    return data.id !== action.id
                })

        ];
    } else if (action.type === 'SAVE_EDIT_ROW') {
        return [
            ...state.map(
                (data) => {
                    if (data.id === action.id) {
                        data.name = action.name;
                        data.quantity = action.quantity;
                        data.img = action.img;
                        data.price = action.price;
                    }
                    return data;
                })


        ];
    }
    return state
}