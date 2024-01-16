import React from 'react'
import ReactDOM from 'react-dom/client'
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
import NewProduct from './pages/CreateProduct/NewProduct.jsx';
import LoginPages from './pages/login/LoginPages.jsx';
import RegisterPages from './pages/registro/RegisterPages.jsx';
import { AuthProvider } from './providers/AuthProvider.jsx';
import Validation from './pages/validacion/Validation.jsx';

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
  {
    path: "/createproduct",
    element: <NewProduct/>
  },
  {
    path: "/login",
      element: <LoginPages/>
   },
   {
    path: "/register",
      element: <RegisterPages/>
   },
   {
    path: "/validation/:verificationCode/:email",
      element: <Validation/>
   },
]
},
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
