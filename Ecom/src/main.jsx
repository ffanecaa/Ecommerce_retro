import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/Product/Product.jsx';
import Products from './pages/Products/Products.jsx';
import Home from './pages/Home/Home.jsx';
import Navbar from './componets/Navbar/Navbar.jsx';
import Footer from './componets/Footer/Footer.jsx';

const Layout =()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[

   
  {
    path: "/",
    element: <Home/>
  },
   
  {
    path: "/products/:id",
    element: <Products/>
  },
  {
    path: "/product/:id",
    element: <Product/>
  },
]
},
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
