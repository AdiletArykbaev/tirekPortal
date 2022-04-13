import React from 'react';
import styles from "./styles.module.scss"
import{useState, useRef, useCallback}from 'react';
import axios from '../../Requests/axios';
const Admin = () => {
    const [text,setText] = useState("")
    const [ loading, setLoading ] = useState(false);
    const POST_URL =  "/admin/post"
    const [title,setTitle] = useState("")
    const [drag,setDrag] = useState(true)

    const handlerSumbit = async (e)=>{
        e.preventDefault()
        const response = await axios.post(POST_URL,
          JSON.stringify({
            authenticated:true,
            createPostTodo:{
              head:title,disctiption:text, youtubeLink:""
            }
            }),
          {
            headers:{"Content-Type":"application/json"}
          }
        )
        console.log(response)
    }

    function dragStartHandler(e){
      e.preventDefault()
      setDrag(true)
    }
    function dragLeaveHandler(e){
      e.preventDefault()
      setDrag(false)
    }
    function dragDropHandler(e){
      e.preventDefault()
      let files = [...e.dataTransfer.files]
      console.log(files)

    }
  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e)=>{
        handlerSumbit(e)
      }}>
          <h1 className={styles.title}>Admin Panel</h1>
           <input onChange={(e)=>{
              setTitle(e.target.value)
           }} type="text" placeholder='title' />
            <textarea onChange={(e)=>{
              setText(e.target.value)
            }} name="body" id="" cols="30" rows="10">
            
            </textarea>
            <div className={styles.drag}>
              Перетащите сюда{
                drag? <div> Отпустите файл</div>:
                <div onDragStart={(e)=>dragStartHandler(e)}
                    onDragLeave = {(e)=>dragLeaveHandler(e)}
                    onDragOver = {(e)=>dragStartHandler(e)}
                    onDrop={(e)=>dragDropHandler(e)}
               >
                   Перетащите файл 
                </div>
              }
            </div>

            <button className={styles.addBlog}>добавить блок</button>
      </form>
    
    </div>
  )
}

export default Admin