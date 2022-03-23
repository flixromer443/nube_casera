import {SESSION_START,SESSION_DESTROY } from "../types/Types"


const defaultstate={
    session:false,
    uid:'',
    username:'',
    password:'',
}
const SesionReducer=(state=defaultstate,action)=>{
    switch(action.type){
        case SESSION_START:
            return{
                ...state,
                session:action.payload.session,
                uid:action.payload.uid,
                username:action.payload.username,
                password:action.payload.password
            }
        case SESSION_DESTROY:
            return{
                ...state,
                session:false,
                uid:'',
                username:'',
                password:''
            }
        default:
            return state
    }
}
export default SesionReducer;