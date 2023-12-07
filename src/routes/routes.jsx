import HomePage from "../Pages/HomePage";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
    {
        element:<DashboardLayout />,
        children:[
            {
                path:'/',
                element:<HomePage />
            }
        ]
    }
])  