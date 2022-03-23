import {DIPLAY_LOGIN_FORM, DIPLAY_REGISTER_FORM} from "../types/Types"


const defaultstate={
    form:true,
}
const AcountFormsReducer=(state=defaultstate,action)=>{
    switch(action.type){
        case DIPLAY_LOGIN_FORM:
            return{
                ...state,
                form:true
            }
        case DIPLAY_REGISTER_FORM:
            return{
                ...state,
                form:false
            }
            
        default:
            return state
    }
}
export default AcountFormsReducer;