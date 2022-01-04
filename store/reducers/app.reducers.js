import Favoritos from "../../models/Favoritos";
import { FAVORITE,DELETE_FAVORITE, LOAD_FAVS, LOAD_FAVS_OFFLINE, FAVORITE_OFFLINE, RESET_FAV} from "../actions/app.actions";

const initialState = {
   
favoritos: []
 
}


const appreducer = (state=initialState,action) => {

    switch (action.type) {
       
        case FAVORITE:
            return{
                ...state,
               favoritos: [...state.favoritos,action.payload]
              
                
            }
        case FAVORITE_OFFLINE:
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
                   favs.fav.url,
                   favs.fav.id
               )),
              
              
                
            }
        case LOAD_FAVS_OFFLINE:
            return{
                ...state,
               favoritos: action.payload.map(favs => new Favoritos(
                   favs.title,
                   favs.copyright,
                   favs.date,
                   favs.explanation,
                   favs.url,
                //    favs.id=Date.now()
               ))
              
                
            }
        case RESET_FAV:
            return{
                ...state,
               favoritos: action.payload
                //    favs.id=Date.now()
             
            
            }
            
        default:
            break;
    }

    return state;
}



export default appreducer