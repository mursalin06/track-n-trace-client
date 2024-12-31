import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddLostAndFoundItem from "../pages/ProtectedPages/AddLostAndFoundItem";
import AllRecoveredItems from "../pages/ProtectedPages/AllRecoveredItems";
import ManageMyItems from "../pages/ProtectedPages/ManageMyItems";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>404, Route not found!</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/lost-and-found-items',
        element: <LostAndFoundItems></LostAndFoundItems>
    },
    {
        path: '/add-items',
        element: <PrivateRoute><AddLostAndFoundItem></AddLostAndFoundItem></PrivateRoute>
    },
    {
        path: '/all-recovered-items',
        element: <PrivateRoute><AllRecoveredItems></AllRecoveredItems></PrivateRoute>
    },
    {
        path: '/manage-my-items',
        element: <PrivateRoute><ManageMyItems></ManageMyItems></PrivateRoute>
    },

]);

export default router;