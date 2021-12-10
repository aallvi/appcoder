import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import nameReducer from "./reducers/name.reducers";

const RootReducer = combineReducers({
    name: nameReducer,
   
})

export default createStore(RootReducer, applyMiddleware(thunk))