import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/categoryDetails/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/category/${params.id}`),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addToys/${params.id}`),
      },
    ],
  },
]);

export default router;
