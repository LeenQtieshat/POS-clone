import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import routes from "../../common/routes";

const PageRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      {routes(isAuthenticated).map((route) => {
        return (
          <Route
            key={route.name}
            exact
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
};

export default PageRoutes;
