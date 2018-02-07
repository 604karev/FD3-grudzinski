const shopData = [];

export default function internetShop(state = shopData, action) {
    console.log(state);
    if (action.type === 'ADD_ROW') {
        return [
            ...state, {
                id: action.id,
                name: action.name,
                img: action.img,
                price: action.price,
                quantity: action.quantity,
                category: action.category,
                description: action.description

            }
        ]

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
                        data.description = action.description
                    }
                    return data;
                })

        ];
    } else if (action.type === 'LOAD_DATA') {
        return [
            ...state = action.data

        ];
    }
    return state
}