import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { rootReducer } from "./Reducers/index";
import rootSaga from "./sagas/RootSaga";
import createSagaMiddleware from 'redux-saga';




const store = createStore(rootReducer)

export default store




