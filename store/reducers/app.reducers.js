import Favoritos from "../../models/Favoritos";
import { FAVORITE,DELETE_FAVORITE, LOAD_FAVS} from "../actions/app.actions";

const initialState = {
   
favoritos: [{title:null,copyright:null,date:null,explanation:null,url:null}]
 
}


const appreducer = (state=initialState,action) => {

    switch (action.type) {
       
        case FAVORITE:
            return{
                ...state,
               favoritos: [...state.favoritos,action.payload]
              
                
            }
        case DELETE_FAVORITE:
            return{
                ...state,
               favoritos: state.favoritos.filter(fav => fav.title != action.payload.title)
              
                
            }
        case LOAD_FAVS:
            return{
                ...state,
               favoritos: action.payload.map(favs => new Favoritos(
                   favs.fav.title,
                   favs.fav.copyright,
                   favs.fav.date,
                   favs.fav.explanation,
                   favs.fav.url
               ))
              
                
            }
            
        default:
            break;
    }

    return state;
}



export default appreducer