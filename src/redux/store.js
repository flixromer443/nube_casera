import {combineReducers,createStore } from '@reduxjs/toolkit'
import NameOfPage from './reducers/NameOfPage';
import SesionReducer from './reducers/SesionReducer';
import AcountFormsReducer from './reducers/AcountFormsReducer';
const reducer=combineReducers({
    NameOfPage,
    SesionReducer,
    AcountFormsReducer
    
       
})


const Store=createStore(reducer)
export default Store;