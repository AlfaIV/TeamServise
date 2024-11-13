import "./App.css";
import Login from "./views/login/login.jsx";
import Error from "./views/error/error.jsx";
import Home from "./views/home/home.jsx";
import User from "./views/user/user.jsx";
import Staff from "./views/staff/staff.jsx";
import Team from "./views/team/team.jsx";
import Tasks from "./views/tasks/tasks.jsx";

import { QueryClient, QueryClientProvider } from "react-query";
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
        element: <User />,
      },
      {
        path: "Staff",
        element: <Staff />,
      },
      {
        path: "teams",
        element: <Team />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
