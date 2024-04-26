import { Home, NotepadText, Users, UserRound, Layers3, LineChart } from "lucide-react";

export const navLinks = [
  {
    routeName: "Products",
    icon: <Home />,
    route: "/",
  },
  {
    routeName: "Dashboard",
    icon: <LineChart />,
    route: "/dashboard",
  },

  {
    routeName: "Category",
    icon: <Layers3 />,
    route: "/product-category",
  },

  {
    routeName: "Invoice",
    icon: <NotepadText />,
    route: "/sale-invoice",
    // subRoutes: [
    //   {
    //     routeName: "Invoice History",
    //     route: "/sale-invoice",
    //   },
      // {
      //   routeName: "History",
      //   route: "/sale-invoice/history",
      // },
    // ],
  },
  {
    routeName: "Customers",
    icon: <Users />,
    route: "/customers",
  },
  {
    routeName: "Staffs",
    icon: <UserRound />,
    route: "/staffs",
  },
];
