import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Registration from "../pages/Registration/Registration";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch("https://car-stock-server.vercel.app/totalToys"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/categoryDetails/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-stock-server.vercel.app/categories/category/${params.id}`
          ),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-stock-server.vercel.app/addToys/${params.id}`),
      },
    ],
  },
]);

export default router;
