let workMode = 0;

export default function internetShop(state = workMode, action) {
    if (action.type === 'DEFAULT_WORK_MODE') {
        return state = 0;
    } else if (action.type === 'READ_WORK_MODE') {
        return state = 1;
    } else if (action.type === 'EDIT_WORK_MODE') {
        return state = 2;
    } else if (action.type === 'ADD_WORK_MODE') {
        return state = 3;
    }
    return state
}