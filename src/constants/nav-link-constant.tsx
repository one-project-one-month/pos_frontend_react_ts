import { Home, Package, NotepadText, UserCog } from "lucide-react";

export const navLinks = [
  {
    routeName: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    routeName: "Management",
    icon: <UserCog />,
    route: "/management",
    subRoutes: [
      {
        routeName: "Shops",
        route: "/management",
      },
      {
        routeName: "Customers",
        route: "/management/customers",
      },

      {
        routeName: "Staffs",
        route: "/management/staffs",
      },
    ],
  },
  {
    routeName: "Products",
    icon: <Package />,
    route: "/products",
    subRoutes: [
      {
        routeName: "Products",
        route: "/products",
      },
      {
        routeName: "Category",
        route: "/products/category",
      },
    ],
  },

  {
    routeName: "Invoice",
    icon: <NotepadText />,
    route: "/sale-invoice",
    subRoutes: [
      {
        routeName: "Invoice",
        route: "/sale-invoice",
      },
      {
        routeName: "History",
        route: "/sale-invoice/history",
      },
    ],
  },
];
