import { LOGIN_SUCCES,LOGIN } from "../types"
export const login = (loginData)=>({
    type:LOGIN,
    ...loginData
})
export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCES,
    userData
})
