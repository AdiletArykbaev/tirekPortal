import { GET_LOGIN } from "../types"
const initialState = {
    loginValue : "имя пользователя",
    password:"пароль"
}

const loginReducer = (state=initialState,action)=>{
        switch(action.type){
            case GET_LOGIN:
               return state.loginValue
            
            default:
              return state
        }
}