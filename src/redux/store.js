import { configureStore,combineReducers,createStore } from '@reduxjs/toolkit'
import NameOfPage from './reducers/NameOfPage';

const reducer=combineReducers({
    NameOfPage    
})


const Store=createStore(reducer)
export default Store;