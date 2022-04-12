import { LOGIN_SUCCES, LOGIN} from "../types"
const initialState = {
    auth:false,
    token:"token"
}



export  const loginReducer = (state=initialState,action)=>{
        switch(action.type){
            case LOGIN:
                return {
                    ...state,
                    userData:{},
                   
                }
            case LOGIN_SUCCES:
                
            default:
              return state
        }
}