import "./App.css";
import Login from "./views/login/login.jsx";
import Error from "./views/error/error.jsx";
import Home from "./views/home/home.jsx";
import User from "./views/user/user.jsx";
import Staff from "./views/staff/staff.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { 
        path: "userProfile",
        element: <User />
      },
      {
        path: "Staff",
        element: <Staff/>,
      },
      {
        path: "teams",
        element: <h1>teams</h1>,
      },
      {
        path: "tasks",
        element: <h1>tasks</h1>,
      },
    ],
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
