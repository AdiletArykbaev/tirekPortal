import axios from "./axios"
const LOGIN_URL = "/login"
  
export  const handlerSubmit = async(username,password)=>{
   try{
     const response = await axios.post(LOGIN_URL,
         JSON.stringify({username,password}),
         {
           headers:{"Content-Type":"application/json"}
         }
       )
      console.log(JSON.stringify(response?.data))
   
      
   }catch(e){
     console.log(e)
   }
  }