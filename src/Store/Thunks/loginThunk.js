import {login,newsPost} from "../../Requests/request";
import { LOGIN_SUCCES,ADD_NEWS} from "../types";

export const loginFetch = (username,password)=>{
    return (dispatch)=>{
       const response = login(username,password)
       dispatch({type:LOGIN_SUCCES,token:response,isAuth:true})
    }
}
