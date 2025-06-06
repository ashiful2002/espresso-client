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
import Signin from "./Pages/Signin/Signin.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Users from "./Pages/Users/Users.jsx";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Users2 from "./Pages/Users/Users2/Users2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        // loader: () =>
        //   fetch("http://localhost:3000/coffees").then((res) => res.json()),

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
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/coffees/${params.id}`).then((res) =>
        //     res.json()
        //   ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/signin",
        Component: Signin,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/signup",
        Component: SignUp,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/users",
        Component: Users,
        // loader: () => fetch("http://localhost:3000/users"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/users2",
        element: <Users2></Users2>,
      },
    ],
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
