import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className="max-w-[1280px] mx-auto"><RouterProvider router={router} /></div> 
  </React.StrictMode>,
)