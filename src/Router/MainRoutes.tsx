import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Protected from './Protected';
import PublicRoutes from './PublicRoutes';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Signup from '../pages/Signup/Signup';



const MainRoutes = () => ( 
 
      <Routes>
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        <Route path="/" element={<Protected/>}>
          <Route path="/" element={<Home/>}>     
          </Route>
        </Route>       
        <Route path="/login" element={<PublicRoutes/>}>
          <Route path="/login" element={<Login />}/>
        </Route>
        <Route path="/signup" element={<PublicRoutes/>}>
          <Route path="/signup" element={<Signup />}/>
        </Route>
      </Routes>

     
    )
    
    export default MainRoutes