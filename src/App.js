/** @format */


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Detilse from "./componant/detilse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/produt/:productId",
    element: <Detilse />,
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
