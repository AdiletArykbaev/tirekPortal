import React from 'react'
import styles from "./styles.module.scss"
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { axios } from 'axios';
const Admin = () => {
  const url = `https://tirek-backend.herokuapp.com`
  const {register,handleSubmit} = useForm()

  const [data,setData] = useState("")

  const [token,setToken] = useState("")
  const [post,setPost] = useState()
  function auth(url,body){
    axios.post(url,body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    

  
  return (
    <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <form  onSubmit={()=>{
            auth(`${url}/login`,data)
          } }>
            <input {
                ...register("Login",{
                  required:"поле обязательно к заполнению"
                })

            } type="text" />
            <input 
            {
              ...register("password",{
                required:"поле обязательно к заполнению"
              })

          }
            type="password" />
            <input onSubmit={handleSubmit((data)=>setData(data) )} type='submit'/>
          </form>
          
        </div>
          
    </div>
  )
}

export default Admin