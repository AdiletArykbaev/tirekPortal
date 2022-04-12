import { all, takeEvery, put } from 'redux-saga/effects';
import { handlerSubmit } from '../../Requests/Login';
import { login } from '../Actions/AuthActions';
import { loginSuccess } from '../Actions/AuthActions';
import { LOGIN } from '../types';
function * authSaga (action){
    const [username,password] = action
    try{
        const response = yield handlerSubmit({username:username ? username:password})
        const user = yield response.data
        yield put(loginSuccess({
            access: response.data.access_token,
            expiresIn: user.auth_time
        }))
    }
    catch(e){
        console.log(e)
    }
}

export default function * rootSaga(){
    yield all(
        takeEvery(LOGIN,authSaga)
    )
}