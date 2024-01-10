import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";

import Home from "./Components/Home/Home.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contect from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contect />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
