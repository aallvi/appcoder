import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appreducer from "./reducers/app.reducers";
import nameReducer from "./reducers/name.reducers";
// import paginadorReducer from "./reducers/paginador.reducer";

const RootReducer = combineReducers({
    name: nameReducer,
    app: appreducer
})

export default createStore(RootReducer, applyMiddleware(thunk))