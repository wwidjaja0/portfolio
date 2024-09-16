import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WorksPage from "./routes/WorkPage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import ThoughtsPage from "./routes/ThoughtsPage.jsx";
import "./index.css";
import { BackgroundBeamsDemo } from "./routes/BackgroundBeamsDemo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WorksPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "thoughts",
    element: <ThoughtsPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "beams",
    element: <BackgroundBeamsDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
