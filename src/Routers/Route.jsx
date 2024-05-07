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
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItem/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

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
        path: 'userhome',
        element: <UserHome></UserHome>,
      },
      {
        path:"myCart",
        element:<MyCart></MyCart>
      },
      {
        path:"reservation",
        element:<MyCart></MyCart>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      // admin route
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path:"allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
    ]
  }
]);