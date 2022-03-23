import {combineReducers,createStore } from '@reduxjs/toolkit'
import NameOfPage from './reducers/NameOfPage';
import SesionReducer from './reducers/SesionReducer';
const reducer=combineReducers({
    NameOfPage,
    SesionReducer
       
})


const Store=createStore(reducer)
export default Store;