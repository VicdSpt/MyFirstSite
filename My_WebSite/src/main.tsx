import ReactDOM from "react-dom/client";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import "./App.css";

import App from "./App.tsx";
import MainHomePage from "./pages/MainHomePage.tsx";
import PagePortfolio from "./pages/PagePortfolio.tsx";
import PageResume from "./pages/PageResume.tsx";
import MoreAboutMe from "./pages/MoreAboutMe.tsx";
import PageContact from "./pages/PageContact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainHomePage />,
      },
      {
        path: "portfolio",
        element: <PagePortfolio />,
      },
      {
        path: "resume",
        element: <PageResume />,
      },
      {
        path: "moreaboutme",
        element: <MoreAboutMe />,
      },
      {
        path: "contact",
        element: <PageContact />,
      },
    ],
  },
]);

const roolElement = document.getElementById("root")

if(roolElement != null){
  ReactDOM.createRoot(roolElement).render(
    <RouterProvider router={router} />
  )
}