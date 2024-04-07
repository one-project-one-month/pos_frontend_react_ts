import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./Page/Home";
import Products from "./Page/Products";
import Layout from "./layout/Layout";
import Invoice from "./Page/Invoice";
import InvoiceHistory from "./Page/InvoiceHistory";
import InvoiceDetail from "./Page/InvoiceDetail";

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
      },
      {
        path: "/invoice",
        Component: Invoice
      },
      {
        path: "/invoiceDetail",
        Component: InvoiceDetail
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