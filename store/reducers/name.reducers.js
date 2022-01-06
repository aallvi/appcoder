import { LOG_OUT, SIGN_IN, SIGN_UP, INVITADO, CLEAN_REGISTER} from "../actions/name.actions";


const initialState = {
    num: 1,
    token: null,
    userId: null,
    registrado: false,
    logeado: false,
    uid:null,
    data:null,
    dataRegister:null
 
}


const nameReducer = (state=initialState,action) => {

    switch (action.type) {
       
        case SIGN_UP:
            return{
                ...state,
               token: action.token,
               userId: action.userId,
               registrado: action.register,
               dataRegister:action.dataRegister
                
            }
        case SIGN_IN:
            return{
                ...state,
               logeado: action.logeado,
               uid: action.idUser,
               data: action.data
                
            }
        case LOG_OUT:
            return{
                ...state,
               logeado: action.payload,
               uid: null
                
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
        case CLEAN_REGISTER:
            return{
                ...state,
               registrado: action.payload
                
            }
       
            
        default:
            break;
    }

    return state;
}



export default nameReducer