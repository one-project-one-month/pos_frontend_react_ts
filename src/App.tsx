import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Products from "./Page/Products";
import Layout from "./layout/Layout";
import Invoice from "./Page/Invoice";
import InvoiceHistory from "./Page/InvoiceHistory";
import { QueryClient } from "@tanstack/react-query";
import { productsByPageLoader } from "@/services/loader.ts";
import { Home } from "./Page/Home/Home";

const queryClient = new QueryClient();


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
        Component: Products,
        loader: productsByPageLoader(queryClient),
      },
      {
        path: "/invoice",
        Component: Invoice
      },
      {
        path: "/history",
        Component: InvoiceHistory
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