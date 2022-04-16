import {login,newsPost} from "../../Requests/request";
import { LOGIN_SUCCES,ADD_NEWS} from "../types";

export const loginFetch =  async(username,password)=>{
    return (dispatch)=>{
        let res;
        const postData = login(username,password).then(response =>{
            res = response

        })
        dispatch({type:LOGIN_SUCCES,token:res,isAuth:true})


     }
}
