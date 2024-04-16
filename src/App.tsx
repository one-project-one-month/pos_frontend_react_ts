import {RouterProvider, createBrowserRouter} from "react-router-dom";

import {Home} from "./Page/Home/Home";
import Layout from "./Page/Layout/Layout";
import Products from "./Page/Products/Products";
import Customers from "./Page/Management/Customers";
import Shops from "./Page/Management/Shops";
import Staffs from "./Page/Management/Staffs";
import SaleInvoice from "./Page/SaleInvoice/SaleInvoice";
import ProductsCategory from "./Page/Products/ProductsCategory";
import SaleInvoiceDetails from "./Page/SaleInvoice/SaleInvoiceDetail";
import ShopForm from "./components/Management/shop/ShopForm";
import StaffForm from "./components/Management/staff/StaffForm";
import ManagementWrapper from "./components/Management/ManagementWrapper";
import CustomerForm from "./components/Management/customer/CustomerForm";
import ProductEditForm from "@/components/Product/ProductEditForm.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "management",
                element: <ManagementWrapper/>,
                children: [
                    {
                        path: "shops",
                        children: [
                            {index: true, element: <Shops/>},
                            {path: "create", element: <ShopForm/>}
                        ]
                    },
                    {
                        path: "customers",
                        children: [
                            {index: true, element: <Customers/>},
                            {path: "create", element: <CustomerForm/>}
                        ]
                    },
                    {
                        path: "staffs", children: [
                            {index: true, element: <Staffs/>},
                            {path: "create", element: <StaffForm/>}
                        ]
                    },
                ]
            },
            {
                path: "products",
                children: [
                    {index: true, element: <Products/>},
                    {path: "edit", element: <ProductEditForm/>},
                    {path: "category", element: <ProductsCategory/>}
                ]
            },
            {
                path: "sale-invoice",
                children: [
                    {index: true, element: <SaleInvoice/>},
                    {path: "history", element: <SaleInvoiceDetails/>}
                ]
            }
        ]
    }

]);


function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;