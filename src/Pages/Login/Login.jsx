import React from 'react'
import styles from "./styles.module.scss"
import { useState,useEffect,useRef} from 'react'
import { connect } from 'react-redux'
import { loginFetch } from '../../Store/Thunks/loginThunk'
import { useDispatch } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { login } from '../../Requests/request'
import { LOGIN_SUCCES } from '../../Store/types'

const Login = () => {
 const userRef = useRef(null);
 const errRef = useRef()
 const dispatch = useDispatch()
 const [username,setUsername] = useState("")
 const [password,setPassword] = useState("")
 const [errMsg,setErrMsg] = useState("")
 const state = useSelector(state =>state.auth)
 const navigate = useNavigate()
 useEffect(()=>{
   userRef.current.focus();
 },[])
 useEffect(()=>{
   setErrMsg("")
 },[username,password])
 
 const handlerSubmit=(e)=>{
   const fetchData =  login(username,password).then(response=>{
    console.log(response)
    localStorage.setItem("token", response.jwt)
  })

   navigate("/admin")

 
}


 return (
    <div className={styles.wrapper}>
      <p ref={errRef} className={errMsg?"errmsg":"offscreen"}>{errMsg}</p>
      <div className={styles.content_wrapper}>
        <form onSubmit={(e)=>{
          e.preventDefault()
          handlerSubmit()          
        
        }}>
          <input ref={userRef} onChange={(e)=>{
            setUsername(e.target.value)
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