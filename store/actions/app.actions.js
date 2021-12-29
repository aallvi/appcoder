export const FAVORITE = 'FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const LOAD_FAVS = 'LOAD_FAVS'
import { URL_API } from "../../database"
import { insertFavs,fetchFavs, deleteFa } from "../../db/index"

export const favorite = (title,copyright,date,explanation,url) => {
    return async (dispatch,getState) => {
         
         try {

            // console.log('hola')
            const result = await insertFavs(title,copyright,date,explanation,url);
           
            const {uid} = getState().name

            const response = await fetch(`${URL_API}/${uid}/favorites.json`,{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    fav: title,copyright,date,explanation,url
                })
            })
            const resp= await response.json()
            console.log(resp)


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

export const deleteFav = (x) => {

    return async dispatch => {
      
        try {
            
            const result = await deleteFa(x)
            console.log('resultdelete',result)

            dispatch({
                type: DELETE_FAVORITE,
                payload: x
            });

        } catch (error) {

            console.log(err);
             throw err;
            
        }

       

    }
}

export const loadFavs = () => {
    return async (dispatch,getState) => {
        try {
        //    console.log('hola')
            const {uid} = getState().name

            const response = await fetch(`${URL_API}${uid}.json`)
            const resp = await response.json()
            console.log('respuestafavvv',resp.favorites)

           const arr = Object.values(resp.favorites)
           console.log('objArr',arr)

            const result =await fetchFavs() 
            console.log('favoloaded',result.rows._array)

            dispatch({
                type:LOAD_FAVS,
                payload: arr
                // payload: result.rows._array
            })

            







            
        } catch (error) {
            console.log(err)
            throw err
            
        }
    }
}