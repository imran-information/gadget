import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Cards from "../components/Cards";
import CardDetails from "../components/CardDetails";
import DashboardCart from "../components/DashboardCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../productCategory.json'),
                children: [
                    {
                        path: '/',
                        element: <Cards></Cards>,
                        loader: () => fetch('../products.json')

                    },

                ],

            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('../products.json')

            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    
                ]
            },
        ]
    }
])

export default router