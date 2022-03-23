import {CHANGE_HEADER,
    SESSION_DESTROY,
    SESSION_START,
    DIPLAY_LOGIN_FORM,
    DIPLAY_REGISTER_FORM} from "../types/Types"

export const change=(data,button)=>{
    return{
        type:CHANGE_HEADER,
        payload1:data,
        payload2:button
    }
}
export const sessionStart=(data)=>{
    return{
        type:SESSION_START,
        payload:data,
    }
}
export const sessionDestroy=(data)=>{
    return{
        type:SESSION_DESTROY,
        payload:data,
    }
}
export const displayLoginForm=()=>{
    return{
        type:DIPLAY_LOGIN_FORM,
        payload:0,
    }
}
export const displayRegisterForm=()=>{
    return{
        type:DIPLAY_REGISTER_FORM,
        payload:1,
    }
}

