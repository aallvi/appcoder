import { createStore,combineReducers } from "redux";
import nameReducer from "./reducers/name.reducers";

const RootReducer = combineReducers({
    name: nameReducer,
   
})

export default createStore(RootReducer)