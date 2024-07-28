import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import Landpage from "./pages/Landpage"
import Login from "./pages/Login"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Landpage />,
  },
  {
    path: "/",
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
