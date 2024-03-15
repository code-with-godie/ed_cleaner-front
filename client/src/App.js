import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import Toast from './components/model/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './context/userSlice';
// import "./styles/global.scss";
// import { useAppContext } from './context/AppContext';
const App = () => {
  const {showToast} = useSelector(state => state.app);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])
  return (
    <>
    <RouterProvider router={router} />
    {showToast && <Toast  />}
    </>
  )
}

export default App