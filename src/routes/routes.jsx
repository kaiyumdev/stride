import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registrations from "../pages/Registrations";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductDetails from "../components/home/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoes")
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/shoes/${params.id}`)
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registrations />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "",
       element: <PrivateRoute><Dashboard /></PrivateRoute>,
       loader: () => fetch("http://localhost:3000/shoes")
      },
      { path: "/dashboard/allProducts",
      element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute> 
     },
     { path: "/dashboard/addProduct",
     element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
    },
    { path: "/dashboard/allProducts/edit/:id",
    element: <PrivateRoute><EditProduct></EditProduct></PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
   }
    ],
  },
]);
