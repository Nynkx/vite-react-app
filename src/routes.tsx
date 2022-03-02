import React, { lazy } from "react";
import { RouteObject } from "react-router";

const Home = lazy(() => import("./views/Home"));

export interface RouteObj {
  path?: string;
  name?: string;
  exact?: boolean;
  component?: React.FC<any> | React.LazyExoticComponent<React.FC<any>>;
}

const routes: Array<RouteObject> = [
  { path: "/home", element: React.createElement(Home) },
];

export default routes;
