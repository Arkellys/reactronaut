import { createBrowserRouter } from "react-router-dom";

import SolarSystem from "@pages/SolarSystem";
import Planet from "@pages/Planet";
import CreatePlanetForm from "@pages/CreatePlanetForm";
import Sun from "@pages/Sun";

import Layout from "../Layout";

export const getPath = {
  solarSystem: () => "/",
  planets: (id = ":id") => `/planets/${id}`,
  sun: () => "/sun",
  createPlanet: () => "/planets/create"
};

export const router = createBrowserRouter([{
  path: getPath.solarSystem(),
  element: <Layout />,
  children: [
    {
      index: true,
      element: <SolarSystem />
    },
    {
      path: getPath.planets(),
      element: <Planet />
    },
    {
      path: getPath.sun(),
      element: <Sun />
    },
    {
      path: getPath.createPlanet(),
      element: <CreatePlanetForm />
    }
  ]
}]);