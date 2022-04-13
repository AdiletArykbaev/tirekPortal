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
    const handleSubmit = useCallback( event => {
      event.preventDefault();
  
      const fetchData = async (uint8Array) => {
        try {
          const response = await axios.post(
            {
              authenticated:true,
              file: [...uint8Array],
              createPostDto:{
                createPostDto:text,
                head:title,
                youtubeLink:""
              }
            }
            ,POST_URL,
        
            {
              headers:{"Content-Type":"application/json"}
            }
          )
  
          setLoading(false);
          console.log(response);
        } catch (e) {
          console.error(e.message, 'function handleSubmit')
        }
      };
  
      if(!fileRef.current) return void null;
  
      const reader = new FileReader();
      reader.onloadend = () => {
        const uint8Array = new Uint8Array(reader.result);
        setLoading(true);
      };
  
      reader.readAsArrayBuffer(fileRef.current[0]);
  
    }, [])
  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
          <h1 className={styles.title}>Admin Panel</h1>
           <input onChange={(e)=>{
              setTitle(e.target.value)
           }} type="text" placeholder='title' />
            <textarea onChange={(e)=>{
              setText(e.target.value)
            }} name="body" id="" cols="30" rows="10">
            
            </textarea>
            <input type="file"           accept="image/*"
 onChange={(e)=>{
                fileRef.current = e.target.value
            }} />
            <button className={styles.addBlog}>добавить блок</button>
      </form>
    
    </div>
  )
}

export default Admin