import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Access/Login";
import SignUp from "../pages/Access/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Shared/profile/Profile";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUser/AllUsers";
import AdminHome from "../pages/Dashboard/DHome/AdminHome";
import UserHome from "../pages/Dashboard/DHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
  // Dashboard routes
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path:"myCart",
        element:<MyCart></MyCart>
      },
      {
        path:"adminHome",
        element:<AdminHome></AdminHome>
      },
      {
        path:"userHome",
        element:<UserHome></UserHome>
      },
      {
        path:"reservation",
        element:<MyCart></MyCart>
      },
      {
        path:"allUsers",
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);