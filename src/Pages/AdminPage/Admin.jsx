import React from 'react';
import styles from "./styles.module.scss"
import{useState, useRef, useCallback}from 'react';
import axios from '../../Requests/axios';
const Admin = () => {
    const fileRef = useRef(null);
    const [text,setText] = useState("")
    const [ loading, setLoading ] = useState(false);
    const POST_URL =  "/admin/post"
    const [title,setTitle] = useState("")
    
  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e)=>{
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
              console.log(e.files)
            }}/>

            <button className={styles.addBlog}>добавить блок</button>
      </form>
    
    </div>
  )
}

export default Admin