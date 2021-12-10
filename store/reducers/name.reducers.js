import {AUMENTAR_EN, LOG_OUT, RESTA, SIGN_IN, SIGN_UP, SUMA} from "../actions/name.actions";


const initialState = {
    num: 1,
    token: null,
    userId: null,
    registrado: false,
    logeado: false
    
}


const nameReducer = (state=initialState,action) => {

    switch (action.type) {
       
        case SIGN_UP:
            return{
                ...state,
               token: action.token,
               userId: action.userId,
               registrado: true
                
            }
        case SIGN_IN:
            return{
                ...state,
               logeado: action.logeado
                
            }
        case LOG_OUT:
            return{
                ...state,
               logeado: action.payload
                
            }
            
            
        default:
            break;
    }

    return state;
}



export default nameReducer