import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./Page/Home/Home";
import Layout from "./Page/Layout/Layout";
import Products from "./Page/Products/Products";
import Customers from "./Page/Management/Customers";
import Shops from "./Page/Management/Shops";
import Staffs from "./Page/Management/Staffs";
import SaleInvoice from "./Page/SaleInvoice/SaleInvoice";
import ProductsCategory from "./Page/Products/ProductsCategory";
import SaleInvoiceDetails from "./Page/SaleInvoice/SaleInvoiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "management",
        children: [
          { element: <Shops />, index: true },
          { path: "customers", element: <Customers /> },
          { path: "staffs", element: <Staffs /> },
        ]
      },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: "category", element: <ProductsCategory /> }
        ]
      },
      {
        path: "sale-invoice",
        children: [
          { index: true, element: <SaleInvoice /> },
          { path: "history", element: <SaleInvoiceDetails /> }
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