import Confirmation from "../pages/Confirmation";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const getRoutes = (isAuthenticated) => [
  {
    name: isAuthenticated ? "Home" : "Login",
    path: "/",
    component: isAuthenticated ? Home : Login,
    exact: true,
  },
  {
    
    name: isAuthenticated ? 'Confirmation' : 'Login',
    path: '/confirmation',
    component: isAuthenticated ? Confirmation : Login
  }
];

export default getRoutes;
