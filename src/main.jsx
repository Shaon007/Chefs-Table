// eslint-disable-next-line no-unused-vars
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Homepage from './Pages/Hompage/Homepage';
import About from './Pages/About/About';
import 'font-awesome/css/font-awesome.min.css';



const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
