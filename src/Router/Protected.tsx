import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}

const  Protected=(props:any) =>{

  const auth=useAuth()
  console.log('in protected', auth)

  return auth?<Outlet/>: <Navigate to="/login"/>
}

export default Protected;