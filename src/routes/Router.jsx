import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blogs from "../Pages/Home/Blogs";
import AddToy from "../Pages/AddToy";
import PrivetRoute from "./PrivetRoute";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path: '/blogs',
            element:<Blogs></Blogs>
        },
        {
          path:'/addtoys',
          element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
        },
        {
          path: '/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);
  export default router