import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userContextdata } from '../Context/Usercontext'
const ProtectedRoute = () => {
    const {userdetails} = useContext(userContextdata);
    if(!userdetails){
        return <Navigate to='/Login' replace/>;
      }

    return <Outlet/>;
  
}
export default ProtectedRoute
