import React from 'react';
import styles from "./styles.module.scss"
import{useState}from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../../Store/Thunks/newsThunk';
const Admin = () => {
    const [text,setText] = useState("")
    const [file,setFile] = useState([])
    const [title,setTitle] = useState("")
    const dispatch = useDispatch()
    const test = []
  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addNews(test,title,text))
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