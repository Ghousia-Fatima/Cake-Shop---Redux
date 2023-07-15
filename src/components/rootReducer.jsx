import {combineReducers} from 'redux';
import cakeReducer from './cakeReducer';



const RootReducer = combineReducers({
    cake: cakeReducer
})

export default RootReducer