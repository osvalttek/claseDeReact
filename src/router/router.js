import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import Count from "../components/main/Count";
import Logout from "../components/main/Logout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: "Erroooo",
            children: [
                {
                    path: "/",
                    element: "home"
                },
                {
                    path: "/about",
                    element: "about"
                },
                {
                    path: "/products",
                    element: "products"
                },
                {
                    path: "/product/:id",
                    element: "product"
                },
                {
                    path: "/cart",
                    element: "cart"
                },
                {
                    path: "/logout",
                    element: <Logout />
                },
                {
                    path: "/editProfile",
                    element: "editProfile"
                },
                {
                    path: "/count",
                    element: <Count/>
                }

            ]
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        }

    ]
)

export default router