import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Contacts from "../Pages/Contacts/Contacts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Rooms from "../Pages/Rooms/Rooms";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/contacts',
                element: <Contacts></Contacts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    }
]);