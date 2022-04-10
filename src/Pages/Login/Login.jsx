import React from 'react'
import styles from "./styles.module.scss"
import { useState,useEffect,useRef} from 'react'
import axios from '../../Requests/axios'

const Login = () => {
 const userRef = useRef(null);
 const errRef = useRef()
 const [login,setLogin] = useState("")
 const [password,setPassword] = useState("")
 const [errMsg,setErrMsg] = useState("")
 const [success,setSuccess] = useState(false)
 const LOGIN_URL = "/login"
 useEffect(()=>{
   userRef.current.focus();
 },[])
 useEffect(()=>{
   setErrMsg("")
 },[login,password])
 

 const handlerSubmit = async(e)=>{
   e.preventDefault()
  try{
    const response = await axios.post(LOGIN_URL,
        JSON.stringify({login,password}),
        {
          headers:{"Content-Type":"application/json"}
        }
      )
     console.log(JSON.stringify(response?.data))
  }catch(e){
    console.log(e)
  }
 }
 return (
    <div className={styles.wrapper}>
      <p ref={errRef} className={errMsg?"errmsg":"offscreen"}>{errMsg}</p>
      <div className={styles.content_wrapper}>
        <form onSubmit={handlerSubmit}>
          <input ref={userRef} onChange={(e)=>{
            setLogin(e.target.value)
          }} placeholder='имя пользывателя' type="login" />
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder='пароль' type="password" />
          <button type='submit'> войти</button>
        </form>
     </div>
       
    </div>
  )
}

export default Login