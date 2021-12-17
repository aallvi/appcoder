import { LOG_OUT, SIGN_IN, SIGN_UP, INVITADO} from "../actions/name.actions";


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
        case LOG_OUT:
            return{
                ...state,
               logeado: action.payload
                
            }
            
        case INVITADO:
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