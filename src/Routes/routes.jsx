import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

import { fetchMenu } from "../utilities/apiCaller";
import Order from "../pages/Order";
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
      ]
    },
  ]);
  export default router;