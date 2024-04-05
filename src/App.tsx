import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./Page/Home";
import Products from "./Page/Products";
import Layout from "./layout/Layout";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/products",
        Component: Products
      }
    ]

  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
