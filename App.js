import React from 'react';
import { TabNavigation } from './Navigation/TabNavigation';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  // const Stack = createNativeStackNavigator();



  return (
    // <NavigationLeft/>
    <Provider store={store}>
    <TabNavigation/>
    </Provider>
  );
}


