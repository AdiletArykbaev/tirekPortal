import api from "./axios"
const LOGIN_URL = "/login"
const CREATE_POST_URL = "/admin/post"
const GET_NEWS_URL = "/admin/post/getAll"


export const login = async (username,password)=>{
  const response = await api.post(LOGIN_URL,{
    username,
    password
  })
  return response.data
}

export const newsPost = async (file,postBody)=>{
  const response = await api.post(CREATE_POST_URL,{
    file,
    postBody
  })
  return response
}
export const getNews = async ()=>{
  const response = await api.get(GET_NEWS_URL)
  return response
}