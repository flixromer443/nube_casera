import {CHANGE_HEADER} from "../types/Types"
export const change=(data)=>{
    
    return{
        type:CHANGE_HEADER,
        payload:data
    }
}
