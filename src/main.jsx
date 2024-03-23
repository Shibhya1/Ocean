import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './screens/Home.jsx';
import About from './screens/About.jsx';
import Programs from './screens/Programs.jsx';
import Contacts from './screens/Contacts.jsx';
import EduContent from './screens/EduContent.jsx';
import Dashboard from './screens/Dashboard.jsx';
import Mumbai from './screens/Mumbai';
// import Login from './screens/Login.jsx';
// import Signup from './screens/Signup';
// import MyOrder from './screens/MyOrder.jsx';
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Thane from './screens/Thane.jsx';
import Pune from './screens/Pune.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    children:[
      {
        path:"/",
        element:<Home/>
      }   ,
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/about",
        element:<About />
      }  ,
      {
        path:"/contacts",
        element:<Contacts />
      }   ,
      {
        path:"/Programs",
        element:<Programs/>
      }  ,
      {
        path:"/educontent",
        element:<EduContent />
      } ,
      {
        path:"/mumbai",
        element:<Mumbai />
      } ,
      {
        path:"/thane",
        element:<Thane />
      } ,
      {
        path:"/pune",
        element:<Pune />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)


//  {/* <RouterProvider router={router} /> */}