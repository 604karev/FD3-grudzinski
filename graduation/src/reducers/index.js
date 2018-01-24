import {combineReducers} from 'redux';
import shopData from './shopData';
import selectedProductCode from './selectedPropuctCode';
import workMode from './workMode';

export default combineReducers({
    shopData,
    selectedProductCode,
    workMode
})