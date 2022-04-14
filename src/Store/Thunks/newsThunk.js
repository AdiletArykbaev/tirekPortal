import { newsPost,getNews } from "../../Requests/request"
import {ADD_NEWS,GET_ALL_NEWS} from "../types"
export const addNews = (file,head,title)=>{
    console.log(file,head,title)
    return (dispatch)=>{
        const response =  newsPost(file,{
            head,
            title
        })
        dispatch({type:ADD_NEWS,payload:response.status})
    }
}
export const getAllNews = ()=>{
    return (dispatch)=>{
        const response =  getNews()
        dispatch({type:GET_ALL_NEWS,data:response.data})
    }
}