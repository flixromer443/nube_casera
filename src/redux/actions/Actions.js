import {CHANGE_HEADER,SESSION_STATE} from "../types/Types"

export const change=(data,button)=>{
    return{
        type:CHANGE_HEADER,
        payload1:data,
        payload2:button
    }
}
export const sessionState=(data)=>{
    console.log(data)
    return{
        type:SESSION_STATE,
        payload:data,
    }
}

