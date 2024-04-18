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
import ShopForm from "./components/Management/shop/ShopForm";
import StaffForm from "./components/Management/staff/StaffForm";
import ManagementWrapper from "./components/Management/ManagementWrapper";
import CustomerForm from "./components/Management/customer/CustomerForm";
import ProductEditForm from "@/components/Product/ProductForm/ProductEditForm.tsx";
import SaleInvoiceHistory from "./Page/SaleInvoice/SaleInvoiceHistory";
import ShopEditForm from "./components/Management/shop/ShopEditForm";
import CustomerEditForm from "./components/Management/customer/CustomerEditForm";
import StaffEditForm from "./components/Management/staff/StaffEditForm";
import CategoryEditForm from "@/components/Category/CategoryEditForm.tsx";
import CategoryCreateForm from "@/components/Category/CategoryCreateForm.tsx";
import ProductCreateFrom from "@/components/Product/ProductForm/ProductCreateFrom.tsx";



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
                element: <ManagementWrapper />,
                children: [
                    {
                        path: "shops",
                        children: [

                            { index: true, element: <Shops /> },
                            { path: "edit/:shopId", element: <ShopEditForm /> },
                            { path: "create", element: <ShopForm /> }
                        ]
                    },
                    {
                        path: "customers",
                        children: [
                            { index: true, element: <Customers /> },
                            { path: "edit/:customerId", element: <CustomerEditForm /> },
                            { path: "create", element: <CustomerForm /> }
                        ]
                    },
                    {
                        path: "staffs", children: [
                            { index: true, element: <Staffs /> },
                            { path: "edit/:staffId", element: <StaffEditForm /> },
                            { path: "create", element: <StaffForm /> }
                        ]
                    },
                ]
            },
            {
                path: "products",
                children: [
                    {index: true, element: <Products/>},
                    {path: "edit", element: <ProductEditForm/>},
                    {path: "create", element: <ProductCreateFrom/>},
                    {path: "category", children: [
                            {index: true, element: <ProductsCategory/>},
                            {path: "edit", element: <CategoryEditForm/>},
                            {path: "create", element: <CategoryCreateForm/>}
                        ]}
                ]
            },
            {
                path: "sale-invoice",
                children: [
                    { index: true, element: <SaleInvoice /> },
                    { path: "history", element: <SaleInvoiceHistory /> },
                    { path: "detail", element: <SaleInvoiceDetails /> }
                ]
            }
        ]
    }

]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;