import { GET_LOGIN,GET_TOKEN} from "../types"
const initialState = {
    auth:false,
    token:"token"
}



export  const loginReducer = (state=initialState,action)=>{
        switch(action.type){
            case GET_LOGIN:
               return state.auth
            
            case GET_TOKEN:
                return state.token
            default:
              return state
        }
}