import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

        children: [
            {
                path: "/",
                loader: () => fetch("AppsFakeData.json"),
                Component: Home,
            },
            {
                path: "/apps",
                Component: Apps,
            },
            {
                path:"/installation",
                Component: Installation,
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);