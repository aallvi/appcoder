export const FAVORITE = 'FAVORITE'
export const FAVORITE_OFFLINE = 'FAVORITE_OFFLINE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const LOAD_FAVS = 'LOAD_FAVS'
export const LOAD_FAVS_OFFLINE = 'LOAD_FAVS_OFFLINE'
export const RESET_FAV = 'RESET_FAV'
import { URL_API } from "../../database"
import { insertFavs,fetchFavs, deleteFa } from "../../db/index"



export const resetFav = () => ({
    type: RESET_FAV,
    payload: [],
    
})

export const favorite = (title,copyright,date,explanation,url) => {
    return async (dispatch,getState) => {
         
         try {
           
            // console.log('hola')
            // const result = await insertFavs(title,copyright,date,explanation,url);
           
            const {uid} = getState().name

            const response = await fetch(`${URL_API}${uid}/favorites.json`,{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    fav: title,copyright,date,explanation,url
                })
            })
            const resp= await response.json()
            console.log('sera?',resp.name)
            const id = resp.name

            

            // if(resp.name === String){
                dispatch({
                    type: FAVORITE,
                    payload: title,
                    copyright,
                    date,
                    explanation,
                    url,
                    
                });


            // }

            
            // console.log('result',result)
            

         } catch(err) {

             console.log(err);
             throw err;
         }

        
    }

}
export const favoriteOffline = (title,copyright,date,explanation,url) => {
    return async (dispatch,getState) => {
         
         try {
           
            // console.log('hola')
            const result = await insertFavs(title,copyright,date,explanation,url);


            dispatch({
                type: FAVORITE_OFFLINE,
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

            console.log(error);
             throw error;
            
        }

    }
}
export const deleteFavOnline = (x) => {

    return async (dispatch,getState)  => {
      
        try {
            const {uid} = getState().name
         console.log('hola')
            const response = await fetch(`${URL_API}${uid}/favorites/${x.id}.json`,{
                method: 'DELETE',
               
            })
            // const resp= await response.json()
            console.log(response)
        
            dispatch({
                type: DELETE_FAVORITE,
                payload: x
            });

        } catch (error) {

            console.log(error);
             throw error;
            
        }

    }
}

export const loadFavs = () => {
    return async (dispatch,getState) => {
        try {
        //    console.log('hola')
            const {uid} = getState().name
            // console.log('qemierda',uid)

            const response = await fetch(`${URL_API}${uid}.json`)
            const resp = await response.json()
            
            // const ids = resp[Object.keys(resp)[0]]
            // console.log('ids',ids)
            // console.log('respuestafavvv',resp.favorites)

           const key = Object.keys(resp.favorites)
        //   console.log('hey',key)
          
    
           const arr = Object.values(resp.favorites)

           for (let n = 0; n < key.length; n++) {
            arr[n].fav.id =key[n];
              
          }

          console.log('objArr',arr)

            // const result =await fetchFavs() 
            // console.log('favoloaded',result.rows._array)
                dispatch({
                    type:LOAD_FAVS,
                    payload: arr,
                    // payload: result.rows._array
                })
           
            
                // dispatch({
                //     type:LOAD_FAVS,
                //     // payload: arr
                //     payload: result.rows._array
                // })

            
        } catch (error) {
            console.log(error)
            throw error
            
        }
    }
}

export const loadFavsOffline = () => {
    return async (dispatch,getState) => {
        try {
        //    console.log('hola')
            const {uid} = getState().name
console.log('olidafavoffline')
            // const response = await fetch(`${URL_API}${uid}.json`)
            // const resp = await response.json()
            // console.log('respuestafavvv',resp.favorites)

        //    const arr = Object.values(resp.favorites)
        //    console.log('objArr',arr)

            const result =await fetchFavs() 
    console.log('result',result)
           
            
                dispatch({
                    type:LOAD_FAVS_OFFLINE,
                    // payload: arr
                    payload: result.rows._array
                })

            
        } catch (error) {
            console.log(error)
            throw error
            
        }
    }
}