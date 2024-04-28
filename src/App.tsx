import { RouterProvider, createBrowserRouter } from "react-router-dom";
// App.tsx
import 'react-day-picker/dist/style.css';

import { Home } from "./Page/Home/Home";
import Layout from "./Page/Layout/Layout";
import Products from "./Page/Products/Products";
import Customers from "./Page/Management/Customers";
import Staffs from "./Page/Management/Staffs";
import ProductsCategory from "./Page/Products/ProductsCategory";
import SaleInvoiceDetails from "./Page/SaleInvoice/SaleInvoiceDetail";
import CustomerForm from "./components/Management/customer/CustomerForm";
import SaleInvoiceHistory from "./Page/SaleInvoice/SaleInvoiceHistory";
import CustomerEditForm from "./components/Management/customer/CustomerEditForm";
import StaffEditForm from "./components/Management/staff/StaffEditForm";
import CategoryEditForm from "@/components/Category/CategoryEditForm.tsx";
import CategoryCreateForm from "@/components/Category/CategoryCreateForm.tsx";
import ProductCreateFrom from "@/components/Product/ProductForm/ProductCreateFrom.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import StaffForm from "./components/Management/staff/StaffForm";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "edit/:categoryId",
                element: <CategoryEditForm />
            },
            {
                path: "create",
                element: <ProductCreateFrom />
            },
            {
                path: "product-category", children: [
                    { index: true, element: <ProductsCategory /> },
                    { path: "edit/:categoryId", element: <CategoryEditForm /> },
                    { path: "create", element: <CategoryCreateForm /> }
                ]
            },
            {
                path: "dashboard", children: [
                    { index: true, element: <Home /> },
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
            {
                path: "sale-invoice",
                children: [
                    { index: true, element: <SaleInvoiceHistory /> },
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