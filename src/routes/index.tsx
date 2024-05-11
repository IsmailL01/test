import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import ContactWithMe from "../pages/contactWithMe";

const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about",
    element: <ContactWithMe />,
  },
];

export const router = createBrowserRouter(routes);
