import { CHANGE_HEADER } from "../types/Types"


const defaultstate={
    nombre:"Home"
}
const NameOfPage=(state=defaultstate,action)=>{
    switch(action.type){
        case CHANGE_HEADER:
            return{
                ...state,
                nombre:action.payload
            }
        default:
            return state
    }
}
export default NameOfPage;