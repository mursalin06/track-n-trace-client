import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                path:'/lost-and-found-items',
                element:<LostAndFoundItems></LostAndFoundItems>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);

export default router;