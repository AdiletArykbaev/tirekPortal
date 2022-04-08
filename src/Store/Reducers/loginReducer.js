const initialState = {
    loginValue : "имя пользователя",
    password:"пароль"
}
const GET_LOGIN = "GET_LOGIN" 

const loginReducer = (state=initialState,action)=>{
        switch(action.type){
            case GET_LOGIN:
               return state

            default:
              return state
        }
}