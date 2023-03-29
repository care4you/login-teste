import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './Pages/Login'
import { action as actionLogin } from './Pages/Login'
import './index.css'
import Logado from './Pages/Logado'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    errorElement: <p>Erro 404: página não encontrada, por favor volte à página anterior.</p>,
    action: actionLogin,
  },
  {
    path: '/logado',
    element: <Logado/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
