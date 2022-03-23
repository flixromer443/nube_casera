import { CHANGE_HEADER } from "../types/Types"


const defaultstate={
    nombre:"Home",
    displayAddButton:false
}
const NameOfPage=(state=defaultstate,action)=>{
    switch(action.type){
        case CHANGE_HEADER:
            return{
                ...state,
                nombre:action.payload1,
                displayAddButton:action.payload2
            }
        default:
            return state
    }
}
export default NameOfPage;