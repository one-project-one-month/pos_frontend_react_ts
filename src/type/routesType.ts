export type TRoutes = {
  routeName: string;
  icon?: JSX.Element;
  route: string;
  subRoutes?: TRoutes[];
};
