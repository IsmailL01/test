import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import ContactWithMe from "../pages/contactWithMe";
import Card from "../pages/card";
import Layout from "../pages/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactWithMe",
        element: <ContactWithMe />,
      },
      {
        path: "/card/:id",
        element: <Card />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
