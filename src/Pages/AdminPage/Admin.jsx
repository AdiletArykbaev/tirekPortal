import React from 'react';
import styles from "./styles.module.scss"
import{useState, useRef, useCallback}from 'react';
import axios from '../../Requests/axios';
const Admin = () => {
    const [text,setText] = useState("")
    const [ loading, setLoading ] = useState(false);
    const [file,setFile] = useState([])
    const POST_URL =  "/admin/post"
    const token = localStorage.getItem("token")
    const [title,setTitle] = useState("")
    const handlerSubmit = ()=>{
      axios.post(POST_URL,{
        authenticated:true,
        token:token,
        file:file,
        createPostToDo:{
          discription:text, 
          head: title,
          youTubeLink:""
       }
      }
        )
    }
  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handlerSubmit()
      }}>
          <h1 className={styles.title}>Admin Panel</h1>
           <input onChange={(e)=>{
              setTitle(e.target.value)
           }} type="text" placeholder='title' />
            <textarea onChange={(e)=>{
              setText(e.target.value)
            }} name="body" id="" cols="30" rows="10">
            </textarea>
            

            <input type="file"  onChange={(e)=>{
              console.log(file)
             setFile(e.target.files[0])
            }}/>

            <button type="submit" className={styles.addBlog}>добавить блок</button>
      </form>
    
    </div>
  )
}

export default Admin