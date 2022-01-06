import { useSelector } from "react-redux";
import { SIGN_IN_URL, SIGN_UP_URL, URL_API } from "../../database";


export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'
export const INVITADO = 'INVITADO'
export const CLEAN_REGISTER = 'CLEAN_REGISTER'



export const logout = () => ({
    type: LOG_OUT,
    payload: false,
    
})

export const invitado = () => ({
    type: INVITADO,
    payload: true
})
export const clean = () => ({
    type: CLEAN_REGISTER,
    payload: false
})



export const signUp = (email,password) => {

    return async dispatch =>{
          try {
              const response = await fetch(SIGN_UP_URL,{
                  method: 'POST',
                  header: {
                      'Content-Type': 'application/json'

                  },
                  body: JSON.stringify({
                      email,password,
                      returnSecureToken: true
                  }),

              })
              const data = await response.json()
              
              if(data.error){

                dispatch({
                    type: SIGN_UP,
                    token: data.idToken,
                    userId: data.localId,
                    register:false,
                    dataRegister: data
                })



              }else {

                dispatch({
                    type: SIGN_UP,
                    token: data.idToken,
                    userId: data.localId,
                    register:true,
                    
                })



              }

               


              
            //    console.log(data)
              

              
          } catch (error) {

            console.log(error.message)
              
          }
    }
 

    // type: SIGN_UP,
    // payload: x
}

export const signIn = (email,password) => {

    return async dispatch =>{
          try {
              const response = await fetch(SIGN_IN_URL,{
                  method: 'POST',
                  header: {
                      'Content-Type': 'application/json'

                  },
                  body: JSON.stringify({
                      email,password,
                      returnSecureToken: true
                  }),

              })

              const data = await response.json()
            //   console.log(data)
            //    console.log(data.registered)
            if(data.error){

                dispatch({
                    type: SIGN_IN,
                    logeado: data.registered,
                    idUser: data.localId,
                    data:data
                    
                })

            }else {

                dispatch({
                    type: SIGN_IN,
                    logeado: data.registered,
                    idUser: data.localId,
                
                    
                })

            }
              

              
          } catch (error) {

            console.log(error.message)
              
          }
    }
 

    // type: SIGN_UP,
    // payload: x
}

