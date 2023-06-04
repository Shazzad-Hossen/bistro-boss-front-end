import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

import { fetchMenu } from "../utilities/apiCaller";
import Order from "../pages/Order";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import Dashboard from "../layout/Dashboard";
import Mycart from "../pages/Dashboard/Mycart";
import Allusers from "../pages/Dashboard/Allusers";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        { path: '/', element: <Home/> },
        { path: '/menu', element: <Menu/>,
        loader: async()=>{return await fetchMenu()} },
        { path: '/order', element: <Order/> ,
        loader: async()=>{return await fetchMenu()} },
        { path: '/signin', element: <Signin/>},
        { path: '/signup', element: <SignUp/>},
        { path: '/details', element: <PrivateRoute><Details/></PrivateRoute>},
        {
          path: '/mycart',
          element: <Mycart/>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'mycart',
          element: <Mycart/>
        },
        {
          path: 'users',
          element: <Allusers/>
        }
      ]
    }
  ]);
  export default router;