import {AUMENTAR_EN, RESTA, SUMA} from "../actions/name.actions";


const initialState = {
    num: 1,
    
    
}


const nameReducer = (state=initialState,action) => {

    switch (action.type) {
        case SUMA:
            return{
                ...state,
               num: state.num + action.payload
                
            }
        case RESTA:
            return{
                ...state,
               num: state.num - action.payload
                
            }
        case AUMENTAR_EN:
            return{
                ...state,
               num: state.num + action.payload
                
            }
            
            
        default:
            break;
    }

    return state;
}



export default nameReducer