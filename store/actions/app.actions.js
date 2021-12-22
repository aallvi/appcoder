export const FAVORITE = 'FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const LOAD_FAVS = 'LOAD_FAVS'
import { insertFavs,fetchFavs } from "../../db/index"

export const favorite = (title,copyright,date,explanation,url) => {
    return async dispatch => {
         
         try {
            console.log('hola')
            const result = await insertFavs(title,copyright,date,explanation,url);
            

            dispatch({
                type: FAVORITE,
                payload: title,
                copyright,
                date,
                explanation,
                url
            });
            console.log('result',result)
            

         } catch(err) {

             console.log(err);
             throw err;
         }

        
    }

}

export const deleteFav = (x) => ({
    type: DELETE_FAVORITE,
    payload: x
})
// export const favorite = (title,copyright,date,explanation,url) => ({
//     type: FAVORITE,
//     payload: title,copyright,date,explanation,url
// })

export const loadFavs = () => {
    return async dispatch => {
        try {

            const result =await fetchFavs() 
            console.log('favoloaded',result.rows._array)

            dispatch({
                type:LOAD_FAVS,
                payload: result.rows._array
            })
            
        } catch (error) {
            console.log(err)
            throw err
            
        }
    }
}