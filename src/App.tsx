import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./Page/Home/Home";
import Layout from "./Page/Layout/Layout";
import Products from "./Page/Products/Products";
import Customers from "./Page/Management/Customers";
import Shops from "./Page/Management/Shops";
import Staffs from "./Page/Management/Staffs";
import SaleInvoice from "./Page/SaleInvoice/SaleInvoice";
import ProductsCategory from "./Page/Products/ProductsCategory";
import SaleInvoiceHistory from "./Page/SaleInvoice/SaleInvoiceHistory";

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
        path: "management",
        children: [
          {
            index: true,
            Component: Customers,
          },
          {
            path: "staffs",
            children: [
              {
                index: true,
                Component: Staffs,
              }
            ]

          },
          {
            path: "shops",
            children: [
              {
                index: true,
                Component: Shops
              }
            ]
          }
        ]
      },
      {
        path: "products",
        children: [
          {
            index: true,
            Component: Products
          },
          {
            path: "category",
            children: [
              {
                index: true,
                Component: ProductsCategory
              }
            ]

          }
        ]
      },
      {
        path: "sale-invoice",
        children: [
          {
            index: true,
            Component: SaleInvoice
          },
          {
            path: "history",
            children: [
              {
                index: true,
                Component: SaleInvoiceHistory
              }
            ]
          }
        ]
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