import { all, fork } from 'redux-saga/effects';
import auth from "./Auth"

export default function * rootSaga (){
    yield all(fork(auth))

}
