import { SIGN_IN_URL, SIGN_UP_URL } from "../../database";

export const SUMA = 'SUMA';
export const RESTA = 'RESTA'
export const AUMENTAR_EN = 'AUMENTAR_EN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'



export const logout = () => ({
    type: LOG_OUT,
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
               console.log(data)
              dispatch({
                  type: SIGN_UP,
                  token: data.idToken,
                  userId: data.localId
              })

              
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
            //    console.log(data.registered)
              dispatch({
                  type: SIGN_IN,
                  logeado: data.registered,
                 
              })

              
          } catch (error) {

            console.log(error.message)
              
          }
    }
 

    // type: SIGN_UP,
    // payload: x
}

