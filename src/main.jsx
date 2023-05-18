import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './Pages/provider/AuthProvider'
// import AuthProvider from './Pages/provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
    </div>
  </React.StrictMode>,
)
