import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Protfolio from './Pages/Protfolio/Protfolio'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Layout from './Components/Layout/Layout'
import "./index.css";




const routes = createBrowserRouter([
 {path:'',element:<Layout/>,children:[
  { index: true, element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
  { path: 'protfolio', element: <Protfolio /> },
 ]}
]);

export default function App() {
  return <>
  <RouterProvider router={routes}/>
  </>
}

