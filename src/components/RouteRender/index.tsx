import { Routes, Route, RouteObject } from "react-router";

import routes, { RouteObj } from "../../routes";

function RouteRender() {
  const routeList = routes.map((route: RouteObject) => (
    <Route {...route}></Route>
  ));
  return (
    <>
      <Routes>{routeList}</Routes>
    </>
  );
}

export default RouteRender;
