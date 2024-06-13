import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Lading } from './components/Organims/Lading'
import ok from '../src/assets/ok.jpeg'

const router = createBrowserRouter ([
  {
    path: '/',
    element: 
    <div>
    <h1 className='font-bold text-5xl text-center mt-20 uppercase'>
      ¡ola pero ola de saludo, no ola de ola de mar!
    </h1>
    <div className='flex justify-center items-center mt-20'>
      <img src={ok} className="w-full h-auto max-w-screen-lg max-h-screen" alt="Descripción de la imagen" />
    </div>
  </div>
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/home',
        element: <Lading/> ,
      },
      {

      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
