import "./App.css";
import Login from "./views/login/login.jsx";
import Error from "./views/error/error.jsx";
import Home from "./views/home/home.jsx";
import User from "./views/user/user.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { patch } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [{ path: "userProfile", element: <User /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
