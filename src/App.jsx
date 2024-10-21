import "./App.css";
import Login from "./views/login/login.jsx";
import Error from "./views/error/error.jsx";
import Home from "./views/home/home.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home/>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

