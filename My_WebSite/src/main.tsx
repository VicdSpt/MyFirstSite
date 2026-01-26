import ReactDOM from "react-dom/client";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import "./App.css";

import MainHomePage from "./pages/MainHomePage.tsx";
import PagePortfolio from "./pages/PagePortfolio.tsx";
import PageResume from "./pages/PageResume.tsx";
import PageContact from "./pages/PageContact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHomePage />,
  },
  {
    path: "/portfolio",
    element: <PagePortfolio />,
  },
  {
    path: "/resume",
    element: <PageResume />,
  },
  {
    path: "/contact",
    element: <PageContact />,
  },
]);

const roolElement = document.getElementById("root")

if(roolElement != null){
  ReactDOM.createRoot(roolElement).render(
    <RouterProvider router={router} />
  )
}

