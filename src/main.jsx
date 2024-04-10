import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from './components/Signup.jsx';
import CreateProfile from './components/CreateProfile.jsx';
import Select from './components/Select.jsx';
import EmailPage from './components/EmailPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Signup/>
      },
      {
        path:"/createProfile",
        element:<CreateProfile/>
      },{
        path:"/select",
        element:<Select/>
      },{
        path:"/email",
        element:<EmailPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
