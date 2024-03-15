import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Contacts from '../pages/contact/Contacts'
import AppLayout from './layout/AppLayout';
import ProductsList from '../pages/product/Products';
import AuthLayout from './layout/AuthLayout';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Protected from './layout/Protected'
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import HomeDashboard from '../pages/dashbord/home/Dashboard'
import DashboardLayout from './layout/DashboardLayout';
import Users from '../pages/dashbord/users/Users';
import Products from '../pages/dashbord/products/Products';
import Success from '../pages/success/Success';
import Fail from '../pages/fail/Fail';
import Orders from '../pages/order/Orders';
import Adrress from '../pages/address/Adrress';
export const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/success',
                element:<Success/>
            },
            {
                path:'/failed',
                element:<Fail/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/contacts',
                element:<Contacts/>
            },
            {
                path:'/products',
                element:<ProductsList/>
            },
            {
                path:'/auth',
                element:<AuthLayout/>,
                children:[
                    {
                        path:'/auth/login',
                        element:<Login/>
                    },        
                    {
                        path:'/auth/register',
                        element:<Register/>
                    },        
                ]
            },
            {
              path:'/',
              element:<Protected/>,
              children:[
                  {
                path:'/cart',
                element:<Cart/>
                 },
                  {
                path:'/address',
                element:<Adrress/>
                 },
              ] 
            }
        ]
    },
    {
        path:'/',
        element:<Protected/>,
        children:[
            {
                path:'/',
                element:<AppLayout/>,
                children:[
                     {
                path:'/checkout',
                element:<Checkout/>
            },
              {
                path:'/orders',
                element:<Orders/>
            },
                ]
            },
           
            {
                path:'/dashboard',
                element:<DashboardLayout/>,
                children:[
                    {
                        path:'/dashboard',
                        element:<HomeDashboard/>
                    },
                    {
                        path:'/dashboard/users',
                        element:<Users/>
                    },
                    {
                        path:'/dashboard/products',
                        element:<Products/>
                    },
                ]
            }
        ]
    }
])
