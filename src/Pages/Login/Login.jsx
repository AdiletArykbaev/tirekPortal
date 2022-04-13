import React from 'react'
import styles from "./styles.module.scss"
import { useState,useEffect,useRef} from 'react'
import axios from '../../Requests/axios'
import { useNavigate} from "react-router-dom"
import { connect } from 'react-redux'
import { loginSuccess } from '../../Store/Actions/AuthActions'

const Login = ({state,dispatch}) => {
 const userRef = useRef(null);
 const errRef = useRef()
 const [username,setUsername] = useState("")
 const [password,setPassword] = useState("")
 const [errMsg,setErrMsg] = useState("")
 const [success,setSuccess] = useState(false)

 const LOGIN_URL = "/login"
 const navigate = useNavigate()
 useEffect(()=>{
   userRef.current.focus();
 },[])
 useEffect(()=>{
   setErrMsg("")
 },[username,password])
 


const handlerSubmit = async(e)=>{
   e.preventDefault()
  try{
    const response = await axios.post(LOGIN_URL,
        JSON.stringify({username,password}),
        {
          headers:{"Content-Type":"application/json"}
        }
      )
     console.log(JSON.stringify(response?.data))
     setSuccess(true)
     loginSuccess()
  }catch(e){
    console.log(e)
  }
 }
 if(success === true){
  navigate("/admin")

 }
 return (
    <div className={styles.wrapper}>
      <p ref={errRef} className={errMsg?"errmsg":"offscreen"}>{errMsg}</p>
      <div className={styles.content_wrapper}>
        <form onSubmit={handlerSubmit}>
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

const mapStateToProps = (state)=>({
  auth:state.auth
})

const mapDispatchToProps = {
  loginSuccess
} 
export default connect(mapStateToProps,mapDispatchToProps)(Login)