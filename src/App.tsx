import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Applayout from "./components/ui/AppLayout";
import Error from "./components/ui/Error";
import Home from "./pages/Home";
import Game from "./pages/Game";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
