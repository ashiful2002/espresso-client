import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import CoffeeDetails from "./Pages/Home/Components/CoffeeDetails.jsx";
import Loading from "./Components/Loading.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("http://localhost:3000/coffees").then((res) => res.json()),

        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/addcoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "/updatecoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`).then((res) =>
            res.json()
          ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
