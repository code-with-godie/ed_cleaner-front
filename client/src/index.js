import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { store } from './context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} >
       <LocalizationProvider dateAdapter={AdapterDayjs}>
       <Provider store={store}>
    {/* <AppContextProvider> */}
    <App />
    {/* </AppContextProvider> */}
       </Provider>
       </LocalizationProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
