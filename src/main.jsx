import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './views/App'
import Gallery from './views/Gallery'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/gallery', element: <Gallery /> }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)
