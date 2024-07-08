import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import TimeFieldPage from './pages/TimeFieldPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAsync, checkUserAsync, selectLoggedInUser, selectUserChecked } from './features/auth/authSlice';
import UserProfilePage from './pages/UserProfilePage';

const router = createBrowserRouter([
  
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/",
    element: <Protected><HomePage></HomePage></Protected> ,
  },
  {
    path: "/userprofile",
    element: <Protected><UserProfilePage></UserProfilePage></Protected> ,
  },
  {
    path: "/timefield",
    element: <TimeFieldPage></TimeFieldPage>,
  },
  {
    path: "*",
    element: <PageNotFoundPage></PageNotFoundPage>,
  },
])


function App() {


  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);
  
  useEffect(()=>{
    dispatch(checkUserAsync())
  },[]);
  
  // if(userChecked && user){
  //   dispatch(checkUserAsync())
  // }

  // useEffect(()=>{
    
  //   if(user){
  //     // dispatch(fetchItemsByUserIdAsync());
  //     // we can get req.user by token on backend so no need to give in front-end
  //     dispatch(fetchLoggedInUserAsync());
  //   }
  // },[dispatch , user]);


  return (
    <div className="App">


{/* {userChecked &&<RouterProvider router={router} />} */}

<RouterProvider router={router} />
    
    </div>
  );
}

export default App;
