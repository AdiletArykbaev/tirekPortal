import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import combineReducers from "./Reducers/index"



const middleware = [thunk];
const store = createStore(combineReducers);

export default store