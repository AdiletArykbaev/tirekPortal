import React from 'react'
import {Navigate,useLocation} from "react-router-dom"

const PrivateRoute = ({auth,children}) => {
  const location = useLocation();
  if(!auth){
    return <Navigate to="/login" state={{from:location}}/>
  }
  return children
}

export default PrivateRoute