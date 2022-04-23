import {createStore,combineReducers} from 'redux'
import transReducer from '../reducer/transReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        transactions:transReducer
    }))
    return store
}

export default configureStore