import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

        children: [
            {
                path: "/",
                loader: async ()=> {
                    const res =await fetch("/AppsFakeData.json");
                    if(!res.ok) throw new Error ('Failed to load AppsFakeData.json');
                    return res.json()
                },
                Component: Home,
            },
            {
                path: "/apps",
                loader: async ()=> {
                    const res =await fetch("/AppsFakeData.json");
                    if(!res.ok) throw new Error ('Failed to load AppsFakeData.json');
                    return res.json()
                },
                Component: Apps,
            },
            {
                path:"/installation",
                loader: async ()=> {
                    const res =await fetch("/AppsFakeData.json");
                    if(!res.ok) throw new Error ('Failed to load AppsFakeData.json');
                    return res.json()
                },
                Component: Installation,
            },
            {
                path: "/bookDetails/:id",
                loader: async ()=> {
                    const res =await fetch("/AppsFakeData.json");
                    if(!res.ok) throw new Error ('Failed to load AppsFakeData.json');
                    return res.json()
                },
                Component: AppDetails,
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);