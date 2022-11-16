import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import Cart from "../components/main/cart/Cart";
import Logout from "../components/main/Logout";
import ProductDetailContainer from "../components/main/productDetail/ProductDetailContainer";
import ProductsListContainer from "../components/main/productsListContainer/ProductsListContainer";

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
                    element: <ProductsListContainer />
                },
                {
                    path: "/product/:id",
                    element: <ProductDetailContainer />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/logout",
                    element: <Logout />
                },
                {
                    path: "/editProfile",
                    element: "editProfile"
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