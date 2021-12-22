import React from 'react';
import { TabNavigation } from './Navigation/TabNavigation';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import { Isloged } from './Navigation/Isloged';
import {init} from './db'

init()
   .then(() => (console.log('db initialized'))
     .catch(err => {
       console.log('database failed connect')
       console.log(err)
     })
       )

export default function App() {

  

  return (
    // <NavigationLeft/>
    <Provider store={store}>

    <Isloged/>

    {/* <TabNavigation/> */}
    </Provider>
  );
}


