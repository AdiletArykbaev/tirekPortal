import { LOGIN_SUCCES,LOGIN } from "../types"

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCES,
    payload:payload
})
