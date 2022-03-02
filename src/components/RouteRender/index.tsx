import { Routes, Route, RouteObject } from "react-router";

import routes, { RouteObj } from "../../routes";
import Home from "../../views/Home";

function RouteRender() {
  const routeList = routes.map((route: RouteObject, index: number) => (
    <Route {...route} key={index}></Route>
  ));
  return (
    <>
      <Routes>{routeList}</Routes>
    </>
  );
}

export default RouteRender;
