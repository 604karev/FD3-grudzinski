let selectedProductCode = null;

export default function internetShop(state = selectedProductCode, action) {
    console.log(state);
    if (action.type === 'SELECTED_PRODUCT') {
        return state = action.id
    }
    return state
}