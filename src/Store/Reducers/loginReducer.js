import { LOGIN_SUCCES, LOGIN} from "../types"
const initialState = {
    isAuth:false,
    token:"token"
}



export  const loginReducer = (state=initialState,action)=>{
        switch(action.type){
            case LOGIN_SUCCES:
                const token = action.token;
                state.token = token 
                state.isAuth = true
                return state
               
            
            default:
              return state
        }
}