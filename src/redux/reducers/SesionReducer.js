import {SESSION_STATE } from "../types/Types"


const defaultstate={
    session:false
}
const SesionReducer=(state=defaultstate,action)=>{
    switch(action.type){
        case SESSION_STATE:
            return{
                ...state,
                session:action.payload
            }
       
        default:
            return state
    }
}
export default SesionReducer;